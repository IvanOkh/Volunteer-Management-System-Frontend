import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterFormComponent } from './foster-form.component';

describe('FosterFormComponent', () => {
  let component: FosterFormComponent;
  let fixture: ComponentFixture<FosterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
