import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerArchiveComponent } from './volunteer-archive.component';

describe('VolunteerArchiveComponent', () => {
  let component: VolunteerArchiveComponent;
  let fixture: ComponentFixture<VolunteerArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
