import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVolunteerInfoComponent } from './view-volunteer-info.component';

describe('ViewVolunteerInfoComponent', () => {
  let component: ViewVolunteerInfoComponent;
  let fixture: ComponentFixture<ViewVolunteerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVolunteerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVolunteerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
