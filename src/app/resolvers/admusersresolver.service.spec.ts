import { TestBed } from '@angular/core/testing';

import { AdmusersresolverService } from './admusersresolver.service';

describe('AdmusersresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmusersresolverService = TestBed.get(AdmusersresolverService);
    expect(service).toBeTruthy();
  });
});
