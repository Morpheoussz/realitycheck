import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmNewsfeedComponent } from './adm-newsfeed.component';

describe('AdmNewsfeedComponent', () => {
  let component: AdmNewsfeedComponent;
  let fixture: ComponentFixture<AdmNewsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmNewsfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
