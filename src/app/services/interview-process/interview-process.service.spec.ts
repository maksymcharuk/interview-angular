import { TestBed } from '@angular/core/testing';

import { InterviewProcessService } from './interview-process.service';

describe('InterviewProcessService', () => {
  let service: InterviewProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
