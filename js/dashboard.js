// Dashboard page logic

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderTopicTable();
  renderActivityFeed();
});

function pctClass(pct) {
  if (pct >= 70) return 'good';
  if (pct >= 50) return 'ok';
  return 'poor';
}

function renderStats() {
  const topicStats   = getTopicStats();
  const streak       = getStreak();
  const examHistory  = getExamHistory();
  const fcHistory    = getFlashcardHistory();

  // Overall % correct across all questions answered
  const totals = Object.values(topicStats).reduce(
    (acc, t) => { acc.c += t.correct; acc.t += t.total; return acc; },
    { c: 0, t: 0 }
  );
  const overallPct = totals.t > 0 ? Math.round(totals.c / totals.t * 100) : 0;

  // Cards due today
  const dueCards = countDueFlashcards(FLASHCARDS);
  const dueQs    = countDueQuestions(QUESTIONS);

  document.getElementById('stat-overall').textContent   = totals.t > 0 ? `${overallPct}%` : '—';
  document.getElementById('stat-streak').textContent    = streak.count;
  document.getElementById('stat-due-q').textContent     = dueQs;
  document.getElementById('stat-due-fc').textContent    = dueCards;
  document.getElementById('stat-exams').textContent     = examHistory.length;
  document.getElementById('stat-answered').textContent  = totals.t;
}

function renderTopicTable() {
  const stats  = getTopicStats();
  const qHist  = getQuestionHistory();
  const tbody  = document.getElementById('topic-tbody');

  // Build rows from TOPICS; fall back to stats keys if data not yet loaded
  const allTopics = TOPICS.length ? TOPICS : Object.keys(stats);

  if (!allTopics.length) {
    tbody.innerHTML = `<tr><td colspan="4" class="empty-state">No data yet — complete your first quiz to see topic stats.</td></tr>`;
    return;
  }

  tbody.innerHTML = allTopics.map(topic => {
    const s   = stats[topic] || { correct: 0, total: 0 };
    const pct = s.total > 0 ? Math.round(s.correct / s.total * 100) : null;
    const cls = pct !== null ? pctClass(pct) : '';
    const bar = pct !== null
      ? `<div class="progress-bar-wrap"><div class="progress-bar-fill ${cls}" style="width:${pct}%"></div></div>`
      : `<div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:0%"></div></div>`;

    const pctLabel = pct !== null
      ? `<span class="pct-label ${cls}">${pct}%</span>`
      : `<span class="pct-label" style="color:var(--muted)">—</span>`;

    const qCount = QUESTIONS.filter(q => q.topic === topic).length;

    return `
      <tr>
        <td>${topic}</td>
        <td>${qCount}</td>
        <td style="display:flex;align-items:center;gap:10px">${bar}${pctLabel}</td>
        <td>${s.total}</td>
      </tr>`;
  }).join('');
}

function renderActivityFeed() {
  const examHistory = getExamHistory();
  const daily       = getDailyQuiz();
  const topicStats  = getTopicStats();
  const list        = document.getElementById('activity-list');

  const items = [];

  // Recent exams
  [...examHistory].reverse().slice(0, 3).forEach(e => {
    const d   = new Date(e.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    const pct = Math.round(e.score / e.total * 100);
    items.push({
      dot:  pctClass(pct),
      text: `<strong>Mock exam</strong> — ${e.score}/${e.total} (${pct}%) on ${d}`,
    });
  });

  // Daily quiz completion
  if (daily.answered.length) {
    items.push({
      dot:  'blue',
      text: `<strong>Daily quiz</strong> — ${daily.answered.length} question${daily.answered.length !== 1 ? 's' : ''} answered today`,
    });
  }

  // Recent weak topics
  const weakTopics = Object.entries(topicStats)
    .filter(([, s]) => s.total >= 3 && s.correct / s.total < 0.5)
    .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
    .slice(0, 2);

  weakTopics.forEach(([topic, s]) => {
    const pct = Math.round(s.correct / s.total * 100);
    items.push({
      dot:  'amber',
      text: `<strong>${topic}</strong> needs work — ${pct}% correct`,
    });
  });

  if (!items.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">📚</div>No activity yet — start with the Daily Quiz below.</div>`;
    return;
  }

  list.innerHTML = items.map(i =>
    `<div class="activity-item">
       <div class="activity-dot ${i.dot}"></div>
       <span>${i.text}</span>
     </div>`
  ).join('');
}

// ── Import modal ─────────────────────────────────────────────────────────────

function openImportModal(type) {
  document.getElementById('import-type-label').textContent =
    type === 'questions' ? 'questions (array of question objects)' : 'flashcards (array of flashcard objects)';
  document.getElementById('import-type').value = type;
  document.getElementById('import-modal').classList.remove('hidden');
  document.getElementById('import-textarea').value = '';
  document.getElementById('import-error').textContent = '';
}

function closeImportModal() {
  document.getElementById('import-modal').classList.add('hidden');
}

function runImport() {
  const type     = document.getElementById('import-type').value;
  const raw      = document.getElementById('import-textarea').value.trim();
  const errorEl  = document.getElementById('import-error');
  errorEl.textContent = '';

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    errorEl.textContent = 'Invalid JSON: ' + e.message;
    return;
  }
  if (!Array.isArray(parsed)) {
    errorEl.textContent = 'Expected a JSON array at the top level.';
    return;
  }

  if (type === 'questions') {
    // Validate first item
    const sample = parsed[0];
    if (!sample?.id || !sample?.stem || !sample?.answer) {
      errorEl.textContent = 'Each question needs at least: id, stem, answer.';
      return;
    }
    // Merge into QUESTIONS array (deduplicate by id)
    const existing = new Set(QUESTIONS.map(q => q.id));
    let added = 0;
    parsed.forEach(q => {
      if (!existing.has(q.id)) { QUESTIONS.push(q); added++; }
    });
    // Refresh TOPICS
    TOPICS.length = 0;
    TOPICS.push(...[...new Set(QUESTIONS.map(q => q.topic))].sort());
    closeImportModal();
    alert(`Imported ${added} questions (${parsed.length - added} duplicates skipped). Refresh to see updated stats.`);
    renderStats(); renderTopicTable();

  } else {
    const sample = parsed[0];
    if (!sample?.id || !sample?.front || !sample?.back) {
      errorEl.textContent = 'Each flashcard needs at least: id, front, back.';
      return;
    }
    const existing = new Set(FLASHCARDS.map(c => c.id));
    let added = 0;
    parsed.forEach(c => {
      if (!existing.has(c.id)) { FLASHCARDS.push(c); added++; }
    });
    closeImportModal();
    alert(`Imported ${added} flashcards (${parsed.length - added} duplicates skipped).`);
    renderStats();
  }
}
