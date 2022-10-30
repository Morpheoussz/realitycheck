import { TestBed } from '@angular/core/testing';

import { DashboardresolverService } from './dashboardresolver.service';

describe('DashboardresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardresolverService = TestBed.get(DashboardresolverService);
    expect(service).toBeTruthy();
  });
});
