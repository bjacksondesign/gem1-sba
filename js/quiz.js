// Adaptive Daily Quiz
// Serves questions weighted toward weak topics + overdue items first.

document.addEventListener('DOMContentLoaded', initQuiz);

const DAILY_TARGET = 20;
let queue = [];
let qIndex = 0;
let sessionCorrect = 0;
let sessionWrong = 0;
let answered = false;

function initQuiz() {
  const root = document.getElementById('quiz-root');
  if (!QUESTIONS.length) {
    root.innerHTML = `<h1>Daily Quiz</h1>
      <p class="subtitle">No questions loaded yet.</p>
      <div class="empty-state"><div class="empty-icon">📭</div>
      <p>Import your question bank from the <a href="index.html">Dashboard</a> first.</p></div>`;
    return;
  }
  buildQueue();
  renderQuizShell(root);
  renderQuestion();
}

// ── Queue building ────────────────────────────────────────────────────────
function buildQueue() {
  const history = getQuestionHistory();
  const topicStats = getTopicStats();
  const now = Date.now();

  // Score each question: lower score = higher priority to appear
  const scored = QUESTIONS.map(q => {
    const h = history[q.id];
    const topicS = topicStats[q.topic] || { correct: 0, total: 0 };
    const topicPct = topicS.total > 0 ? topicS.correct / topicS.total : 0;

    let priority = 0;

    // Overdue or never seen: highest priority
    if (!h) {
      priority = 0;
    } else if (h.dueDate <= now) {
      priority = 1 + (now - h.dueDate) / 86400000; // more overdue = higher
    } else {
      priority = 10 + (h.dueDate - now) / 86400000;
    }

    // Boost priority for weak topics (< 60% correct)
    if (topicPct < 0.6 && topicS.total > 0) priority -= 3;

    return { q, priority };
  });

  scored.sort((a, b) => a.priority - b.priority);

  // Take top DAILY_TARGET, with slight shuffle among equal-priority groups
  const top = scored.slice(0, DAILY_TARGET * 2);
  // Shuffle the top half lightly
  for (let i = top.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * Math.max(1, i - 2));
    [top[i], top[j]] = [top[j], top[i]];
  }

  queue = top.slice(0, DAILY_TARGET).map(s => s.q);
  qIndex = 0;
  sessionCorrect = 0;
  sessionWrong = 0;
}

// ── Shell HTML ────────────────────────────────────────────────────────────
function renderQuizShell(root) {
  const daily = getDailyQuiz();
  root.innerHTML = `
    <h1>Daily Quiz</h1>
    <p class="subtitle" id="quiz-subtitle">Adaptive · prioritising your weak topics · ${DAILY_TARGET} questions</p>

    <div class="cat-bar" id="cat-bar">
      <button class="cat-btn active" onclick="setFilter('all',this)">All</button>
      ${TOPICS.map(t => `<button class="cat-btn" onclick="setFilter('${t}',this)">${t}</button>`).join('')}
    </div>

    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px">
      <div style="font-family:var(--mono);font-size:13px;color:var(--muted)">
        <strong id="q-current" style="color:var(--text)">1</strong> / <span id="q-total">${queue.length}</span>
      </div>
      <div style="font-family:var(--mono);font-size:13px">
        ✓ <strong id="correct-count" style="color:var(--green)">0</strong>
        &nbsp; ✗ <strong id="wrong-count" style="color:var(--red)">0</strong>
      </div>
    </div>

    <div id="progress-fill-quiz" style="height:3px;background:var(--border);border-radius:99px;margin-bottom:24px;overflow:hidden">
      <div id="quiz-pbar" style="height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));width:0%;transition:width .4s ease"></div>
    </div>

    <div id="question-card-wrap"></div>
    <div id="quiz-results" style="display:none"></div>
  `;
}

