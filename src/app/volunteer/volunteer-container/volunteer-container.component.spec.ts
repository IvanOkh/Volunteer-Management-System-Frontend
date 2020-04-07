import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerContainerComponent } from './volunteer-container.component';

describe('VolunteerContainerComponent', () => {
  let component: VolunteerContainerComponent;
  let fixture: ComponentFixture<VolunteerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
