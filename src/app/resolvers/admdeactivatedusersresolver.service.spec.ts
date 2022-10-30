import { TestBed } from '@angular/core/testing';

import { AdmdeactivatedusersresolverService } from './admdeactivatedusersresolver.service';

describe('AdmdeactivatedusersresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmdeactivatedusersresolverService = TestBed.get(AdmdeactivatedusersresolverService);
    expect(service).toBeTruthy();
  });
});
