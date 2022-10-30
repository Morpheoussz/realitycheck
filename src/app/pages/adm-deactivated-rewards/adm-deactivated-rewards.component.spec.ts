import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDeactivatedRewardsComponent } from './adm-deactivated-rewards.component';

describe('AdmDeactivatedRewardsComponent', () => {
  let component: AdmDeactivatedRewardsComponent;
  let fixture: ComponentFixture<AdmDeactivatedRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDeactivatedRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDeactivatedRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
