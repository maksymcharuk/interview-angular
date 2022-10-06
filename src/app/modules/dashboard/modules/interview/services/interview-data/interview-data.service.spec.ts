import { TestBed } from '@angular/core/testing';

import { InterviewDataService } from './interview-data.service';

describe('InterviewDataService', () => {
  let service: InterviewDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
