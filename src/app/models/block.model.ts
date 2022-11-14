import BaseEntity, { BaseEntityParams } from './base-entity.model';
import Question, { QuestionParams } from './question.model';

export interface BlockParams extends BaseEntityParams {
  id: number;
  title: string;
  description: string;
  questions: QuestionParams[];
}

export default class Block extends BaseEntity {
  id: number | null;
  title: string | null;
  description: string | null;
  questions: Question[];

  constructor(data?: BlockParams) {
    super(data);
    this.id = data?.id ?? null;
    this.title = data?.title ?? null;
    this.description = data?.description ?? null;
    this.questions = data?.questions
      ? data.questions.map((q) => new Question(q))
      : [];
  }
}
