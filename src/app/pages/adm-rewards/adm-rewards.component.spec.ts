import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRewardsComponent } from './adm-rewards.component';

describe('AdmRewardsComponent', () => {
  let component: AdmRewardsComponent;
  let fixture: ComponentFixture<AdmRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
