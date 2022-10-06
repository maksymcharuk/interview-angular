import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { InterviewDataService } from '../../services/interview-data/interview-data.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss'],
})
export class InterviewComponent implements OnInit {
  public interview: any;

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
      .subscribe((response: any) => (this.interview = response));
  }

  public onBlockChange(question: any) {
    this.interviewDataService
      .updateQuestion(this.interview, question)
      .subscribe();
  }
}
