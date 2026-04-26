// Timed Mock Exam

document.addEventListener('DOMContentLoaded', initExam);

const SECS_PER_Q = 90; // 90 seconds per question
let examQuestions = [];
let examAnswers = [];
let examIndex = 0;
let examTimer = null;
let secsLeft = 0;
let examStart = 0;
let examSize = 20;
let examAnswered = false;

function initExam() {
  renderStartScreen();
}

function renderStartScreen() {
  const root = document.getElementById('exam-root');

  if (!QUESTIONS.length) {
    root.innerHTML = `<h1>Mock Exam</h1><p class="subtitle">No questions loaded.</p>
      <div class="empty-state"><div class="empty-icon">📝</div>
      <p>Import your question bank from the <a href="index.html">Dashboard</a> first.</p></div>`;
    return;
  }

  const sizes = [10, 20, QUESTIONS.length].filter(s => s <= QUESTIONS.length);

  root.innerHTML = `
    <div class="exam-start">
      <h1>Mock Exam</h1>
      <p>Timed · no explanations during exam · full breakdown at the end.</p>
      <div class="exam-config" id="exam-config">
        ${sizes.map(s => `
          <div class="config-card ${s === 20 ? 'selected' : ''}" onclick="selectSize(${s},this)">
            <div class="cfg-val">${s}</div>
            <div class="cfg-lbl">questions<br>${formatTime(s * SECS_PER_Q)}</div>
          </div>
        `).join('')}
      </div>
      <div style="margin-bottom:16px">
        <label style="font-size:13px;color:var(--muted);margin-right:10px">Topic filter:</label>
        <select id="topic-filter" style="background:var(--card2);border:1px solid var(--border);color:var(--text);padding:6px 12px;border-radius:6px;font-family:var(--sans);font-size:13px">
          <option value="all">All topics</option>
          ${TOPICS.map(t => `<option value="${t}">${t}</option>`).join('')}
        </select>
      </div>
      <button class="btn btn-primary" style="font-size:16px;padding:13px 36px" onclick="startExam()">Start Exam</button>
    </div>
  `;
}

