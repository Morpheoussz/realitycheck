import { TestBed } from '@angular/core/testing';

import { MainresolverService } from './mainresolver.service';

describe('MainresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainresolverService = TestBed.get(MainresolverService);
    expect(service).toBeTruthy();
  });
});
