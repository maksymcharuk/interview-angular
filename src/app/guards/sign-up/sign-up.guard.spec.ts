import { TestBed } from '@angular/core/testing';

import { SignUpGuard } from './sign-up.guard';

describe('SignUpGuard', () => {
  let guard: SignUpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignUpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
