import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpGuard } from 'src/app/guards/sign-up/sign-up.guard';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', canActivate: [SignUpGuard], component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
