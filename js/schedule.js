// 18-Day Study Plan
// Start date: April 27, 2026 · Exam: May 15, 2026

const PLAN_START = new Date('2026-04-27');
const EXAM_DATE  = new Date('2026-05-15');

const PLAN = [
  { day:1,  title:"Antibiotics — Mechanisms",         topics:["Antibiotics"],     qTarget:12, fcTarget:12, type:"study",
    focus:"Beta-lactams, aminoglycosides, macrolides, tetracyclines. Mechanism of each class. Ribosome targets (30S vs 50S). Cell wall synthesis inhibitors.",
    links:[{label:"Quiz — Antibiotics only", href:"quiz.html?topic=Antibiotics"},{label:"Flashcards — Antibiotics",href:"flashcards.html?topic=Antibiotics"}] },

  { day:2,  title:"Antibiotics — Resistance & Clinical Use", topics:["Antibiotics"], qTarget:10, fcTarget:8, type:"study",
    focus:"MRSA (mecA), C. diff treatment, red man syndrome, drug interactions (rifampicin, metronidazole + warfarin). UTI prescribing. Pregnancy-safe antibiotics.",
    links:[{label:"Adaptive Quiz",href:"quiz.html"},{label:"Flashcards",href:"flashcards.html"}] },

  { day:3,  title:"Cardiovascular — BP & Heart Failure", topics:["Cardiovascular"], qTarget:12, fcTarget:12, type:"study",
    focus:"ACE inhibitors, ARBs, beta-blockers, thiazides, loop diuretics, spironolactone. Mechanisms and when to use each. ACE inhibitor cough → switch to ARB. HF drugs: ACEI/ARB + beta-blocker + spironolactone + SGLT2i.",
    links:[{label:"Quiz — CVS only",href:"quiz.html?topic=Cardiovascular"},{label:"Flashcards — CVS",href:"flashcards.html?topic=Cardiovascular"}] },

  { day:4,  title:"Cardiovascular — Arrhythmias & Anticoagulants", topics:["Cardiovascular"], qTarget:10, fcTarget:10, type:"study",
    focus:"Vaughan Williams classification. Digoxin: mechanism, toxicity, xanthopsia. Warfarin: mechanism, INR monitoring, reversal. DOACs and their reversals. Amiodarone side effects.",
    links:[{label:"Adaptive Quiz",href:"quiz.html"},{label:"Flashcards",href:"flashcards.html"}] },

  { day:5,  title:"Respiratory Pharmacology", topics:["Respiratory"], qTarget:12, fcTarget:14, type:"study",
    focus:"Asthma stepwise treatment. SABA vs LABA vs LAMA. ICS — candidiasis, how to prevent. Theophylline — PDE inhibitor, narrow TI, smoking interaction. Biologics: omalizumab (anti-IgE), mepolizumab (anti-IL5).",
    links:[{label:"Quiz — Respiratory",href:"quiz.html?topic=Respiratory"},{label:"Flashcards — Respiratory",href:"flashcards.html?topic=Respiratory"}] },

  { day:6,  title:"Analgesics & Pain Ladder", topics:["Analgesics"], qTarget:12, fcTarget:14, type:"study",
    focus:"WHO 3-step ladder. Paracetamol OD → NAC. NSAID mechanisms, GI side effects, renal effects, COX-2 selectivity. Opioids: constipation tolerance doesn't develop. Naloxone. Codeine CYP2D6 issue. Tramadol + serotonin syndrome.",
    links:[{label:"Quiz — Analgesics",href:"quiz.html?topic=Analgesics"},{label:"Flashcards — Analgesics",href:"flashcards.html?topic=Analgesics"}] },

  { day:7,  title:"GI Pharmacology", topics:["GI"], qTarget:10, fcTarget:12, type:"study",
    focus:"PPIs — mechanism, irreversible, proton pump. Antiemetics: ondansetron (5-HT3), metoclopramide vs domperidone (BBB, PD contraindication). H. pylori triple therapy. Lactulose — dual use. Azathioprine TPMT testing.",
    links:[{label:"Quiz — GI",href:"quiz.html?topic=GI"},{label:"Flashcards — GI",href:"flashcards.html?topic=GI"}] },

  { day:8,  title:"Endocrine — Diabetes Drugs", topics:["Endocrine"], qTarget:12, fcTarget:14, type:"study",
    focus:"Metformin (AMPK, lactic acidosis, eGFR limit). Sulfonylureas (K-ATP channels, hypo risk). GLP-1 agonists (semaglutide, weight loss, CV benefit). SGLT2 inhibitors (empagliflozin, HF benefit, UTI risk). DPP-4 inhibitors (gliptins, renal dose adjustment). Insulin types.",
    links:[{label:"Quiz — Endocrine",href:"quiz.html?topic=Endocrine"},{label:"Flashcards — Endocrine",href:"flashcards.html?topic=Endocrine"}] },

  { day:9,  title:"Endocrine — Thyroid, Steroids & Adrenal", topics:["Endocrine"], qTarget:10, fcTarget:10, type:"study",
    focus:"Levothyroxine — timing, interactions, TSH recheck. Carbimazole — mechanism, agranulocytosis warning. Prednisolone long-term — adrenal suppression, sick day rules, bone protection. Dexamethasone equivalence. Fludrocortisone.",
    links:[{label:"Adaptive Quiz",href:"quiz.html"},{label:"Flashcards",href:"flashcards.html"}] },

  { day:10, title:"Immunology & Biologics", topics:["Immunology"], qTarget:10, fcTarget:8, type:"study",
    focus:"Tacrolimus/ciclosporin — calcineurin inhibitors. Rituximab — anti-CD20. Anti-TNF agents — adalimumab, infliximab. Pre-biological screening: latent TB. Mycophenolate IMPDH inhibition. Vaccine safety in immunocompromised.",
    links:[{label:"Quiz — Immunology",href:"quiz.html?topic=Immunology"},{label:"Flashcards — Immunology",href:"flashcards.html?topic=Immunology"}] },

  { day:11, title:"Pharmacology Principles", topics:["Pharmacology"], qTarget:10, fcTarget:8, type:"study",
    focus:"Agonist/antagonist/partial agonist. EC50, Emax, efficacy vs potency. Vd. First-pass metabolism. Zero-order vs first-order kinetics. Steady state = 4–5 half-lives. CYP450 inducers/inhibitors. TDM drugs.",
    links:[{label:"Quiz — Pharmacology",href:"quiz.html?topic=Pharmacology"},{label:"Flashcards — Pharmacology",href:"flashcards.html?topic=Pharmacology"}] },

  { day:12, title:"Mixed Review A — Antibiotics + CVS", topics:["Antibiotics","Cardiovascular"], qTarget:18, fcTarget:0, type:"review",
    focus:"Consolidation session. Work through adaptive quiz weighted to Antibiotics and CVS. Identify remaining gaps and revisit flashcards for any topic below 60%.",
    links:[{label:"Adaptive Quiz",href:"quiz.html"},{label:"All Flashcards",href:"flashcards.html"}] },

  { day:13, title:"Mixed Review B — Resp + Analgesics + GI", topics:["Respiratory","Analgesics","GI"], qTarget:18, fcTarget:0, type:"review",
    focus:"Consolidation session for Respiratory, Analgesics, and GI. Focus on clinical scenario questions — identify the drug from the clinical picture.",
    links:[{label:"Adaptive Quiz",href:"quiz.html"},{label:"Flashcards due today",href:"flashcards.html"}] },

  { day:14, title:"Weak Topic Blitz", topics:[], qTarget:20, fcTarget:0, type:"review",
    focus:"Check your Dashboard topic table. Identify any topic below 60% and spend this session exclusively on those. Use the category filter on the quiz page.",
    links:[{label:"Dashboard — see your weak topics",href:"index.html"},{label:"Filtered Quiz",href:"quiz.html"}] },

  { day:15, title:"Mock Exam 1 — 30 Questions", topics:[], qTarget:30, fcTarget:0, type:"mock",
    focus:"Full timed mock exam under exam conditions. 30 questions from all topics. 90 seconds per question. No explanations. Review topic breakdown after.",
    links:[{label:"Start Mock Exam",href:"exam.html"}] },

  { day:16, title:"Mock Exam 1 Review + Weak Topics", topics:[], qTarget:15, fcTarget:20, type:"review",
    focus:"Review your mock exam result. For every wrong question, do the relevant flashcards. Re-do adaptive quiz filtered to your weak topics from the exam.",
    links:[{label:"Adaptive Quiz",href:"quiz.html"},{label:"All Flashcards",href:"flashcards.html"}] },

  { day:17, title:"Mock Exam 2 — Full Paper", topics:[], qTarget:QUESTIONS.length || 40, fcTarget:0, type:"mock",
    focus:"Final full-length mock under timed exam conditions. All questions, all topics. This is your dress rehearsal — simulate exam day.",
    links:[{label:"Start Mock Exam",href:"exam.html"}] },

  { day:18, title:"Final Review & Cramming", topics:[], qTarget:20, fcTarget:116, type:"review",
    focus:"Light review only — no new topics. Go through all flashcards due today. Revisit the 1-2 topics you're weakest on from Mock 2. Eat well, sleep early. You've got this.",
    links:[{label:"Flashcards — all due",href:"flashcards.html"},{label:"Quick adaptive quiz",href:"quiz.html"}] },
];

