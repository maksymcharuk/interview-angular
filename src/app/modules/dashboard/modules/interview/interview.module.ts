import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MarkdownModule } from 'ngx-markdown';

import { InterviewRoutingModule } from './interview-routing.module';

import { InterviewDataService } from './services/interview-data/interview-data.service';

import { InterviewsComponent } from './pages/interviews/interviews.component';
import { InterviewComponent } from './pages/interview/interview.component';

import { QuestionFormComponent } from './components/question-form/question-form.component';
import { BlockComponent } from './components/block/block.component';

@NgModule({
  declarations: [
    InterviewsComponent,
    InterviewComponent,
    QuestionFormComponent,
    BlockComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InterviewRoutingModule,
    CardModule,
    AccordionModule,
    BadgeModule,
    SelectButtonModule,
    InputTextareaModule,
    MarkdownModule.forChild(),
  ],
  providers: [InterviewDataService],
})
export class InterviewModule {}
