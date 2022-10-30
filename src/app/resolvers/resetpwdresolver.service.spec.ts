import { TestBed } from '@angular/core/testing';

import { ResetpwdresolverService } from './resetpwdresolver.service';

describe('ResetpwdresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResetpwdresolverService = TestBed.get(ResetpwdresolverService);
    expect(service).toBeTruthy();
  });
});