// ── Topic filter ──────────────────────────────────────────────────────────
let activeFilter = 'all';
function setFilter(topic, btn) {
  activeFilter = topic;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (topic === 'all') {
    buildQueue();
  } else {
    const history = getQuestionHistory();
    const now = Date.now();
    queue = QUESTIONS.filter(q => q.topic === topic)
      .sort((a, b) => {
        const ha = history[a.id], hb = history[b.id];
        const da = ha ? ha.dueDate : 0, db = hb ? hb.dueDate : 0;
        return da - db;
      });
  }

  document.getElementById('q-total').textContent = queue.length;
  qIndex = 0; sessionCorrect = 0; sessionWrong = 0;
  document.getElementById('correct-count').textContent = 0;
  document.getElementById('wrong-count').textContent = 0;
  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('question-card-wrap').style.display = '';
  renderQuestion();
}

// ── Render question ───────────────────────────────────────────────────────
function renderQuestion() {
  if (qIndex >= queue.length) { showQuizResults(); return; }

  answered = false;
  const q = queue[qIndex];
  const letters = ['A','B','C','D','E'];

  // Shuffle options
  const opts = Object.entries(q.options);
  const shuffled = [...opts].sort(() => Math.random() - 0.5);
  const correctLetter = shuffled.findIndex(([k]) => k === q.answer);

  document.getElementById('q-current').textContent = qIndex + 1;
  document.getElementById('quiz-pbar').style.width = ((qIndex / queue.length) * 100) + '%';

  window._correctIdx = correctLetter;
  window._qId = q.id;
  window._qTopic = q.topic;
  window._exp = q.explanation;

  const wrap = document.getElementById('question-card-wrap');
  wrap.innerHTML = `
    <div class="question-card">
      <div class="q-meta">
        <span class="q-tag">${q.topic}</span>
        <span class="q-num">Q${qIndex + 1} of ${queue.length}</span>
      </div>
      <div class="question-text">${q.stem}</div>
      <div class="options" id="options-list">
        ${shuffled.map(([, text], i) => `
          <div class="option" id="opt-${i}" data-idx="${i}" onclick="selectAnswer(${i})">
            <span class="option-letter">${letters[i]}</span>
            <span>${text}</span>
          </div>
        `).join('')}
      </div>
      <div class="explanation" id="explanation">
        <div class="exp-label">Explanation</div>
        <p id="exp-text"></p>
        <div id="exp-resources"></div>
      </div>
      <button id="next-btn" onclick="nextQuestion()">Next →</button>
    </div>
  `;
}

// ── Answer selection ──────────────────────────────────────────────────────
function selectAnswer(chosen) {
  if (answered) return;
  answered = true;

  const correct = window._correctIdx;
  const isCorrect = chosen === correct;

  document.querySelectorAll('.option').forEach(o => o.classList.add('disabled'));
  document.getElementById(`opt-${correct}`).classList.add('correct');
  if (!isCorrect) document.getElementById(`opt-${chosen}`).classList.add('wrong');

  if (isCorrect) {
    sessionCorrect++;
    document.getElementById('correct-count').textContent = sessionCorrect;
  } else {
    sessionWrong++;
    document.getElementById('wrong-count').textContent = sessionWrong;
  }

  // Save to storage
  recordQuestionResult(window._qId, isCorrect);
  recordTopicResult(window._qTopic, isCorrect);
  touchStreak();

  // Update daily quiz state
  const daily = getDailyQuiz();
  daily.answered.push({ id: window._qId, correct: isCorrect });
  if (daily.answered.length >= DAILY_TARGET) daily.completed = true;
  saveDailyQuiz(daily);

  // Show explanation + resources
  const res = getResources(window._qId);
  const resHtml = res ? `
    <div class="exp-resources">
      <div class="exp-res-label">Further reading</div>
      ${res.guideline ? `<div class="exp-res-item">📋 <strong>Guideline:</strong> ${res.guideline}</div>` : ''}
      ${res.bnf       ? `<div class="exp-res-item">📖 <strong>BNF:</strong> ${res.bnf}</div>` : ''}
      ${res.rang      ? `<div class="exp-res-item">📚 <strong>Rang & Dale:</strong> ${res.rang}</div>` : ''}
      ${res.notes     ? `<div class="exp-res-item">💡 <strong>Notes:</strong> ${res.notes}</div>` : ''}
    </div>` : '';

  document.getElementById('exp-text').textContent = window._exp;
  document.getElementById('exp-resources').innerHTML = resHtml;
  document.getElementById('explanation').style.display = 'block';
  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  qIndex++;
  renderQuestion();
}

