export interface QuestionComponentParams {
  id: number;
  question: string;
  answer: string;
  score: number;
  notes: string;
  title: string;
}

export class QuestionComponent {
  id: number;
  question: string;
  answer: string;
  score: number;
  notes: string;
  title: string;

  constructor(data: QuestionComponentParams) {
    this.id = data.id;
    this.question = data.question;
    this.answer = data.answer;
    this.score = data.score;
    this.notes = data.notes;
    this.title = data.title;
  }
}
