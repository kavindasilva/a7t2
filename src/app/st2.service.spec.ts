import { TestBed } from '@angular/core/testing';

import { St2Service } from './st2.service';

describe('St2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: St2Service = TestBed.get(St2Service);
    expect(service).toBeTruthy();
  });
});
