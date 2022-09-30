import { TestBed } from '@angular/core/testing';

import { NormalizationService } from './normalization.service';

describe('NormalizationService', () => {
  let service: NormalizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
