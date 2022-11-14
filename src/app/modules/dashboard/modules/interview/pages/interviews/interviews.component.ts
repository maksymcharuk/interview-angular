import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import Interview from 'src/app/models/interview.model';
import { InterviewService } from 'src/app/services/interview/interview.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss'],
})
export class InterviewsComponent {
  public interviews$: Observable<Interview[]> =
    this.interviewService.getInterviews();

  constructor(private interviewService: InterviewService) {}
}
