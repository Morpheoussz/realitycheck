import { TestBed } from '@angular/core/testing';

import { SavingsresolverService } from './savingsresolver.service';

describe('SavingsresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavingsresolverService = TestBed.get(SavingsresolverService);
    expect(service).toBeTruthy();
  });
});
