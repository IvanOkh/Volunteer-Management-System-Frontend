import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterRejectedComponent } from './foster-rejected.component';

describe('FosterRejectedComponent', () => {
  let component: FosterRejectedComponent;
  let fixture: ComponentFixture<FosterRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosterRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
