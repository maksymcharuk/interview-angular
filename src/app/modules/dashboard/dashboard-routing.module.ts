import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterviewModule } from './modules/interview/interview.module';
import { InterviewTemplateModule } from './modules/interview-template/interview-template.module';

import { LoggedInGuard } from 'src/app/guards/logged-in/logged-in.guard';

import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    canActivate: [LoggedInGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [LoggedInGuard],
        component: MainComponent,
      },
      {
        path: 'candidates',
        canActivate: [LoggedInGuard],
        component: CandidatesComponent,
      },
      {
        path: 'projects',
        canActivate: [LoggedInGuard],
        component: ProjectsComponent,
      },
      {
        path: 'interview-templates',
        canActivate: [LoggedInGuard],
        loadChildren: () => InterviewTemplateModule,
      },
      {
        path: 'interviews',
        canActivate: [LoggedInGuard],
        loadChildren: () => InterviewModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