function selectSize(size, el) {
  examSize = size;
  document.querySelectorAll('.config-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function formatTime(secs) {
  const m = Math.floor(secs / 60), s = secs % 60;
  return `${m}:${s.toString().padStart(2,'0')}`;
}

function startExam() {
  const topicFilter = document.getElementById('topic-filter').value;
  let pool = topicFilter === 'all' ? [...QUESTIONS]
    : QUESTIONS.filter(q => q.topic === topicFilter);

  // Shuffle pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  examQuestions = pool.slice(0, examSize);
  examAnswers = new Array(examSize).fill(null);
  examIndex = 0;
  examStart = Date.now();
  examAnswered = false;

  renderExamShell();
  renderExamQuestion();
  startTimer();
}

function renderExamShell() {
  const root = document.getElementById('exam-root');
  const totalSecs = examQuestions.length * SECS_PER_Q;
  secsLeft = totalSecs;

  root.innerHTML = `
    <div class="timer-bar">
      <div class="timer-val" id="timer-display">${formatTime(totalSecs)}</div>
      <div class="timer-progress-wrap">
        <div class="timer-progress-fill" id="timer-bar-fill" style="width:100%"></div>
      </div>
      <div style="font-family:var(--mono);font-size:12px;color:var(--muted)">
        <span id="exam-q-num">1</span>/${examQuestions.length}
      </div>
    </div>

    <div id="exam-question-wrap"></div>
    <div id="exam-results" style="display:none"></div>
  `;
}

function startTimer() {
  const totalSecs = examQuestions.length * SECS_PER_Q;
  examTimer = setInterval(() => {
    secsLeft--;
    const pct = (secsLeft / totalSecs) * 100;
    const display = document.getElementById('timer-display');
    const fill = document.getElementById('timer-bar-fill');
    if (!display) { clearInterval(examTimer); return; }

    display.textContent = formatTime(secsLeft);
    fill.style.width = pct + '%';

    if (pct <= 25) {
      display.className = 'timer-val danger';
      fill.style.background = 'var(--red)';
    } else if (pct <= 50) {
      display.className = 'timer-val warning';
      fill.style.background = 'var(--yellow)';
    }

    if (secsLeft <= 0) {
      clearInterval(examTimer);
      finishExam();
    }
  }, 1000);
}

function renderExamQuestion() {
  if (examIndex >= examQuestions.length) { finishExam(); return; }
  examAnswered = false;

  const q = examQuestions[examIndex];
  const letters = ['A','B','C','D','E'];
  const opts = Object.entries(q.options);
  const shuffled = [...opts].sort(() => Math.random() - 0.5);

  window._examCorrectIdx = shuffled.findIndex(([k]) => k === q.answer);
  window._examShuffled = shuffled;

  document.getElementById('exam-q-num').textContent = examIndex + 1;

  document.getElementById('exam-question-wrap').innerHTML = `
    <div class="question-card">
      <div class="q-meta">
        <span class="q-tag">${q.topic}</span>
        <span class="q-num">Q${examIndex + 1} of ${examQuestions.length}</span>
      </div>
      <div class="question-text">${q.stem}</div>
      <div class="options" id="exam-options">
        ${shuffled.map(([, text], i) => `
          <div class="option" id="eopt-${i}" data-idx="${i}" onclick="selectExamAnswer(${i})">
            <span class="option-letter">${letters[i]}</span>
            <span>${text}</span>
          </div>
        `).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:20px">
        <button class="btn btn-outline btn-sm" onclick="skipExamQuestion()" style="opacity:.7">Skip →</button>
        ${examIndex > 0 ? `<button class="btn btn-outline btn-sm" onclick="prevExamQuestion()">← Back</button>` : '<span></span>'}
      </div>
    </div>
  `;
}

function selectExamAnswer(chosen) {
  if (examAnswered) return;
  examAnswered = true;
  examAnswers[examIndex] = chosen;

  document.querySelectorAll('.option').forEach(o => o.classList.add('disabled'));
  document.getElementById(`eopt-${chosen}`).style.background = 'rgba(124,156,255,.12)';
  document.getElementById(`eopt-${chosen}`).style.borderColor = 'var(--accent)';

  setTimeout(() => {
    examIndex++;
    if (examIndex >= examQuestions.length) {
      clearInterval(examTimer);
      finishExam();
    } else {
      renderExamQuestion();
    }
  }, 600);
}

function skipExamQuestion() {
  examAnswers[examIndex] = null;
  examIndex++;
  if (examIndex >= examQuestions.length) { clearInterval(examTimer); finishExam(); }
  else renderExamQuestion();
}

function prevExamQuestion() {
  if (examIndex > 0) { examIndex--; renderExamQuestion(); }
}

function finishExam() {
  clearInterval(examTimer);
  document.getElementById('exam-question-wrap').style.display = 'none';

  const durationSecs = Math.round((Date.now() - examStart) / 1000);
  const topicBreakdown = {};
  let correct = 0;

  examQuestions.forEach((q, i) => {
    if (!topicBreakdown[q.topic]) topicBreakdown[q.topic] = { correct: 0, total: 0 };
    topicBreakdown[q.topic].total++;

    const chosenIdx = examAnswers[i];
    if (chosenIdx === null) return;

    const shuffled = window._examShuffled; // not reliable after re-render; use direct check
    // Recalculate correct index from answer key
    const optEntries = Object.entries(q.options);
    const shuffledQ = optEntries; // we stored shuffled per-question; use answer letter directly
    const chosenText = document.querySelectorAll('.option')?.[chosenIdx]?.querySelector('span:last-child')?.textContent;
    const isCorrect = optEntries.find(([k]) => k === q.answer)?.[1] === (chosenText ?? '');

    // Simpler: store per-question in examAnswers as {chosenIdx, correctIdx}
    const wasCorrect = examAnswers[i]?.correct ?? false;
    if (wasCorrect) {
      correct++;
      topicBreakdown[q.topic].correct++;
    }
    recordQuestionResult(q.id, wasCorrect);
    recordTopicResult(q.topic, wasCorrect);
  });

  // Re-calculate using stored correct flags
  correct = examAnswers.filter(a => a?.correct).length;
  Object.keys(topicBreakdown).forEach(t => {
    topicBreakdown[t].correct = examAnswers
      .filter((a, i) => a?.correct && examQuestions[i]?.topic === t).length;
  });

  recordExam({ score: correct, total: examQuestions.length, durationSecs, topicBreakdown });
  touchStreak();

  const pct = Math.round(correct / examQuestions.length * 100);
  const msg = pct >= 80 ? "Excellent performance 🎓" : pct >= 60 ? "Good effort — review weak areas 📚" : "Need more practice — keep going 💪";

  const breakdownRows = Object.entries(topicBreakdown).map(([topic, s]) => {
    const p = s.total > 0 ? Math.round(s.correct / s.total * 100) : 0;
    const cls = p >= 70 ? 'good' : p >= 50 ? 'ok' : 'poor';
    return `<tr>
      <td>${topic}</td>
      <td style="text-align:center;font-family:var(--mono);font-size:13px">${s.correct}/${s.total}</td>
      <td style="padding:0 8px"><div class="bar-wrap"><div class="bar-fill ${cls}" style="width:${p}%"></div></div></td>
      <td class="pct ${cls}">${p}%</td>
    </tr>`;
  }).join('');

  document.getElementById('exam-results').style.display = 'block';
  document.getElementById('exam-results').innerHTML = `
    <div class="results-screen">
      <h2>${msg}</h2>
      <div class="big-score">${pct}%</div>
      <p class="result-sub">${correct}/${examQuestions.length} correct · ${formatTime(durationSecs)}</p>
      <div class="result-breakdown">
        <div class="breakdown-item"><div class="val green">${correct}</div><div class="lbl">Correct</div></div>
        <div class="breakdown-item"><div class="val red">${examQuestions.length - correct}</div><div class="lbl">Wrong</div></div>
        <div class="breakdown-item"><div class="val" style="color:var(--accent)">${examQuestions.length}</div><div class="lbl">Total</div></div>
      </div>
      <div style="max-width:420px;margin:0 auto 28px;text-align:left">
        <div class="card-title" style="margin-bottom:10px">Topic breakdown</div>
        <table class="topic-table">${breakdownRows}</table>
      </div>
      <div>
        <button class="restart-btn" onclick="initExam()">New Exam</button>
        <button class="restart-btn outline" onclick="location.href='index.html'">Dashboard</button>
      </div>
    </div>
  `;
}
