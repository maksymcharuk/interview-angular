import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
import Interview from 'src/app/models/interview.model';
import { QuestionComponent } from 'src/app/models/question-component.model';
import { InterviewDataService } from '../../services/interview-data/interview-data.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss'],
})
export class InterviewComponent implements OnInit {
  public interview$ = new BehaviorSubject<Interview>(new Interview());
  public activeState: boolean[][] = [[]];

  constructor(
    private interviewDataService: InterviewDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.interviewDataService.getInterview(params['id'])
        )
      )
      .subscribe((response: Interview) => {
        // TODO(accordion-rerendering): find another soluton to save accordions toogle state during rerenering
        response.interviewProcess.blocks.forEach((b, i) => {
          this.activeState[i] = [];
          b.questions.forEach((q) => {
            this.activeState[i].push(false);
          });
        });
        this.interview$.next(response);
      });
  }

  public onBlockChange(question: QuestionComponent, inerviewId: number) {
    this.interviewDataService
      .updateQuestion(inerviewId, question.id, {
        notes: question.notes,
        score: question.score,
      })
      .subscribe((response: Interview) => {
        console.log(response);
        this.interview$.next(response);
      });
  }
}
