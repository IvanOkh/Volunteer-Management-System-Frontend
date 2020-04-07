import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVolunteerComponent } from './view-volunteer.component';

import { MatTableModule } from '@angular/material';

describe('ViewVolunteerComponent', () => {
  let component: ViewVolunteerComponent;
  let fixture: ComponentFixture<ViewVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVolunteerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
