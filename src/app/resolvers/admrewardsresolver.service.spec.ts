import { TestBed } from '@angular/core/testing';

import { AdmrewardsresolverService } from './admrewardsresolver.service';

describe('AdmrewardsresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmrewardsresolverService = TestBed.get(AdmrewardsresolverService);
    expect(service).toBeTruthy();
  });
});
