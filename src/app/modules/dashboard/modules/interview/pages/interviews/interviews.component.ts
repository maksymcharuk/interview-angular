import { Component } from '@angular/core';
import { map } from 'rxjs';
import { InterviewService } from 'src/app/services/interview/interview.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss'],
})
export class InterviewsComponent {
  public interviews$ = this.interviewService
    .getInterviews()
    .pipe(map((response) => response.data));

  constructor(private interviewService: InterviewService) {}
}