document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  today.setHours(0,0,0,0);

  const daysUntilExam = Math.ceil((EXAM_DATE - today) / 86400000);
  document.getElementById('days-remaining').textContent = Math.max(0, daysUntilExam);

  const streak = getStreak();
  document.getElementById('plan-streak').textContent = streak.count;

  document.getElementById('plan-subtitle').innerHTML =
    `Exam: <strong style="color:var(--accent)">May 15, 2026</strong> · ${daysUntilExam > 0 ? daysUntilExam + ' days to go' : 'Exam day!'}`;

  // Determine which plan day matches today
  const currentPlanDay = Math.ceil((today - PLAN_START) / 86400000) + 1;

  // Check completed days from localStorage
  const completedDays = load('gem1_plan_completed') || {};
  const completed = Object.keys(completedDays).filter(k => completedDays[k]).length;
  document.getElementById('days-complete').textContent = completed;

  // Render grid
  const grid = document.getElementById('schedule-grid');
  grid.innerHTML = PLAN.map(d => {
    const isToday = d.day === currentPlanDay;
    const isDone  = completedDays[d.day];
    const isLocked = d.day > currentPlanDay + 1;

    let cls = 'day-card';
    if (isToday) cls += ' today';
    else if (isDone) cls += ' done';
    else if (isLocked) cls += ' locked';

    let badge = '';
    if (isDone) badge = '<div class="day-badge done">✓ Done</div>';
    else if (isToday) badge = '<div class="day-badge today">Today</div>';
    else if (d.type === 'mock') badge = '<div class="day-badge mock">Mock</div>';

    return `<div class="${cls}" onclick="showDayDetail(${d.day})">
      <div class="day-num">Day ${d.day} · ${getDateForDay(d.day)}</div>
      <div class="day-title">${d.title}</div>
      <div class="day-sub">${d.qTarget > 0 ? d.qTarget + ' Qs' : ''}${d.fcTarget > 0 ? ' · ' + d.fcTarget + ' cards' : ''}</div>
      ${badge}
    </div>`;
  }).join('');
});

