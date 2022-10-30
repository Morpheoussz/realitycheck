import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSendmailComponent } from './adm-sendmail.component';

describe('AdmSendmailComponent', () => {
  let component: AdmSendmailComponent;
  let fixture: ComponentFixture<AdmSendmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmSendmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSendmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
