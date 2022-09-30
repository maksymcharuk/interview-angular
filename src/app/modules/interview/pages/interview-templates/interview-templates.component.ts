import { Component, OnInit } from '@angular/core';
import { InterviewTemplateService } from 'src/app/services/interview-template/interview-template.service';

@Component({
  selector: 'app-interview-templates',
  templateUrl: './interview-templates.component.html',
  styleUrls: ['./interview-templates.component.scss'],
})
export class InterviewTemplatesComponent implements OnInit {
  constructor(private interviewTemplateService: InterviewTemplateService) {}

  ngOnInit(): void {
    this.interviewTemplateService
      .getInterviewTemplates()
      .subscribe(console.log);
  }
}
