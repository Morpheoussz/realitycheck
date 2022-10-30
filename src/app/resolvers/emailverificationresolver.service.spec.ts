import { TestBed } from '@angular/core/testing';

import { EmailverificationresolverService } from './emailverificationresolver.service';

describe('EmailverificationresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailverificationresolverService = TestBed.get(EmailverificationresolverService);
    expect(service).toBeTruthy();
  });
});
