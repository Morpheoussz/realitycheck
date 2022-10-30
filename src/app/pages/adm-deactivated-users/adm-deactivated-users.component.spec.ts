import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDeactivatedUsersComponent } from './adm-deactivated-users.component';

describe('AdmDeactivatedUsersComponent', () => {
  let component: AdmDeactivatedUsersComponent;
  let fixture: ComponentFixture<AdmDeactivatedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDeactivatedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDeactivatedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
