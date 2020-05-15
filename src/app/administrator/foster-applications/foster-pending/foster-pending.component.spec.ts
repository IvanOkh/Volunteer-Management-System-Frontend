import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterPendingComponent } from './foster-pending.component';

describe('FosterPendingComponent', () => {
  let component: FosterPendingComponent;
  let fixture: ComponentFixture<FosterPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosterPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
