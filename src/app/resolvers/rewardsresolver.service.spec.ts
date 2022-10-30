import { TestBed } from '@angular/core/testing';

import { RewardsresolverService } from './rewardsresolver.service';

describe('RewardsresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RewardsresolverService = TestBed.get(RewardsresolverService);
    expect(service).toBeTruthy();
  });
});
