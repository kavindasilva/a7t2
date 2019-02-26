import { TestBed } from '@angular/core/testing';

import { TutServiceService } from './tut-service.service';

describe('TutServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutServiceService = TestBed.get(TutServiceService);
    expect(service).toBeTruthy();
  });
});
