// Centralised localStorage interface — all reads/writes go through here.

const KEYS = {
  QUESTION_HISTORY: 'gem1_question_history',
  FLASHCARD_HISTORY: 'gem1_flashcard_history',
  TOPIC_STATS:       'gem1_topic_stats',
  EXAM_HISTORY:      'gem1_exam_history',
  DAILY_QUIZ:        'gem1_daily_quiz',
  STREAK:            'gem1_streak',
};

function load(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ── Question history ──────────────────────────────────────────────────────────
// { [id]: { attempts, correct, lastAttempted, dueDate } }

function getQuestionHistory() {
  return load(KEYS.QUESTION_HISTORY) || {};
}

function recordQuestionResult(id, correct) {
  const history = getQuestionHistory();
  const entry = history[id] || { attempts: 0, correct: 0, lastAttempted: null, dueDate: null };
  entry.attempts++;
  if (correct) entry.correct++;
  entry.lastAttempted = Date.now();
  // Simple adaptive due-date: wrong answers come back sooner
  const daysUntilDue = correct
    ? Math.min(2 ** (entry.correct - 1), 30)   // 1, 2, 4, 8 … 30 days
    : 1;
  entry.dueDate = Date.now() + daysUntilDue * 86400000;
  history[id] = entry;
  save(KEYS.QUESTION_HISTORY, history);
}

// ── Flashcard history (SM-2) ──────────────────────────────────────────────────
// { [id]: { interval, easeFactor, repetitions, nextDue } }

function getFlashcardHistory() {
  return load(KEYS.FLASHCARD_HISTORY) || {};
}

function recordFlashcardResult(id, grade) {
  // grade: 0 (fail) … 5 (perfect)
  const history = getFlashcardHistory();
  const card = history[id] || { interval: 1, easeFactor: 2.5, repetitions: 0, nextDue: Date.now() };

  if (grade < 3) {
    card.repetitions = 0;
    card.interval = 1;
  } else {
    if (card.repetitions === 0) card.interval = 1;
    else if (card.repetitions === 1) card.interval = 6;
    else card.interval = Math.round(card.interval * card.easeFactor);
    card.repetitions++;
  }

  card.easeFactor = Math.max(1.3, card.easeFactor + 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  card.nextDue = Date.now() + card.interval * 86400000;
  history[id] = card;
  save(KEYS.FLASHCARD_HISTORY, history);
}

// ── Topic stats ───────────────────────────────────────────────────────────────
// { [topic]: { correct, total, history: [{date, correct, total}] } }

function getTopicStats() {
  return load(KEYS.TOPIC_STATS) || {};
}

function recordTopicResult(topic, correct) {
  const stats = getTopicStats();
  if (!stats[topic]) stats[topic] = { correct: 0, total: 0, history: [] };
  stats[topic].total++;
  if (correct) stats[topic].correct++;

  const today = new Date().toISOString().slice(0, 10);
  const last = stats[topic].history.at(-1);
  if (last && last.date === today) {
    last.total++;
    if (correct) last.correct++;
  } else {
    stats[topic].history.push({ date: today, correct: correct ? 1 : 0, total: 1 });
  }
  save(KEYS.TOPIC_STATS, stats);
}

// ── Exam history ──────────────────────────────────────────────────────────────

function getExamHistory() {
  return load(KEYS.EXAM_HISTORY) || [];
}

function recordExam(result) {
  // result: { score, total, durationSecs, topicBreakdown }
  const history = getExamHistory();
  history.push({ date: Date.now(), ...result });
  save(KEYS.EXAM_HISTORY, history);
}

// ── Daily quiz ────────────────────────────────────────────────────────────────

function getDailyQuiz() {
  const today = new Date().toISOString().slice(0, 10);
  const stored = load(KEYS.DAILY_QUIZ);
  if (stored && stored.date === today) return stored;
  // New day — reset
  const fresh = { date: today, answered: [], completed: false };
  save(KEYS.DAILY_QUIZ, fresh);
  return fresh;
}

function saveDailyQuiz(state) {
  save(KEYS.DAILY_QUIZ, state);
}

// ── Streak ────────────────────────────────────────────────────────────────────

function getStreak() {
  return load(KEYS.STREAK) || { count: 0, lastStudyDate: null };
}

function touchStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const s = getStreak();
  if (s.lastStudyDate === today) return s;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  s.count = s.lastStudyDate === yesterday ? s.count + 1 : 1;
  s.lastStudyDate = today;
  save(KEYS.STREAK, s);
  return s;
}

// ── Due counts ────────────────────────────────────────────────────────────────

function countDueFlashcards(flashcards) {
  const history = getFlashcardHistory();
  const now = Date.now();
  return flashcards.filter(c => {
    const h = history[c.id];
    return !h || h.nextDue <= now;
  }).length;
}

function countDueQuestions(questions) {
  const history = getQuestionHistory();
  const now = Date.now();
  return questions.filter(q => {
    const h = history[q.id];
    return !h || h.dueDate <= now;
  }).length;
}

// ── Dev helper ────────────────────────────────────────────────────────────────

function clearAllData() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k));
}
