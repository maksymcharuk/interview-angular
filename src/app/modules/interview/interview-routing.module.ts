import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/guards/logged-in/logged-in.guard';
import { InterviewTemplatesComponent } from './pages/interview-templates/interview-templates.component';

const routes: Routes = [
  {
    path: 'interview-templates',
    canActivate: [LoggedInGuard],
    component: InterviewTemplatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewRoutingModule {}
