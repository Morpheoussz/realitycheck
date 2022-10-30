import { TestBed } from '@angular/core/testing';

import { ReferralsignupresolverService } from './referralsignupresolver.service';

describe('ReferralsignupresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferralsignupresolverService = TestBed.get(ReferralsignupresolverService);
    expect(service).toBeTruthy();
  });
});
