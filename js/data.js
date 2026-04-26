// Question and flashcard data — populated via the import tool.
// Shape expected:
//
//  QUESTIONS: Array of {
//    id:       string,          // e.g. "q001"
//    topic:    string,          // e.g. "Cardiology"
//    stem:     string,          // question text
//    options:  { A, B, C, D, E },
//    answer:   "A" | "B" | "C" | "D" | "E",
//    explanation: string
//  }
//
//  FLASHCARDS: Array of {
//    id:       string,          // e.g. "f001"
//    topic:    string,
//    front:    string,
//    back:     string
//  }

const QUESTIONS = [];
const FLASHCARDS = [];

// Derived list of unique topics (computed once at load time)
const TOPICS = [...new Set(QUESTIONS.map(q => q.topic))].sort();
