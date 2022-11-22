import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, debounceTime, map, merge, switchMap } from 'rxjs';
import Interview from 'src/app/models/interview.model';
import { QuestionComponent } from 'src/app/models/question-component.model';
import { InterviewService } from 'src/app/services/interview/interview.service';
import { InterviewDataService } from '../../services/interview-data/interview-data.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss'],
})
export class InterviewComponent implements OnInit {
  public notesControl = new FormControl();
  public interview$ = new BehaviorSubject<Interview>(new Interview());
  public activeState: boolean[][] = [[]];
  public maxScore = 0;
  public progressScore = 0;

  constructor(
    private interviewDataService: InterviewDataService,
    private interviewService: InterviewService,
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

    this.notesControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value) =>
          this.interview$.pipe(map((interview) => ({ value, interview })))
        ),
        switchMap((res) => {
          const { value, interview } = res;
          return this.interviewService.updateInterview(interview.id, {
            data: { notes: value },
          });
        })
      )
      .subscribe();

    this.interview$.subscribe((interview) => {
      const questionsNumber = interview.interviewProcess.blocks.reduce(
        (acc, current) => {
          return acc + current.questions.filter((q) => !!q.score).length;
        },
        0
      );
      this.maxScore = questionsNumber * 5;
      this.progressScore = interview.interviewProcess.score
        ? Math.round((interview.interviewProcess.score / this.maxScore) * 100)
        : 0;
    });
  }

  public onBlockChange(question: QuestionComponent, inerviewId: number) {
    this.interviewDataService
      .updateQuestion(inerviewId, question.id, {
        notes: question.notes,
        score: question.score,
      })
      .subscribe((response: Interview) => {
        this.interview$.next(response);
      });
  }
}
