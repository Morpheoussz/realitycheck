import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralTransComponent } from './referral-trans.component';

describe('ReferralTransComponent', () => {
  let component: ReferralTransComponent;
  let fixture: ComponentFixture<ReferralTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
