import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { InterviewService } from 'src/app/services/interview/interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss'],
})
export class InterviewComponent {
  public interview$ = this.route.params.pipe(
    switchMap((params) =>
      this.interviewService
        .getInterview(params['id'])
        .pipe(map((response) => response.data))
    )
  );

  constructor(
    private interviewService: InterviewService,
    private route: ActivatedRoute
  ) {}
}
