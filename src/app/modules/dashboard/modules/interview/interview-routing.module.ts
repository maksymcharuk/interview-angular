import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewComponent } from './components/interview/interview.component';

import { InterviewsComponent } from './components/interviews/interviews.component';

const routes: Routes = [
  {
    path: '',
    component: InterviewsComponent,
  },
  {
    path: ':id',
    component: InterviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewRoutingModule {}
