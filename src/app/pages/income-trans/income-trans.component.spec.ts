import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTransComponent } from './income-trans.component';

describe('IncomeTransComponent', () => {
  let component: IncomeTransComponent;
  let fixture: ComponentFixture<IncomeTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
