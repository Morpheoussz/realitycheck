import { TestBed } from '@angular/core/testing';

import { TranshistoryresolverService } from './transhistoryresolver.service';

describe('TranshistoryresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranshistoryresolverService = TestBed.get(TranshistoryresolverService);
    expect(service).toBeTruthy();
  });
});
