import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnDestroy {
  signupForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  private registrationSub: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private ss: StorageService
  ) {}

  ngOnDestroy(): void {
    if (this.registrationSub) {
      this.registrationSub.unsubscribe();
    }
  }

  get password() {
    return this.signupForm.get('password');
  }

  signup() {
    const user = this.signupForm.value;

    this.registrationSub = this.auth
      .register(user.username, user.email, user.password)
      .subscribe(
        (resp) => {
          this.signupForm.reset();

          this.auth.persistUser(resp);

          // this.toast.showSuccess(
          //   'Successfully created account. Redirecting you to the quizzes.'
          // );

          const attemptedRoute = this.ss.getItem('attemptedRoute');
          this.ss.removeItem('attemptedRoute');
          this.router.navigateByUrl(attemptedRoute || '/');
        },
        () => {
          // this.toast.showDanger(
          //   'There was a problem registering your account.'
          // );
        }
      );
  }
}
