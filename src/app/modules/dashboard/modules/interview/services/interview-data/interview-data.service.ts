import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Interview from 'src/app/models/interview.model';
import { QuestionUpdateableData } from 'src/app/models/question-updeatable-data.model';
import { InterviewService } from 'src/app/services/interview/interview.service';

@Injectable()
export class InterviewDataService {
  constructor(private interviewService: InterviewService) {}

  getInterview(id: number): Observable<Interview> {
    return this.interviewService.getInterview(id);
  }

  updateQuestion(
    interviewId: number,
    questionId: number,
    data: QuestionUpdateableData
  ): Observable<Interview> {
    return this.interviewService.updateQuestion(interviewId, questionId, data);
  }
}
