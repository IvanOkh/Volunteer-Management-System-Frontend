import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPreviousComponent } from './current-previous.component';

describe('CurrentPreviousComponent', () => {
  let component: CurrentPreviousComponent;
  let fixture: ComponentFixture<CurrentPreviousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPreviousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
