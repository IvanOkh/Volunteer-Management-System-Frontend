import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVolunteerAccountComponent } from './view-volunteer-account.component';

describe('ViewVolunteerAccountComponent', () => {
  let component: ViewVolunteerAccountComponent;
  let fixture: ComponentFixture<ViewVolunteerAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVolunteerAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVolunteerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