function getDateForDay(dayNum) {
  const d = new Date(PLAN_START);
  d.setDate(d.getDate() + dayNum - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

function load(key) {
  try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
}
function save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

function showDayDetail(dayNum) {
  const d = PLAN[dayNum - 1];
  const completedDays = load('gem1_plan_completed') || {};
  const isDone = completedDays[dayNum];

  const detail = document.getElementById('day-detail');
  detail.style.display = 'block';
  detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  document.getElementById('day-detail-inner').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
      <div>
        <div class="card-title">Day ${d.day} · ${getDateForDay(d.day)}</div>
        <h2 style="margin-bottom:4px">${d.title}</h2>
        <div style="font-size:13px;color:var(--muted)">${d.qTarget > 0 ? d.qTarget + ' questions' : ''}${d.fcTarget > 0 ? ' · ' + d.fcTarget + ' flashcards' : ''}</div>
      </div>
      <button class="btn ${isDone ? 'btn-outline' : 'btn-primary'} btn-sm" onclick="toggleDayDone(${dayNum})">
        ${isDone ? '✓ Done' : 'Mark done'}
      </button>
    </div>

    <p style="font-size:14px;color:var(--text);line-height:1.7;margin-bottom:20px"><strong style="color:var(--accent)">Focus:</strong> ${d.focus}</p>

    <div style="display:flex;gap:10px;flex-wrap:wrap">
      ${d.links.map(l => `<a href="${l.href}" class="btn btn-outline btn-sm">${l.label} →</a>`).join('')}
    </div>
  `;
}

function toggleDayDone(dayNum) {
  const completedDays = load('gem1_plan_completed') || {};
  completedDays[dayNum] = !completedDays[dayNum];
  save('gem1_plan_completed', completedDays);
  // Re-render
  document.getElementById('days-complete').textContent =
    Object.values(completedDays).filter(Boolean).length;
  // Update card styling
  document.querySelectorAll('.day-card').forEach((card, i) => {
    const d = PLAN[i];
    if (d.day === dayNum) {
      card.classList.toggle('done', completedDays[dayNum]);
    }
  });
  showDayDetail(dayNum);
}
