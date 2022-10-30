import { TestBed } from '@angular/core/testing';

import { AdmreferralsresolverService } from './admreferralsresolver.service';

describe('AdmreferralsresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmreferralsresolverService = TestBed.get(AdmreferralsresolverService);
    expect(service).toBeTruthy();
  });
});