// ── Results ───────────────────────────────────────────────────────────────
function showQuizResults() {
  document.getElementById('quiz-pbar').style.width = '100%';
  document.getElementById('question-card-wrap').style.display = 'none';

  const total = sessionCorrect + sessionWrong;
  const pct = total > 0 ? Math.round(sessionCorrect / total * 100) : 0;
  const msg = pct >= 80 ? "Smashing it 🔥" : pct >= 60 ? "Solid work, keep going 📚" : "More reps needed — you've got time 💪";

  // Topic breakdown
  const byTopic = {};
  queue.forEach((q, i) => {
    if (i >= total) return;
    if (!byTopic[q.topic]) byTopic[q.topic] = { c: 0, t: 0 };
    byTopic[q.topic].t++;
  });
  const history = getQuestionHistory();
  getDailyQuiz().answered.slice(-total).forEach(a => {
    const q = QUESTIONS.find(q => q.id === a.id);
    if (q && byTopic[q.topic]) { if (a.correct) byTopic[q.topic].c++; }
  });

  const breakdownRows = Object.entries(byTopic).map(([topic, s]) => {
    const p = s.t > 0 ? Math.round(s.c / s.t * 100) : 0;
    const cls = p >= 70 ? 'good' : p >= 50 ? 'ok' : 'poor';
    return `<tr>
      <td>${topic}</td>
      <td style="text-align:right;font-family:var(--mono);font-size:13px">${s.c}/${s.t}</td>
      <td style="width:120px;padding-left:12px">
        <div class="bar-wrap"><div class="bar-fill ${cls}" style="width:${p}%"></div></div>
      </td>
      <td class="pct ${cls}" style="padding-left:8px">${p}%</td>
    </tr>`;
  }).join('');

  const resultsEl = document.getElementById('quiz-results');
  resultsEl.style.display = 'block';
  resultsEl.innerHTML = `
    <div class="results-screen">
      <h2>${msg}</h2>
      <div class="big-score">${pct}%</div>
      <p class="result-sub">${total} questions · ${activeFilter === 'all' ? 'Adaptive mix' : activeFilter}</p>
      <div class="result-breakdown">
        <div class="breakdown-item"><div class="val green">${sessionCorrect}</div><div class="lbl">Correct</div></div>
        <div class="breakdown-item"><div class="val red">${sessionWrong}</div><div class="lbl">Wrong</div></div>
        <div class="breakdown-item"><div class="val" style="color:var(--accent)">${total}</div><div class="lbl">Total</div></div>
      </div>
      ${breakdownRows ? `
        <div style="max-width:400px;margin:0 auto 28px;text-align:left">
          <div class="card-title" style="margin-bottom:10px">Topic breakdown</div>
          <table class="topic-table">${breakdownRows}</table>
        </div>` : ''}
      <div>
        <button class="restart-btn" onclick="retryQuiz()">Retry</button>
        <button class="restart-btn outline" onclick="location.href='index.html'">Dashboard</button>
      </div>
    </div>
  `;
}

function retryQuiz() {
  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('question-card-wrap').style.display = '';
  buildQueue();
  document.getElementById('q-total').textContent = queue.length;
  document.getElementById('correct-count').textContent = 0;
  document.getElementById('wrong-count').textContent = 0;
  document.getElementById('quiz-pbar').style.width = '0%';
  renderQuestion();
}
