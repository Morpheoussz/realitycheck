import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCtrlRewardsComponent } from './adm-ctrl-rewards.component';

describe('AdmCtrlRewardsComponent', () => {
  let component: AdmCtrlRewardsComponent;
  let fixture: ComponentFixture<AdmCtrlRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCtrlRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCtrlRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
