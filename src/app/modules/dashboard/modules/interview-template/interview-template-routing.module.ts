import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewTemplatesComponent } from './components/interview-templates/interview-templates.component';

const routes: Routes = [
  {
    path: '',
    component: InterviewTemplatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewTemplateRoutingModule {}
