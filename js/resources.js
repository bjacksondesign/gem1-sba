// Resource references for each SBA question.
// Displayed below the explanation in the quiz and exam review.
// Format: { guideline, bnf, rang (Rang & Dale chapter), notes }

const QUESTION_RESOURCES = {

// ── Antibiotics ──────────────────────────────────────────────────────────
"q001": {
  guideline: "NICE NG109 — Urinary Tract Infection (lower): antimicrobial prescribing (2018)",
  bnf: "BNF — Trimethoprim",
  rang: "Rang & Dale Ch. 51 — Antibacterial drugs",
  notes: "First-line = trimethoprim or nitrofurantoin (3 days). Avoid trimethoprim in pregnancy 1st trimester."
},
"q002": {
  guideline: "NICE NG138 — Pneumonia (community-acquired): antimicrobial prescribing (2019)",
  bnf: "BNF — Clarithromycin",
  rang: "Rang & Dale Ch. 51 — Antibacterial drugs",
  notes: "Macrolides cover atypical organisms. Cross-reactivity with penicillin is low with macrolides."
},
"q003": {
  guideline: "NICE NG15 — Antimicrobial stewardship (2015); PHE guidelines for MRSA",
  bnf: "BNF — Vancomycin",
  rang: "Rang & Dale Ch. 51 — Antibacterial drugs",
  notes: "Vancomycin TDM: target AUC/MIC ≥400 mg·h/L. Monitor renal function daily."
},
"q004": {
  guideline: "BNF Appendix 1 — Drug interactions: rifampicin (CYP inducer)",
  bnf: "BNF — Rifampicin; Interactions",
  rang: "Rang & Dale Ch. 51 — Antimycobacterial drugs",
  notes: "Rifampicin is the most potent CYP inducer in clinical use. Effect persists 2–3 weeks after stopping."
},
"q005": {
  guideline: "BNF Appendix 1 — Drug interactions: metronidazole + alcohol",
  bnf: "BNF — Metronidazole",
  rang: "Rang & Dale Ch. 51 — Antiprotozoal/anaerobic drugs",
  notes: "Mechanism: inhibits acetaldehyde dehydrogenase → acetaldehyde accumulation (identical to disulfiram). Warn about all alcohol including mouthwash."
},
"q006": {
  guideline: "NICE — Sepsis management; Aminoglycoside TDM guidelines (PHE)",
  bnf: "BNF — Gentamicin; monitoring requirements",
  rang: "Rang & Dale Ch. 51 — Aminoglycosides",
  notes: "Extended-interval dosing (once daily): simpler monitoring, equivalent efficacy, potentially less nephrotoxic. Check trough <1 mg/L before next dose."
},
"q007": {
  guideline: "BNF — Skin infections; NICE NG141 — Cellulitis/erysipelas",
  bnf: "BNF — Flucloxacillin",
  rang: "Rang & Dale Ch. 51 — Penicillins",
  notes: "Flucloxacillin must be taken on an empty stomach (30 min before food) — food reduces absorption by 50%."
},
"q008": {
  guideline: "NICE — Acne vulgaris; BNF Doxycycline prescribing information",
  bnf: "BNF — Doxycycline",
  rang: "Rang & Dale Ch. 51 — Tetracyclines",
  notes: "Other tetracycline side effects: oesophageal ulceration (sit upright after dose), dairy chelation reduces absorption."
},
"q009": {
  guideline: "NICE NG199 — C. difficile infection (2021)",
  bnf: "BNF — Vancomycin (oral)",
  rang: "Rang & Dale Ch. 51 — Antibacterial drugs",
  notes: "Fidaxomicin preferred for first recurrence (reduces further recurrence rate). Faecal microbiota transplant for multiple recurrences."
},
"q010": {
  guideline: "MHRA — Chloramphenicol systemic use restrictions",
  bnf: "BNF — Chloramphenicol (systemic)",
  rang: "Rang & Dale Ch. 51 — Antibacterial drugs",
  notes: "Aplastic anaemia risk ~1 in 25,000 courses. Grey baby syndrome: accumulation in neonates with immature UGT. Eye drops are safe — minimal systemic absorption."
},
"q011": {
  guideline: "PHE/UKHSA — MRSA management; AMR national action plan",
  bnf: "BNF — Antibiotics: MRSA treatment",
  rang: "Rang & Dale Ch. 51 — Antimicrobial resistance",
  notes: "mecA gene encodes PBP2a — reduced beta-lactam affinity. MRSA can be decolonised with mupirocin nasal ointment + chlorhexidine wash."
},
"q012": {
  guideline: "NICE — Hospital-acquired pneumonia/sepsis guidance",
  bnf: "BNF — Ciprofloxacin",
  rang: "Rang & Dale Ch. 51 — Quinolones",
  notes: "Ciprofloxacin is NOT effective against Streptococcus pneumoniae (primary respiratory pathogen) — do not use for CAP. Reserve for Pseudomonas coverage."
},
"q013": {
  guideline: "NICE NG95 — Lyme disease (2018)",
  bnf: "BNF — Doxycycline: Lyme disease indications",
  rang: "Rang & Dale Ch. 51 — Tetracyclines",
  notes: "Early Lyme disease: doxycycline 100mg BD for 21 days. Late Lyme (neurological/cardiac): IV ceftriaxone. Serological testing: ELISA then Western blot."
},
"q014": {
  guideline: "BNF — Vancomycin: administration and monitoring",
  bnf: "BNF — Vancomycin",
  rang: "Rang & Dale Ch. 51 — Glycopeptides",
  notes: "Not a true allergy (no IgE). Can be managed by pre-treating with antihistamine and slowing infusion rate. True vancomycin allergy is very rare."
},
"q015": {
  guideline: "NICE — HIV: management; BTS guidelines on PCP prophylaxis",
  bnf: "BNF — Co-trimoxazole",
  rang: "Rang & Dale Ch. 51 — Antiprotozoal drugs",
  notes: "Co-trimoxazole is the most common cause of adverse drug reactions in HIV patients. Alternative for PCP prophylaxis: dapsone or pentamidine nebulisers."
},
"q016": {
  guideline: "NICE NG110 — UTI in pregnancy (2019)",
  bnf: "BNF — Antibiotics in pregnancy: prescribing in renal/pregnancy",
  rang: "Rang & Dale Ch. 51 — Antibacterial drugs",
  notes: "Asymptomatic bacteriuria in pregnancy must be treated (increased risk of pyelonephritis and preterm labour). Screen with MSU at booking and treat if positive."
},
"q017": {
  guideline: "BNF — Erythromycin/azithromycin: GI side effects",
  bnf: "BNF — Macrolides",
  rang: "Rang & Dale Ch. 51 — Macrolides",
  notes: "Erythromycin's prokinetic effect (motilin receptor agonism) is sometimes exploited therapeutically for gastroparesis at sub-antimicrobial doses."
},
"q018": {
  guideline: "BNF Appendix 1 — Drug interactions: metronidazole + warfarin",
  bnf: "BNF — Warfarin: interactions; Metronidazole: interactions",
  rang: "Rang & Dale Ch. 24 — Anticoagulants; Ch. 51 — Drug interactions",
  notes: "CYP2C9 inhibition by metronidazole is clinically significant. INR should be monitored within 3–5 days of starting metronidazole in patients on warfarin."
},

// ── Cardiovascular ────────────────────────────────────────────────────────
"q019": {
  guideline: "NICE NG136 — Hypertension in adults (2019, updated 2023)",
  bnf: "BNF — ACE inhibitors; ARBs",
  rang: "Rang & Dale Ch. 22 — The kidney; Ch. 21 — Blood pressure control",
  notes: "ACE inhibitor cough occurs in ~15% of Caucasians and up to 40% of East Asians. Switching to ARB resolves it within 1–4 weeks."
},
"q020": {
  guideline: "BNF — Warfarin: reversal; BCSH guidelines on warfarin reversal",
  bnf: "BNF — Phytomenadione (vitamin K); Prothrombin complex concentrate",
  rang: "Rang & Dale Ch. 24 — Anticoagulants",
  notes: "For major bleeding: 4-factor PCC (Beriplex) is preferred over FFP — faster reversal, smaller volume, no ABO matching needed. Add IV vitamin K 10mg."
},
"q021": {
  guideline: "NICE NG185 — Acute coronary syndromes (2020)",
  bnf: "BNF — Aspirin: antiplatelet use",
  rang: "Rang & Dale Ch. 23 — Haemostasis and thrombosis",
  notes: "Aspirin 300mg loading dose in ACS, then 75mg daily lifelong. Irreversible platelet inhibition lasts full platelet lifespan (~10 days). Even low doses fully inhibit platelet COX-1."
},
"q022": {
  guideline: "NICE NG106 — Chronic heart failure (2018); BNF monitoring requirements",
  bnf: "BNF — Spironolactone",
  rang: "Rang & Dale Ch. 22 — The kidney",
  notes: "RALES trial: spironolactone reduced mortality by 30% in severe HF. EMPHASIS-HF: eplerenone (selective MRA) also effective. Monitor K+ and creatinine at 1 week and 1 month."
},
"q023": {
  guideline: "NICE NG196 — Atrial fibrillation (2021)",
  bnf: "BNF — Verapamil; diltiazem; rate-limiting CCBs",
  rang: "Rang & Dale Ch. 21 — Antiarrhythmic drugs",
  notes: "Verapamil + beta-blocker combination is contraindicated — risk of complete heart block. In AF with HF: use digoxin (not verapamil, not beta-blocker acutely)."
},
"q024": {
  guideline: "NICE CG126 — Stable angina (2011, updated 2016)",
  bnf: "BNF — Glyceryl trinitrate: sublingual",
  rang: "Rang & Dale Ch. 21 — Antianginal drugs",
  notes: "Warn patients to sit down when using GTN (hypotension risk). Store in glass bottle away from light. Discard 8 weeks after opening. Tolerance develops with regular use — need nitrate-free period."
},
"q025": {
  guideline: "NICE NG98 — Amiodarone: thyroid monitoring (2017)",
  bnf: "BNF — Amiodarone: monitoring",
  rang: "Rang & Dale Ch. 21 — Antiarrhythmic drugs",
  notes: "Monitor TFTs, LFTs, CXR, and PFTs every 6 months. Half-life 40–55 days — drug interactions persist months after stopping. Corneal microdeposits are benign (all long-term users develop them)."
},
"q026": {
  guideline: "NICE — Digoxin toxicity management; BNF monitoring",
  bnf: "BNF — Digoxin: toxicity and monitoring",
  rang: "Rang & Dale Ch. 21 — Cardiac glycosides",
  notes: "Digoxin toxicity treatment: stop digoxin, correct hypokalaemia (potassium-rich IV fluids), atropine for bradycardia, DigiFab (antibody fragments) for severe toxicity."
},
"q027": {
  guideline: "NICE NG106 — Chronic heart failure; BNF loop diuretics",
  bnf: "BNF — Furosemide",
  rang: "Rang & Dale Ch. 22 — Diuretics",
  notes: "IV furosemide is ~twice as bioavailable as oral. Furosemide + aminoglycosides = additive ototoxicity risk. Resistance to furosemide in HF: add metolazone (thiazide-like) for synergistic diuresis."
},
"q028": {
  guideline: "NICE CG181 — Cardiovascular risk assessment and modification of blood lipids (2014)",
  bnf: "BNF — Statins: monitoring and side effects",
  rang: "Rang & Dale Ch. 23 — Lipid-lowering drugs",
  notes: "Stop statin if CK >5× ULN (or >10× ULN for confirmed myopathy). Risk of rhabdomyolysis increased with: renal/hepatic impairment, hypothyroidism, high-dose, drug interactions."
},
"q029": {
  guideline: "NICE NG185 — ACS; NICE TA210 — Clopidogrel",
  bnf: "BNF — Clopidogrel: pharmacogenomics",
  rang: "Rang & Dale Ch. 23 — Antiplatelet drugs",
  notes: "PLATO trial showed ticagrelor superior to clopidogrel post-ACS. Prasugrel also more effective but more bleeding risk. CYP2C19 testing not routine but relevant in high-risk patients."
},
"q030": {
  guideline: "NICE NG106 — Chronic heart failure: rate control in AF",
  bnf: "BNF — Digoxin: AF with heart failure",
  rang: "Rang & Dale Ch. 21 — Cardiac glycosides and antiarrhythmics",
  notes: "DIG trial: digoxin reduced HF hospitalisations but not mortality. Beta-blockers are preferred long-term in stable HF with AF, but digoxin remains useful when HR control is inadequate."
},
"q031": {
  guideline: "NICE NG28 — Type 2 diabetes in adults (2022); EMPEROR-Reduced and DAPA-HF trials",
  bnf: "BNF — SGLT2 inhibitors",
  rang: "Rang & Dale Ch. 32 — Insulin and diabetes",
  notes: "SGLT2 inhibitors are now recommended in HFrEF regardless of diabetes status. Dapagliflozin (DAPA-HF) and empagliflozin (EMPEROR-Reduced) both showed mortality benefit."
},
"q032": {
  guideline: "BNF — Heparin reversal: protamine sulphate",
  bnf: "BNF — Protamine sulphate",
  rang: "Rang & Dale Ch. 24 — Anticoagulants",
  notes: "Excess protamine is also anticoagulant. Calculate dose carefully. Risk of hypotension and anaphylaxis with IV protamine — give slowly. Does not fully reverse LMWH (only ~60–70%)."
},
"q033": {
  guideline: "BCSH/BSTH — Reversal of vitamin K antagonists for urgent procedures",
  bnf: "BNF — Prothrombin complex concentrate (PCC)",
  rang: "Rang & Dale Ch. 24 — Anticoagulants",
  notes: "Octaplex/Beriplex (4-factor PCC): contains II, VII, IX, X + proteins C and S. Acts within 10–15 minutes. Combine with IV vitamin K to prevent INR rebound (PCC wears off after 6–12h)."
},
"q034": {
  guideline: "NICE NG136 — Hypertension; NICE CG56 — Gout (2012)",
  bnf: "BNF — Thiazide diuretics: cautions — gout",
  rang: "Rang & Dale Ch. 22 — Diuretics",
  notes: "Losartan is the preferred antihypertensive in gout — it is uricosuric (blocks URAT1 in the kidney). Amlodipine, doxazosin, and methyldopa are safe alternatives in gout."
},
"q035": {
  guideline: "Vaughan Williams classification; NICE — Ventricular arrhythmias",
  bnf: "BNF — Antiarrhythmics: classification",
  rang: "Rang & Dale Ch. 21 — Antiarrhythmic drugs",
  notes: "Lidocaine IV: bolus 100mg then infusion. NOT oral bioavailability (extensive first-pass). Flecainide: avoid in structural heart disease (CAST trial — increased mortality post-MI)."
},
"q036": {
  guideline: "MHRA/EMA — Idarucizumab (Praxbind) approval; RE-VERSE AD trial",
  bnf: "BNF — Idarucizumab; dabigatran",
  rang: "Rang & Dale Ch. 24 — Direct thrombin inhibitors",
  notes: "Andexanet alfa (Ondexxya) reverses rivaroxaban and apixaban. Not yet widely available in UK. Ciraparantag under development as universal reversal agent for all anticoagulants."
},
"q037": {
  guideline: "NICE NG136 — Hypertension: monitoring requirements; BNF ACE inhibitor monitoring",
  bnf: "BNF — ACE inhibitors: monitoring",
  rang: "Rang & Dale Ch. 21 — Antihypertensives",
  notes: "Rise in creatinine up to 30% is acceptable and expected with ACEi — indicates they are working (reducing efferent arteriole tone). Stop if >30% rise or if K+ rises above 5.5 mmol/L."
},
"q038": {
  guideline: "Toxbase/National Poisons Information Service — Beta-blocker overdose",
  bnf: "BNF — Beta-blocker overdose management",
  rang: "Rang & Dale Ch. 14 — Beta-adrenoceptor antagonists",
  notes: "High-dose insulin euglycaemic therapy (HIET) is increasingly first-line for severe haemodynamic compromise. Lipid emulsion (intralipid) used for lipophilic beta-blocker OD."
},

// ── Respiratory ───────────────────────────────────────────────────────────
"q039": {
  guideline: "BTS/SIGN Asthma Guideline (2019, updated 2023)",
  bnf: "BNF — Salbutamol; acute severe asthma management",
  rang: "Rang & Dale Ch. 27 — Respiratory drugs",
  notes: "Salbutamol 2.5–5mg nebulised every 15–30 min in acute severe asthma. Continuous salbutamol nebulisation in life-threatening asthma. Add ipratropium 0.5mg if severe/life-threatening."
},
"q040": {
  guideline: "BTS/SIGN Asthma Guideline — Inhaled corticosteroid side effects",
  bnf: "BNF — Beclomethasone dipropionate inhaler: cautions",
  rang: "Rang & Dale Ch. 27 — Corticosteroids in respiratory disease",
  notes: "Prevention: rinse mouth with water after every dose, use a spacer device. Treat with nystatin suspension or fluconazole if candidiasis develops. Dysphonia: occurs in ~40% of ICS users."
},
"q041": {
  guideline: "NICE NG115 — COPD in over 16s: diagnosis and management (2018, updated 2022)",
  bnf: "BNF — Tiotropium",
  rang: "Rang & Dale Ch. 27 — COPD pharmacology",
  notes: "GOLD COPD strategy: A=SABA, B=LAMA/LABA, E (formerly C/D)=LAMA+LABA±ICS. ICS: add if FEV1 <50% + ≥2 exacerbations/year. Tiotropium (UPLIFT trial) reduces exacerbations and improves QoL."
},
"q042": {
  guideline: "BTS/SIGN Asthma Guideline — Beta-blockers in asthma",
  bnf: "BNF — Beta-blockers: cautions in asthma",
  rang: "Rang & Dale Ch. 14 — Beta-adrenoceptor antagonists",
  notes: "Even eye drops containing beta-blockers (e.g. timolol for glaucoma) can cause bronchoconstriction in asthmatic patients — always check eye drops in asthma patients."
},
"q043": {
  guideline: "BNF — Theophylline: drug interactions and monitoring",
  bnf: "BNF — Theophylline",
  rang: "Rang & Dale Ch. 27 — Methylxanthines",
  notes: "Theophylline therapeutic range: 10–20 mg/L. Toxicity signs: GI upset, tachycardia, headache, seizures, arrhythmias. Other CYP1A2 inducers: carbamazepine, omeprazole. Inhibitors raise theophylline: ciprofloxacin, macrolides."
},
"q044": {
  guideline: "BTS/SIGN Asthma Guideline — Leukotriene receptor antagonists",
  bnf: "BNF — Montelukast",
  rang: "Rang & Dale Ch. 17 — Eicosanoids",
  notes: "MHRA warning 2020: neuropsychiatric reactions with montelukast including suicidal ideation — inform patients. Particularly useful in aspirin-induced asthma and concomitant allergic rhinitis."
},
"q045": {
  guideline: "NICE TA461 — Roflumilast for severe COPD",
  bnf: "BNF — Roflumilast",
  rang: "Rang & Dale Ch. 27 — PDE4 inhibitors",
  notes: "REACT and M2-127 trials: roflumilast reduced exacerbations in severe COPD with chronic bronchitis. Weight loss is dose-dependent and often limits use. Start low, titrate up."
},
"q046": {
  guideline: "NICE CG134 — Allergic rhinitis",
  bnf: "BNF — Intranasal corticosteroids",
  rang: "Rang & Dale Ch. 27 — Respiratory drugs",
  notes: "Intranasal corticosteroids take 2–4 weeks for full effect — start before the pollen season. Do not confuse with systemic side effects (doses are low and largely locally active)."
},
"q047": {
  guideline: "NICE NG115 — COPD; BTS COPD Consortium",
  bnf: "BNF — Ipratropium bromide",
  rang: "Rang & Dale Ch. 13 — Muscarinic receptor antagonists",
  notes: "Ipratropium + salbutamol nebulisation (combined Duovent/Combivent) is commonly used for acute COPD exacerbations. Spacer not usually needed as bronchodilation effect does not depend on deep breathing."
},
"q048": {
  guideline: "NICE TA278 — Omalizumab for severe allergic asthma",
  bnf: "BNF — Omalizumab",
  rang: "Rang & Dale Ch. 27 — Biologic treatments in asthma",
  notes: "Omalizumab dose calculated from body weight and baseline IgE. Given SC every 2–4 weeks in specialist centres. Response assessed at 16 weeks. Also used for chronic spontaneous urticaria."
},
"q049": {
  guideline: "NICE/ECFS — Cystic fibrosis: management and treatment",
  bnf: "BNF — Tobramycin: inhaled solution",
  rang: "Rang & Dale Ch. 51 — Inhaled antibiotics in CF",
  notes: "Inhaled tobramycin (TOBI/Bramitob): 28 days on, 28 days off cycle. Inhaled colistin (Promixin): continuous. Azithromycin as anti-inflammatory agent also used in CF long-term."
},
"q050": {
  guideline: "BTS/SIGN Asthma Guideline — Life-threatening asthma: magnesium",
  bnf: "BNF — Magnesium sulphate: acute asthma",
  rang: "Rang & Dale Ch. 27 — Adjuncts in severe asthma",
  notes: "IV magnesium 1.2–2g over 20 min. Used for acute severe/life-threatening asthma not responding to initial treatment. MAGNETIC trial confirmed benefit. Single dose only."
},

// ── Analgesics ────────────────────────────────────────────────────────────
"q051": {
  guideline: "NICE CG152 — Paracetamol overdose (2012, updated); MHRA guidance",
  bnf: "BNF — Paracetamol overdose: NAC regimen",
  rang: "Rang & Dale Ch. 26 — Analgesics and anti-inflammatory drugs",
  notes: "Current UK NAC regimen (SNAP): 100mg/kg over 2h + 200mg/kg over 10h. Decision to treat based on paracetamol concentration on Rumack-Matthew nomogram. High-risk patients treated at lower thresholds."
},
"q052": {
  guideline: "NICE — Osteoarthritis (NG226, 2022); NICE CG65 — NSAIDs and gastroprotection",
  bnf: "BNF — NSAIDs: gastroprotection",
  rang: "Rang & Dale Ch. 26 — NSAIDs and COX selectivity",
  notes: "NICE: prescribe PPI gastroprotection with NSAIDs for all patients ≥65 or with risk factors. Topical NSAIDs (diclofenac gel) preferred over oral in osteoarthritis — lower systemic risk."
},
"q053": {
  guideline: "BNF — Opioids: prescribing guidance; palliative care guidelines",
  bnf: "BNF — Morphine; opioid-induced constipation",
  rang: "Rang & Dale Ch. 41 — Opioid analgesics",
  notes: "Always prescribe a stimulant laxative (senna ± docusate) alongside any opioid from day one. PAMORAs (methylnaltrexone, naloxegol) used for refractory opioid-induced constipation."
},
"q054": {
  guideline: "NICE NG125 — Drug misuse: opioid detoxification; BNF emergency naloxone",
  bnf: "BNF — Naloxone",
  rang: "Rang & Dale Ch. 41 — Opioid antagonists",
  notes: "Naloxone IM: 0.4–2mg. Repeat every 2–3 min up to 10mg if needed. IV infusion for sustained toxicity (e.g. methadone OD — very long half-life). Take-home naloxone kits (Prenoxad) available for opioid users."
},
"q055": {
  guideline: "MHRA — Tramadol and serotonin syndrome; BNF tramadol cautions",
  bnf: "BNF — Tramadol: interactions; serotonin syndrome",
  rang: "Rang & Dale Ch. 41 — Opioid analgesics; Ch. 47 — Serotonin syndrome",
  notes: "Serotonin syndrome triad: mental status change + autonomic instability + neuromuscular abnormalities. Treatment: stop serotonergic drugs, cyproheptadine (5-HT antagonist), supportive care. Severe cases: ICU."
},
"q056": {
  guideline: "WHO analgesic ladder (1986, updated); NICE — Cancer pain management",
  bnf: "BNF — Analgesics: WHO ladder",
  rang: "Rang & Dale Ch. 41 — Pain and analgesics",
  notes: "WHO ladder was designed for cancer pain but applies broadly. 'By the clock' (regular dosing), 'by the mouth' (oral preferred), 'by the ladder' (step-wise). Adjuvants include antidepressants, anticonvulsants, corticosteroids."
},
"q057": {
  guideline: "NICE CG173 — Neuropathic pain (2013, updated 2020)",
  bnf: "BNF — Gabapentin; pregabalin",
  rang: "Rang & Dale Ch. 41 — Neuropathic pain",
  notes: "First-line for neuropathic pain: amitriptyline, duloxetine, gabapentin, or pregabalin. Gabapentin must be titrated slowly. Pregabalin: Schedule 3 CD (controlled drug) in UK since April 2019."
},
"q058": {
  guideline: "MHRA — NSAIDs and renal impairment; NICE CG182 — Acute kidney injury",
  bnf: "BNF — NSAIDs: renal effects and monitoring",
  rang: "Rang & Dale Ch. 26 — NSAIDs and renal prostaglandins",
  notes: "NSAID-induced AKI: most likely in dehydration, heart failure, CKD, or with concomitant ACE inhibitor/ARB ('triple whammy' — ACEi + ARB + NSAID). Stop NSAIDs if creatinine rises >25%."
},
"q059": {
  guideline: "NICE — Palliative cancer pain: transdermal opioids; BNF fentanyl patch guidance",
  bnf: "BNF — Fentanyl: transdermal patches",
  rang: "Rang & Dale Ch. 41 — Opioid analgesics",
  notes: "Equianalgesic dose chart needed to convert from oral morphine to fentanyl patch. Fever increases absorption significantly — monitor. Disposal: fold sticky sides together and dispose safely."
},
"q060": {
  guideline: "MHRA 2015 — Codeine in paediatrics; BNF codeine contraindications",
  bnf: "BNF — Codeine phosphate: contraindications",
  rang: "Rang & Dale Ch. 41 — Pharmacogenomics of opioids",
  notes: "EMA restricted codeine in under-18s and post-tonsillectomy/adenoidectomy of all ages in 2013. Codeine is contraindicated in breastfeeding (infant toxicity risk in ultra-rapid metaboliser mothers)."
},
"q061": {
  guideline: "NICE — Chronic pain management; BNF ketamine unlicensed use",
  bnf: "BNF — Ketamine: analgesic use",
  rang: "Rang & Dale Ch. 41 — NMDA receptors and pain; Ch. 40 — General anaesthetics",
  notes: "Sub-anaesthetic ketamine: 0.1–0.5 mg/kg IV. Nasal esketamine (Spravato) licensed for treatment-resistant depression. Ketamine abuse causes bladder damage (ketamine cystitis)."
},
"q062": {
  guideline: "MHRA — Diclofenac cardiovascular risk; NICE CG127 — Gout",
  bnf: "BNF — Diclofenac: cardiovascular risk",
  rang: "Rang & Dale Ch. 26 — COX-2 selectivity and cardiovascular risk",
  notes: "COX-2 preferential inhibitors (diclofenac) reduce prostacyclin (anti-thrombotic) more than TXA2 → net pro-thrombotic. Naproxen considered the safest NSAID for CV risk. Ibuprofen: intermediate risk."
},

// ── GI ────────────────────────────────────────────────────────────────────
"q063": {
  guideline: "NICE — Post-operative nausea and vomiting; BNF antiemetics",
  bnf: "BNF — Domperidone; metoclopramide",
  rang: "Rang & Dale Ch. 29 — GI pharmacology",
  notes: "Domperidone: MHRA 2014 restriction — max 10mg TDS for max 1 week due to QT prolongation risk. Metoclopramide: max 5 days use, max 30mg/day (EMA 2013). Both are D2 antagonists but domperidone doesn't cross BBB."
},
"q064": {
  guideline: "BSG — Hepatic encephalopathy management",
  bnf: "BNF — Lactulose: hepatic encephalopathy",
  rang: "Rang & Dale Ch. 29 — GI pharmacology",
  notes: "Target: 2–3 soft stools per day with lactulose in hepatic encephalopathy. Rifaximin (non-absorbable antibiotic) is an effective add-on for secondary prophylaxis of hepatic encephalopathy."
},
"q065": {
  guideline: "NICE CG184 — Gastro-oesophageal reflux disease and dyspepsia (2014)",
  bnf: "BNF — Proton pump inhibitors",
  rang: "Rang & Dale Ch. 29 — GI pharmacology — acid secretion",
  notes: "PPIs reduce fracture risk if used >1 year? Controversial. Hypomagnesaemia, hyponatraemia possible with long-term use. Review indication regularly — prescribe at lowest effective dose."
},
"q066": {
  guideline: "NICE — Chemotherapy-induced nausea: antiemetic prescribing; MASCC guidelines",
  bnf: "BNF — Ondansetron; 5-HT3 antagonists",
  rang: "Rang & Dale Ch. 29 — Antiemetics",
  notes: "For highly emetogenic chemotherapy: combine 5-HT3 antagonist + NK1 antagonist (aprepitant) + dexamethasone. NK1 antagonists cover delayed-phase nausea (24–120h post-chemo). Ondansetron QT: avoid >32mg IV in single dose."
},
"q067": {
  guideline: "BNF — Hyoscine: motion sickness",
  bnf: "BNF — Hyoscine hydrobromide",
  rang: "Rang & Dale Ch. 29 — Antiemetics",
  notes: "Transdermal hyoscine patch (Scopoderm): apply 5–6h before travel, effective for up to 72h. Cyclizine (H1 antagonist): also effective for motion sickness. Prochlorperazine buccal: useful for nausea when oral route unavailable."
},
"q068": {
  guideline: "NICE CG184 — Dyspepsia and GORD; NICE NG238 — H. pylori (2022)",
  bnf: "BNF — H. pylori eradication: triple therapy",
  rang: "Rang & Dale Ch. 29 — GI pharmacology",
  notes: "Test for H. pylori first before prescribing PPI alone (unless urgent referral criteria). Urea breath test: most accurate non-invasive test. Stool antigen equally sensitive. Avoid serology (stays positive after eradication)."
},
"q069": {
  guideline: "MHRA — Metoclopramide: revised indications (2013); BNF cautions",
  bnf: "BNF — Metoclopramide: contraindications",
  rang: "Rang & Dale Ch. 29 — Dopamine antagonists",
  notes: "Domperidone is the antiemetic of choice in Parkinson's disease. Prochlorperazine and all phenothiazines should also be avoided in PD. Anti-emetic of choice for nausea in PD: domperidone 10mg TDS."
},
"q070": {
  guideline: "NICE NG129 — Crohn's disease (2019)",
  bnf: "BNF — Azathioprine; TPMT testing",
  rang: "Rang & Dale Ch. 30 — Immunosuppressants",
  notes: "TPMT testing: low activity → high risk of bone marrow toxicity (start at very low dose or avoid). Intermediate activity: use normal doses with caution. Full activity: standard dosing. Monitor FBC every 3 months."
},
"q071": {
  guideline: "NICE TA345 — Methylnaltrexone for opioid-induced constipation",
  bnf: "BNF — Methylnaltrexone (Relistor); naloxegol (Moventig)",
  rang: "Rang & Dale Ch. 41 — Opioid peripherally acting antagonists",
  notes: "Methylnaltrexone: given SC every other day. Naloxegol: oral once daily. Do not confuse with naloxone — PAMORAs are designed to NOT reverse central analgesia."
},
"q072": {
  guideline: "BNF — Sucralfate: prescribing information",
  bnf: "BNF — Sucralfate",
  rang: "Rang & Dale Ch. 29 — Cytoprotective agents",
  notes: "Sucralfate: separate from other drugs by 2h (binds to them in the gut). Avoid in renal failure (aluminium accumulation). Rarely used now — PPIs are more effective for peptic ulcer disease."
},

// ── Endocrine ─────────────────────────────────────────────────────────────
"q073": {
  guideline: "NICE NG28 — Type 2 diabetes (2022)",
  bnf: "BNF — Metformin: renal function limits",
  rang: "Rang & Dale Ch. 32 — Insulin and diabetes",
  notes: "Metformin and eGFR thresholds: continue if >45, reduce dose if 30–45, stop if <30. Review before IV contrast (hold day before and 48h after). AMPK activation also reduces CVD risk independently."
},
"q074": {
  guideline: "NICE NG28 — Type 2 diabetes; BNF sulfonylurea guidance",
  bnf: "BNF — Gliclazide; hypoglycaemia management",
  rang: "Rang & Dale Ch. 32 — Insulin secretagogues",
  notes: "Gliclazide MR has lower hypoglycaemia risk than older sulfonylureas (glibenclamide) — better pharmacokinetic profile. In hypoglycaemia: 10–20g fast-acting glucose. Long-acting sulfonylurea hypo may persist for hours."
},
"q075": {
  guideline: "NICE TA875 — Semaglutide for T2DM; SUSTAIN and PIONEER trials",
  bnf: "BNF — Semaglutide (Ozempic/Wegovy)",
  rang: "Rang & Dale Ch. 32 — Incretin-based therapies",
  notes: "SUSTAIN-6 trial: semaglutide significantly reduced cardiovascular events. Wegovy (high-dose semaglutide): licensed for obesity with BMI ≥30 (or ≥27 with weight-related comorbidity) — SELECT trial showed 20% CV risk reduction."
},
"q076": {
  guideline: "NICE — Adrenal insufficiency; Endocrinology Society guidelines on steroid withdrawal",
  bnf: "BNF — Corticosteroids: withdrawal",
  rang: "Rang & Dale Ch. 31 — Corticosteroids",
  notes: "HPA suppression occurs within 3–4 weeks of supraphysiological steroid doses. Sick day rules card: patients should carry a steroid card. Adrenal crisis: IM hydrocortisone 100mg + IV fluids + call emergency services."
},
"q077": {
  guideline: "NICE NG106 — Heart failure; EMPEROR-Reduced, DAPA-HF trials",
  bnf: "BNF — SGLT2 inhibitors: empagliflozin, dapagliflozin",
  rang: "Rang & Dale Ch. 32 — SGLT2 inhibitors",
  notes: "Euglycaemic DKA: can occur with SGLT2 inhibitors even with near-normal glucose (especially peri-operatively, fasting, or in T1DM). Stop 3 days before elective surgery. Fournier's gangrene: rare but serious."
},
"q078": {
  guideline: "NICE NG145 — Thyroid disease: assessment and management (2019)",
  bnf: "BNF — Levothyroxine: monitoring",
  rang: "Rang & Dale Ch. 33 — Thyroid pharmacology",
  notes: "Target TSH in hypothyroidism: 0.5–2.5 mU/L. In elderly: accept TSH up to 4 mU/L. Use euthyrox or generic levothyroxine consistently — small differences in bioavailability between brands cause TSH variation."
},
"q079": {
  guideline: "MHRA — Carbimazole: risk of agranulocytosis; NICE NG145",
  bnf: "BNF — Carbimazole: monitoring and agranulocytosis",
  rang: "Rang & Dale Ch. 33 — Antithyroid drugs",
  notes: "Carbimazole also causes embryopathy (aplasia cutis, choanal atresia) — switch to propylthiouracil (PTU) in first trimester. PTU causes liver toxicity — switch back to carbimazole from second trimester."
},
"q080": {
  guideline: "NICE NG17 — Type 1 diabetes in adults; DAFNE programme",
  bnf: "BNF — Insulins: basal and bolus regimens",
  rang: "Rang & Dale Ch. 32 — Insulin pharmacology",
  notes: "Nocturnal hypoglycaemia: reduce basal insulin dose by 10–20% OR move injection to earlier in the evening. Continuous glucose monitoring (CGM) can identify nocturnal patterns. CSII (insulin pump) provides most flexibility."
},
"q081": {
  guideline: "NICE NG28 — T2DM: DPP-4 inhibitors",
  bnf: "BNF — Sitagliptin; linagliptin; saxagliptin",
  rang: "Rang & Dale Ch. 32 — Incretin-based therapies",
  notes: "Saxagliptin: associated with increased HF hospitalisation (SAVOR-TIMI trial) — avoid in heart failure. Sitagliptin (TECOS trial): neutral on CV outcomes. Alogliptin (EXAMINE trial): also neutral."
},
"q082": {
  guideline: "NICE NG28 — Renal considerations in T2DM treatment",
  bnf: "BNF — DPP-4 inhibitors: renal dose adjustments",
  rang: "Rang & Dale Ch. 32 — Pharmacokinetics in renal impairment",
  notes: "Linagliptin is the exception among gliptins — hepatically excreted, so no dose adjustment needed in any stage of CKD. This makes it particularly useful in patients with significant renal impairment."
},
"q083": {
  guideline: "MHRA 2011 — Pioglitazone and bladder cancer; NICE NG28",
  bnf: "BNF — Pioglitazone: contraindications",
  rang: "Rang & Dale Ch. 32 — Thiazolidinediones",
  notes: "MHRA: do not use pioglitazone if personal or family history of bladder cancer. Long-term use (>2 years) increases bladder cancer risk by ~40% (relative risk). Also avoid in hepatic impairment."
},
"q084": {
  guideline: "Society for Endocrinology — Emergency management of adrenal insufficiency",
  bnf: "BNF — Hydrocortisone: adrenal insufficiency; sick day rules",
  rang: "Rang & Dale Ch. 31 — Adrenal corticosteroids",
  notes: "All patients on long-term steroids should carry a steroid emergency card and a hydrocortisone injection kit. 'Rule of doubles': double the dose for fever/illness, triple for surgery under general anaesthesia."
},
"q085": {
  guideline: "MHRA — Metformin and lactic acidosis; BNF metformin cautions",
  bnf: "BNF — Metformin: lactic acidosis",
  rang: "Rang & Dale Ch. 32 — Metformin mechanism",
  notes: "Lactic acidosis risk factors: renal impairment, hepatic failure, alcohol excess, severe infection/sepsis, IV contrast. MHRA 2017: updated guidance — metformin can be continued to eGFR 30 (with caution from 30–45)."
},
"q086": {
  guideline: "NICE NG28 — Type 2 diabetes: insulin initiation",
  bnf: "BNF — Insulin glargine (Lantus/Toujeo/Abasaglar)",
  rang: "Rang & Dale Ch. 32 — Insulin pharmacology",
  notes: "Glargine 300U/ml (Toujeo) provides a flatter, longer action than 100U/ml. Insulin degludec (Tresiba): ultra-long action, 40–42h. Biosimilar insulins (Abasaglar = glargine biosimilar) are interchangeable for new starts but branded prescribing recommended for continuity."
},

// ── Immunology ────────────────────────────────────────────────────────────
"q087": {
  guideline: "NICE — Common variable immunodeficiency (CVID) management",
  bnf: "BNF — Immunoglobulins: replacement therapy",
  rang: "Rang & Dale Ch. 26 — Immune deficiency disorders",
  notes: "CVID: most common primary antibody deficiency. Treatment: IV or SC immunoglobulin replacement. Regular monitoring for complications: pulmonary disease, autoimmune conditions, lymphoma."
},
"q088": {
  guideline: "Immunology textbook: innate immunity; BNF NK cell biology",
  bnf: "BNF — Immunology fundamentals",
  rang: "Rang & Dale Ch. 6 — Innate immunity and NK cells",
  notes: "NK cell missing-self hypothesis: Rolf Kiessling (1975). KIR receptors on NK cells: inhibitory (recognise MHC I) and activating. Rituximab-coated cells activate NK cells via ADCC (antibody-dependent cellular cytotoxicity)."
},
"q089": {
  guideline: "NICE — Solid organ transplantation: immunosuppression; KDIGO transplant guidelines",
  bnf: "BNF — Tacrolimus: transplant maintenance",
  rang: "Rang & Dale Ch. 26 — Immunosuppressants",
  notes: "Tacrolimus TDM: trough level target varies by transplant type and time post-transplant. Interactions: CYP3A4 inhibitors (azoles, macrolides) increase tacrolimus levels dramatically. Grapefruit juice increases absorption."
},
"q090": {
  guideline: "NICE TA137 — Rituximab for RA; NICE TA226 — Rituximab for NHL",
  bnf: "BNF — Rituximab: monitoring",
  rang: "Rang & Dale Ch. 26 — Monoclonal antibodies",
  notes: "Pre-medication: methylprednisolone IV + paracetamol + antihistamine (reduce infusion reactions). Hepatitis B reactivation risk — screen all patients before rituximab. PML risk: screen for JC virus antibodies."
},
"q091": {
  guideline: "NICE TA715 — Adalimumab for RA; NICE — Biologics in RA",
  bnf: "BNF — Adalimumab: cautions and monitoring",
  rang: "Rang & Dale Ch. 26 — TNF inhibitors",
  notes: "Anti-drug antibodies to adalimumab develop in ~25% of patients, reducing efficacy. Therapeutic drug monitoring of adalimumab trough levels increasingly used. Switch to another TNF inhibitor or different mechanism if loss of response."
},
"q092": {
  guideline: "NICE — Biologic DMARDs: pre-treatment screening; NHSE guidance on latent TB",
  bnf: "BNF — Biologics: pre-treatment screening",
  rang: "Rang & Dale Ch. 26 — Immunosuppression: infection risk",
  notes: "IGRA (Quantiferon-TB Gold/T-SPOT): preferred over tuberculin skin test in BCG-vaccinated patients. Latent TB: treat with 3-month isoniazid + rifampicin before starting anti-TNF therapy."
},
"q093": {
  guideline: "JDRF — Autoimmunity in T1DM; NICE NG17 — T1DM screening for comorbidities",
  bnf: "BNF — Thyroid function: monitoring in T1DM",
  rang: "Rang & Dale Ch. 6 — Autoimmune disease",
  notes: "T1DM patients should be screened annually for: TFTs, coeliac disease (tTG-IgA), other autoimmune conditions. Polyglandular autoimmune syndromes: Type 2 (T1DM + Addison's + autoimmune thyroid = Schmidt's syndrome)."
},

// ── Pharmacology Principles ───────────────────────────────────────────────
"q094": {
  guideline: "BNF — Drug potency vs efficacy: pharmacodynamics",
  bnf: "BNF — Pharmacology fundamentals",
  rang: "Rang & Dale Ch. 2 — Pharmacodynamics: potency and efficacy",
  notes: "Potency is clinically relevant mainly when comparing doses of the same class (e.g. opioid dose equivalences). High potency is NOT the same as high efficacy — a highly potent partial agonist may still have lower Emax than a less potent full agonist."
},
"q095": {
  guideline: "Rang & Dale pharmacodynamics — partial agonism",
  bnf: "BNF — Drug receptor theory",
  rang: "Rang & Dale Ch. 2 — Partial agonists and ceiling effects",
  notes: "Clinical partial agonist examples: buprenorphine (opioid partial agonist — ceiling on respiratory depression), buspirone (5-HT1A partial agonist), pindolol (beta-blocker with ISA). In the presence of a full agonist, a partial agonist can reduce the response."
},
"q096": {
  guideline: "MHRA — SABA overuse in asthma; BTS/SIGN asthma guidelines",
  bnf: "BNF — Drug tolerance and tachyphylaxis",
  rang: "Rang & Dale Ch. 2 — Receptor regulation: desensitisation",
  notes: "GPCR desensitisation: beta-arrestin pathway → receptor phosphorylation → G-protein uncoupling → endocytosis. Different from pharmacological tolerance (adaptive CNS changes) and tachyphylaxis (depletion of neurotransmitter)."
},
"q097": {
  guideline: "BNF — Drug receptor targets classification",
  bnf: "BNF — Pharmacodynamics",
  rang: "Rang & Dale Ch. 2 and 3 — Drug receptor types",
  notes: "Enzyme inhibitor drugs: ACE inhibitors, statins, PPIs, aspirin, methotrexate, allopurinol, sildenafil (PDE5), trimethoprim, carbidopa. Structural enzymes (DNA gyrase) targeted by antibacterials (quinolones)."
},
"q098": {
  guideline: "Rang & Dale pharmacokinetics — volume of distribution",
  bnf: "BNF — Pharmacokinetic principles",
  rang: "Rang & Dale Ch. 7 — Drug absorption and distribution",
  notes: "High Vd drugs are difficult to remove by dialysis (too widely distributed). Low Vd drugs (e.g. gentamicin Vd ~0.3 L/kg — stays in ECF) are more easily removed. Plasma protein binding affects free drug concentration and Vd."
},
"q099": {
  guideline: "Rang & Dale pharmacokinetics — steady state and half-life",
  bnf: "BNF — Pharmacokinetics",
  rang: "Rang & Dale Ch. 7 — Pharmacokinetics: steady state",
  notes: "Halving or doubling the dose does not change the time to steady state — only the concentration at steady state changes. If you need faster steady state: loading dose (immediately achieves target level)."
},
"q100": {
  guideline: "Rang & Dale pharmacodynamics — competitive vs non-competitive antagonism",
  bnf: "BNF — Drug receptor theory",
  rang: "Rang & Dale Ch. 2 — Competitive and non-competitive antagonism",
  notes: "Clinical examples of competitive antagonism: beta-blockers, atropine, naloxone (all surmountable with enough agonist). Non-competitive: phenoxybenzamine (irreversible alpha-blocker — used in phaeochromocytoma prep)."
},
"q101": {
  guideline: "Rang & Dale pharmacokinetics — routes of administration",
  bnf: "BNF — Routes of administration: bioavailability",
  rang: "Rang & Dale Ch. 7 — Routes of administration and first-pass",
  notes: "Drugs with high first-pass effect (low oral bioavailability): GTN (<1%), lidocaine (<35%), propranolol (~25%), morphine (~30%), verapamil (~20%). Alternative routes bypass liver: sublingual, transdermal, IV, IM, rectal."
},
"q102": {
  guideline: "NICE — Phenytoin therapeutic drug monitoring; BNF phenytoin",
  bnf: "BNF — Phenytoin: monitoring and dose adjustments",
  rang: "Rang & Dale Ch. 7 — Non-linear pharmacokinetics",
  notes: "Phenytoin saturation kinetics: Vmax ~7mg/kg/day. At levels near Vmax, tiny dose increases → large level rises. Phenytoin also has many drug interactions (CYP inducer and substrate). Target range: 10–20 mg/L."
},
"q103": {
  guideline: "BNF Appendix 1 — Drug interactions: CYP450 induction",
  bnf: "BNF — Appendix 1: drug interactions",
  rang: "Rang & Dale Ch. 8 — Drug metabolism and interactions",
  notes: "CYP induction is a transcriptional effect — takes days to fully develop and days to weeks to resolve after stopping the inducer. Key inducer: rifampicin (strongest), carbamazepine, St John's Wort. St John's Wort is an OTC interaction risk."
},
"q104": {
  guideline: "NICE — Therapeutic drug monitoring principles; BNF TDM drugs",
  bnf: "BNF — Monitoring requirements: narrow therapeutic index drugs",
  rang: "Rang & Dale Ch. 7 — Therapeutic drug monitoring",
  notes: "TDM timing: trough levels (just before next dose) reflect minimum effective concentration. Peak levels (e.g. 1h post-IV) reflect toxicity risk (used for aminoglycosides). Vancomycin: AUC-guided dosing now preferred over trough-only."
}

}; // end QUESTION_RESOURCES

// Helper: get resources for a question (falls back gracefully if not found)
function getResources(questionId) {
  return QUESTION_RESOURCES[questionId] || null;
}
