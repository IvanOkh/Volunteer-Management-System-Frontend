import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerSideEventsComponent } from './volunteer-side-events.component';

describe('VolunteerSideEventsComponent', () => {
  let component: VolunteerSideEventsComponent;
  let fixture: ComponentFixture<VolunteerSideEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerSideEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerSideEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
