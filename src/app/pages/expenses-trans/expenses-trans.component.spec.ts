import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesTransComponent } from './expenses-trans.component';

describe('ExpensesTransComponent', () => {
  let component: ExpensesTransComponent;
  let fixture: ComponentFixture<ExpensesTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
