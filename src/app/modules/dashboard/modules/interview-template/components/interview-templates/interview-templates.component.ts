import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { InterviewTemplateService } from 'src/app/services/interview-template/interview-template.service';

@Component({
  selector: 'app-interview-templates',
  templateUrl: './interview-templates.component.html',
  styleUrls: ['./interview-templates.component.scss'],
})
export class InterviewTemplatesComponent {
  constructor(private interviewTemplateService: InterviewTemplateService) {}

  public interviewTemplates$ = this.interviewTemplateService
    .getInterviewTemplates()
    .pipe(map((response) => response.data));
}
