import { TestBed } from '@angular/core/testing';

import { AdoptionService } from './adoption.service';

describe('AdoptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdoptionService = TestBed.get(AdoptionService);
    expect(service).toBeTruthy();
  });
});
