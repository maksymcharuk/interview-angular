import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterviewProcessService } from 'src/app/services/interview-process/interview-process.service';
import { InterviewService } from 'src/app/services/interview/interview.service';

@Injectable()
export class InterviewDataService {
  constructor(
    private interviewService: InterviewService,
    private interviewProcessService: InterviewProcessService
  ) {}

  getInterview(id: number): Observable<any> {
    return this.interviewService.getInterview(id);
  }

  updateQuestion(interview: any, question: any): Observable<any> {
    this.updateInterviewData(interview, question);
    return this.interviewProcessService.updateInterviewProcess(
      interview.data.attributes.interviewProcess.data.id,
      {
        data: interview.data.attributes.interviewProcess.data.attributes,
      }
    );
  }

  private updateInterviewData(interview: any, question: any) {
    let interviewProcessScore = 0;
    interview.data.attributes.interviewProcess.data.attributes.blocks.forEach(
      (block: any) => {
        let blockScore = 0;
        block.questions.forEach((q: any) => {
          if (q.id === question.id) {
            q = question;
          }
          blockScore += q.score;
        });
        block.score = blockScore;
        interviewProcessScore += blockScore;
      }
    );
    interview.data.attributes.interviewProcess.data.attributes.score =
      interviewProcessScore;
  }
}
