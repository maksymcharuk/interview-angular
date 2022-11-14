import BaseEntity, { BaseEntityParams } from './base-entity.model';

export interface QuestionParams extends BaseEntityParams {
  id: number;
  question: string;
  answer: string;
  notes: string;
  title: string;
}

export default class Question extends BaseEntity {
  id: number | null;
  question: string | null;
  answer: string | null;
  notes: string | null;
  title: string | null;

  constructor(data?: QuestionParams) {
    super(data);
    this.id = data?.id ?? null;
    this.question = data?.question ?? null;
    this.answer = data?.answer ?? null;
    this.notes = data?.notes ?? null;
    this.title = data?.title ?? null;
  }
}
