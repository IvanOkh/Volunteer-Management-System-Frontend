import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogApprovedComponent } from './dog-approved.component';

describe('DogApprovedComponent', () => {
  let component: DogApprovedComponent;
  let fixture: ComponentFixture<DogApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
