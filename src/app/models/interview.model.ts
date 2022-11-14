import BaseEntity, { BaseEntityParams } from './base-entity.model';
import Candidate, { CandidateParams } from './candidate.model';
import {
  InterviewProcess,
  InterviewProcessParams,
} from './interview-process.model';
import Project, { ProjectParams } from './project.model';

interface InterviewParams extends BaseEntityParams {
  id: number;
  createdAt: string;
  updatedAt: string;
  notes: string;
  project: ProjectParams;
  candidate: CandidateParams;
  interviewProcess: InterviewProcessParams;
}

export default class Interview extends BaseEntity {
  id: number;
  notes: string | null;
  project: Project;
  candidate: Candidate;
  interviewProcess: InterviewProcess;

  constructor(data?: InterviewParams) {
    super(data);
    this.id = data?.id ?? 0;
    this.notes = data?.notes ?? null;
    this.project = new Project(data?.project);
    this.candidate = new Candidate(data?.candidate);
    this.interviewProcess = new InterviewProcess(data?.interviewProcess);
  }
}
