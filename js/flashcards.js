// Spaced repetition flashcard reviewer (SM-2 via storage.js)

document.addEventListener('DOMContentLoaded', initFlashcards);

let fcQueue = [];
let fcIndex = 0;
let fcFlipped = false;
let sessionDone = 0;
let sessionTotal = 0;

function initFlashcards() {
  const root = document.getElementById('fc-root');
  if (!FLASHCARDS.length) {
    root.innerHTML = `<h1>Flashcards</h1>
      <p class="subtitle">No flashcards loaded.</p>
      <div class="empty-state"><div class="empty-icon">🗂</div>
      <p>Import your flashcard bank from the <a href="index.html">Dashboard</a> first.</p></div>`;
    return;
  }
  buildFCQueue();
  renderFCShell(root);
  renderCard();
}

function buildFCQueue(topicFilter = 'all') {
  const history = getFlashcardHistory();
  const now = Date.now();

  let cards = topicFilter === 'all' ? [...FLASHCARDS]
    : FLASHCARDS.filter(c => c.topic === topicFilter);

  // Sort: due first, then by next due ascending, never-seen first
  cards.sort((a, b) => {
    const ha = history[a.id], hb = history[b.id];
    const da = ha ? ha.nextDue : 0;
    const db = hb ? hb.nextDue : 0;
    return da - db;
  });

  fcQueue = cards;
  fcIndex = 0;
  sessionDone = 0;
  sessionTotal = fcQueue.length;
  fcFlipped = false;
}

function renderFCShell(root) {
  const dueCount = countDueFlashcards(FLASHCARDS);
  root.innerHTML = `
    <h1>Flashcards</h1>
    <p class="subtitle">SM-2 spaced repetition · <strong style="color:var(--accent)">${dueCount}</strong> due today</p>

    <div class="cat-bar" id="fc-cat-bar">
      <button class="cat-btn active" onclick="setFCFilter('all',this)">All</button>
      ${TOPICS.map(t => `<button class="cat-btn" onclick="setFCFilter('${t}',this)">${t}</button>`).join('')}
    </div>

    <div class="fc-container">
      <div class="fc-progress" id="fc-progress">Card 1 of ${fcQueue.length}</div>
      <br>
      <div class="fc-card-wrap" id="fc-card-wrap" onclick="flipCard()">
        <div class="fc-card" id="fc-card">
          <div class="fc-face front" id="fc-front">
            <div class="fc-label">Front</div>
            <div class="fc-text" id="fc-front-text"></div>
            <div style="margin-top:16px;font-family:var(--mono);font-size:11px;color:var(--muted)">click to reveal</div>
          </div>
          <div class="fc-face back" id="fc-back">
            <div class="fc-label">Answer</div>
            <div class="fc-text" id="fc-back-text"></div>
          </div>
        </div>
      </div>

      <div class="fc-hint" id="fc-hint">Tap card to flip</div>

      <div class="fc-grade-row" id="grade-row" style="display:none">
        <button class="grade-btn again" onclick="gradeCard(0)">Again</button>
        <button class="grade-btn hard"  onclick="gradeCard(3)">Hard</button>
        <button class="grade-btn good"  onclick="gradeCard(4)">Good</button>
        <button class="grade-btn easy"  onclick="gradeCard(5)">Easy</button>
      </div>

      <div id="fc-done-screen" style="display:none"></div>
    </div>
  `;
}

function setFCFilter(topic, btn) {
  document.querySelectorAll('#fc-cat-bar .cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildFCQueue(topic);
  document.getElementById('fc-done-screen').style.display = 'none';
  document.getElementById('fc-card-wrap').style.display = '';
  document.getElementById('grade-row').style.display = 'none';
  document.getElementById('fc-hint').style.display = '';
  renderCard();
}

function renderCard() {
  if (fcIndex >= fcQueue.length) { showFCDone(); return; }

  const card = fcQueue[fcIndex];
  const history = getFlashcardHistory();
  const h = history[card.id];

  fcFlipped = false;
  document.getElementById('fc-card').classList.remove('flipped');
  document.getElementById('fc-front-text').textContent = card.front;
  document.getElementById('fc-back-text').textContent = card.back;
  document.getElementById('grade-row').style.display = 'none';
  document.getElementById('fc-hint').style.display = '';
  document.getElementById('fc-hint').textContent = 'Tap card to flip';

  const daysUntil = h ? Math.max(0, Math.round((h.nextDue - Date.now()) / 86400000)) : 0;
  const overdue = h && h.nextDue < Date.now();

  document.getElementById('fc-progress').innerHTML = `
    Card ${fcIndex + 1} of ${fcQueue.length}
    &nbsp;·&nbsp; <span style="color:var(--accent2);font-family:var(--mono)">${card.topic}</span>
    ${overdue ? '&nbsp;·&nbsp; <span style="color:var(--yellow)">overdue</span>' : ''}
    ${!h ? '&nbsp;·&nbsp; <span style="color:var(--green)">new</span>' : ''}
  `;
}

function flipCard() {
  if (fcIndex >= fcQueue.length) return;
  fcFlipped = !fcFlipped;
  document.getElementById('fc-card').classList.toggle('flipped', fcFlipped);
  if (fcFlipped) {
    document.getElementById('grade-row').style.display = 'flex';
    document.getElementById('fc-hint').style.display = 'none';
  }
}

function gradeCard(grade) {
  // grade: 0=Again, 3=Hard, 4=Good, 5=Easy
  const card = fcQueue[fcIndex];
  recordFlashcardResult(card.id, grade);
  recordTopicResult(card.topic, grade >= 3);
  touchStreak();

  sessionDone++;
  fcIndex++;

  // If graded 0 (Again) — re-insert card later in the queue
  if (grade === 0) {
    const reinsertAt = Math.min(fcIndex + 4, fcQueue.length);
    fcQueue.splice(reinsertAt, 0, card);
  }

  renderCard();
}

function showFCDone() {
  document.getElementById('fc-card-wrap').style.display = 'none';
  document.getElementById('grade-row').style.display = 'none';
  document.getElementById('fc-hint').style.display = 'none';
  document.getElementById('fc-progress').style.display = 'none';

  const doneEl = document.getElementById('fc-done-screen');
  doneEl.style.display = 'block';
  doneEl.innerHTML = `
    <div class="results-screen">
      <h2>Session complete 🎉</h2>
      <div class="big-score">${sessionDone}</div>
      <p class="result-sub">cards reviewed this session</p>
      <p style="color:var(--muted);font-size:14px;margin-bottom:28px">
        Next due: ${getNextDueLabel()}
      </p>
      <button class="restart-btn" onclick="restartFC()">Review again</button>
      <button class="restart-btn outline" onclick="location.href='index.html'">Dashboard</button>
    </div>
  `;
}

function getNextDueLabel() {
  const history = getFlashcardHistory();
  const futureDue = FLASHCARDS
    .map(c => history[c.id]?.nextDue)
    .filter(d => d && d > Date.now())
    .sort((a, b) => a - b);
  if (!futureDue.length) return 'none scheduled';
  const diff = futureDue[0] - Date.now();
  const days = Math.ceil(diff / 86400000);
  return days === 1 ? 'tomorrow' : `in ${days} days`;
}

function restartFC() {
  buildFCQueue('all');
  document.querySelectorAll('#fc-cat-bar .cat-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  document.getElementById('fc-done-screen').style.display = 'none';
  document.getElementById('fc-card-wrap').style.display = '';
  document.getElementById('fc-hint').style.display = '';
  document.getElementById('fc-progress').style.display = '';
  renderCard();
}
