import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewTemplatesComponent } from './pages/interview-templates/interview-templates.component';


@NgModule({
  declarations: [
    InterviewTemplatesComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule
  ]
})
export class InterviewModule { }
