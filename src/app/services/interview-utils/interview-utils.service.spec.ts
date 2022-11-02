import { TestBed } from '@angular/core/testing';

import { InterviewUtilsService } from './interview-utils.service';

describe('InterviewUtilsService', () => {
  let service: InterviewUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
