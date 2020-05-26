import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerRejectedComponent } from './volunteer-rejected.component';

describe('VolunteerRejectedComponent', () => {
  let component: VolunteerRejectedComponent;
  let fixture: ComponentFixture<VolunteerRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
