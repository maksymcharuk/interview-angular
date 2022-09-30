import { TestBed } from '@angular/core/testing';

import { InterviewTemplateService } from './interview-template.service';

describe('InterviewTemplateService', () => {
  let service: InterviewTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
