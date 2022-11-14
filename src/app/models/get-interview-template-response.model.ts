export interface GetInterviewTemplateResponse {
  id: number;
  createdAt: string;
  updatedAt: string;
  notes: string;
  description: string;
  name: string;
  public: boolean;
  blocks: Array<{
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    questions: Array<{
      id: number;
      question: string;
      answer: string;
      notes: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    }>;
  }>;
  tags: Array<{
    id: number;
    slug: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  }>;
}
