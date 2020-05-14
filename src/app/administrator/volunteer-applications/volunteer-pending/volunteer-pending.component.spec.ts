import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerPendingComponent } from './volunteer-pending.component';

describe('ManageApplicationsComponent', () => {
  let component: VolunteerPendingComponent;
  let fixture: ComponentFixture<VolunteerPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
