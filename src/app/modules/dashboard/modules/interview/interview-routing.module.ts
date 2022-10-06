import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterviewComponent } from './pages/interview/interview.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';

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
