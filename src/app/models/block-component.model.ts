import {
  QuestionComponent,
  QuestionComponentParams,
} from './question-component.model';

export interface BlockComponentParams {
  id: number;
  title: string;
  description: string;
  score: number;
  questions: QuestionComponentParams[];
}

export class BlockComponent {
  id: number;
  title: string | null;
  description: string | null;
  score: number | null;
  questions: QuestionComponent[];

  constructor(data?: BlockComponentParams) {
    this.id = data?.id ?? 0;
    this.title = data?.title ?? null;
    this.description = data?.description ?? null;
    this.score = data?.score ?? null;
    this.questions = data?.questions
      ? data.questions.map((q) => new QuestionComponent(q))
      : [];
  }
}
