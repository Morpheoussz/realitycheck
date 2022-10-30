import { TestBed } from '@angular/core/testing';

import { ReferralresolverService } from './referralresolver.service';

describe('ReferralresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferralresolverService = TestBed.get(ReferralresolverService);
    expect(service).toBeTruthy();
  });
});
