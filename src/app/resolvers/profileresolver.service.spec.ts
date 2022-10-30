import { TestBed } from '@angular/core/testing';

import { ProfileresolverService } from './profileresolver.service';

describe('ProfileresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileresolverService = TestBed.get(ProfileresolverService);
    expect(service).toBeTruthy();
  });
});
