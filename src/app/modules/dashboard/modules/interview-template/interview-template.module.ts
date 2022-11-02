import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

import { InterviewTemplateRoutingModule } from './interview-template-routing.module';
import { InterviewTemplatesComponent } from './components/interview-templates/interview-templates.component';

@NgModule({
  declarations: [InterviewTemplatesComponent],
  imports: [
    CommonModule,
    InterviewTemplateRoutingModule,
    ButtonModule,
    CardModule,
    ChipModule,
  ],
})
export class InterviewTemplateModule {}
