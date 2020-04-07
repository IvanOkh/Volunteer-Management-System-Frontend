import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFormComponent } from './volunteer-form.component';

describe('VolunteerFormComponent', () => {
  let component: VolunteerFormComponent;
  let fixture: ComponentFixture<VolunteerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
