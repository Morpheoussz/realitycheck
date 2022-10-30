import { TestBed } from '@angular/core/testing';

import { IncomeresolverService } from './incomeresolver.service';

describe('IncomeresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomeresolverService = TestBed.get(IncomeresolverService);
    expect(service).toBeTruthy();
  });
});
