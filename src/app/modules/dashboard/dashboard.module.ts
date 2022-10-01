import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InterviewModule } from './modules/interview/interview.module';

import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    MenuComponent,
    DashboardComponent,
    MainComponent,
    CandidatesComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InterviewModule,
    MenubarModule,
  ],
})
export class DashboardModule {}
