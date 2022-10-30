import { TestBed } from '@angular/core/testing';

import { NewsfeedresolverService } from './newsfeedresolver.service';

describe('NewsfeedresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsfeedresolverService = TestBed.get(NewsfeedresolverService);
    expect(service).toBeTruthy();
  });
});
