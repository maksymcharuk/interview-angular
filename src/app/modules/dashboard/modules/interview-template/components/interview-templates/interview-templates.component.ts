import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { InterviewTemplateService } from 'src/app/services/interview-template/interview-template.service';
import { InterviewUtilsService } from 'src/app/services/interview-utils/interview-utils.service';

@Component({
  selector: 'app-interview-templates',
  templateUrl: './interview-templates.component.html',
  styleUrls: ['./interview-templates.component.scss'],
})
export class InterviewTemplatesComponent {
  constructor(
    private router: Router,
    private interviewTemplateService: InterviewTemplateService
  ) {}

  public interviewTemplates$ = this.interviewTemplateService
    .getInterviewTemplates()
    .pipe(map((response) => response.data));

  createInterviewFromTemplate(templateId: number) {
    this.router.navigate(['/interviews/create'], {
      queryParams: { templateId },
    });
  }
}
