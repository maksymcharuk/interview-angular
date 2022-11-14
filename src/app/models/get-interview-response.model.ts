export interface GetInterviewResponse {
  id: number;
  createdAt: string;
  updatedAt: string;
  notes: string;
  project: {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  candidate: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  interviewProcess: {
    id: number;
    score: number;
    createdAt: string;
    updatedAt: string;
    blocks: Array<{
      id: number;
      title: string;
      description: string;
      score: number;
      questions: Array<{
        id: number;
        question: string;
        answer: string;
        score: number;
        notes: string;
        title: string;
      }>;
    }>;
  };
}
