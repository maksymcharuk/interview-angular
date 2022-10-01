import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

import { InterviewTemplateRoutingModule } from './interview-template-routing.module';
import { InterviewTemplatesComponent } from './components/interview-templates/interview-templates.component';

@NgModule({
  declarations: [InterviewTemplatesComponent],
  imports: [
    CommonModule,
    InterviewTemplateRoutingModule,
    CardModule,
    ChipModule,
  ],
})
export class InterviewTemplateModule {}
