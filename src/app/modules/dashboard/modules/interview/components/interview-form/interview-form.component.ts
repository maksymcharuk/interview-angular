import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { InterviewTemplateService } from 'src/app/services/interview-template/interview-template.service';
import { InterviewUtilsService } from 'src/app/services/interview-utils/interview-utils.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.scss'],
})
export class InterviewFormComponent implements AfterViewInit {
  @Input() templateId: number | undefined;

  interviewForm = this.fb.group({
    candidate: ['', [Validators.required]],
    project: ['', [Validators.required]],
    interviewTemplate: ['', [Validators.required]],
    notes: [''],
  });

  selectedCandidate$ = this.interviewForm.get('candidate')?.valueChanges;
  selectedProject$ = this.interviewForm.get('project')?.valueChanges;
  selectedInterviewTemplate$ =
    this.interviewForm.get('interviewTemplate')?.valueChanges;

  cadidates$ = this.candidateService
    .getCadidates()
    .pipe(map((response: any) => response.data));
  projects$ = this.projectService
    .getProjects()
    .pipe(map((response: any) => response.data));
  templates$ = this.interviewTemplatesService
    .getInterviewTemplates()
    .pipe(map((response: any) => response.data));

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private candidateService: CandidateService,
    private projectService: ProjectService,
    private interviewTemplatesService: InterviewTemplateService,
    private interviewUtlsService: InterviewUtilsService
  ) {}

  ngAfterViewInit(): void {
    this.templates$.subscribe((templates) => {
      if (this.templateId) {
        const template = templates.find((t: any) => t.id === this.templateId);
        this.interviewForm.get('interviewTemplate')?.patchValue(template);
      }
    });
  }

  createInterview() {
    const interview = {
      candidateId: this.interviewForm.get('candidate')?.value.id,
      projectId: this.interviewForm.get('project')?.value.id,
      templateId: this.interviewForm.get('interviewTemplate')?.value.id,
      notes: this.interviewForm.get('notes')?.value,
    };
    this.interviewUtlsService
      .createInterviewFromTemplate(interview)
      .subscribe((response) => {
        this.router.navigate(['/interviews', response.id]);
      });
  }
}
