import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { InterviewComponent } from './components/interview/interview.component';

@NgModule({
  declarations: [InterviewsComponent, InterviewComponent],
  imports: [CommonModule, InterviewRoutingModule, CardModule],
})
export class InterviewModule {}
