import { TestBed } from '@angular/core/testing';

import { ExpensesresolverService } from './expensesresolver.service';

describe('ExpensesresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensesresolverService = TestBed.get(ExpensesresolverService);
    expect(service).toBeTruthy();
  });
});
