import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealitycheckComponent } from './realitycheck.component';

describe('RealitycheckComponent', () => {
  let component: RealitycheckComponent;
  let fixture: ComponentFixture<RealitycheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealitycheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealitycheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
