import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

import { MarkdownModule } from 'ngx-markdown';

import { InterviewRoutingModule } from './interview-routing.module';

import { InterviewDataService } from './services/interview-data/interview-data.service';

import { InterviewsComponent } from './pages/interviews/interviews.component';
import { InterviewComponent } from './pages/interview/interview.component';

import { QuestionFormComponent } from './components/question-form/question-form.component';
import { BlockComponent } from './components/block/block.component';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { InterviewCreateComponent } from './pages/interview-create/interview-create.component';

@NgModule({
  declarations: [
    InterviewsComponent,
    InterviewComponent,
    QuestionFormComponent,
    BlockComponent,
    InterviewFormComponent,
    InterviewCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InterviewRoutingModule,
    CardModule,
    AccordionModule,
    BadgeModule,
    ButtonModule,
    SelectButtonModule,
    InputTextareaModule,
    DropdownModule,
    MarkdownModule.forChild(),
  ],
  providers: [InterviewDataService],
})
export class InterviewModule {}
