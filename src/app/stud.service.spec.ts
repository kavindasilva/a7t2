import { TestBed } from '@angular/core/testing';

import { StudService } from './stud.service';

describe('StudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudService = TestBed.get(StudService);
    expect(service).toBeTruthy();
  });
});
