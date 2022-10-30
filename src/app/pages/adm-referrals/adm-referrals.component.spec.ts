import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmReferralsComponent } from './adm-referrals.component';

describe('AdmReferralsComponent', () => {
  let component: AdmReferralsComponent;
  let fixture: ComponentFixture<AdmReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
