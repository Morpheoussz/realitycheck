import { TestBed } from '@angular/core/testing';

import { AdminresolverService } from './adminresolver.service';

describe('AdminresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminresolverService = TestBed.get(AdminresolverService);
    expect(service).toBeTruthy();
  });
});
