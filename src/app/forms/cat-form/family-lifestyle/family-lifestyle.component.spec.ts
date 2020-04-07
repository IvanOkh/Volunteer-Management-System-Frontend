import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyLifestyleComponent } from './family-lifestyle.component';

describe('FamilyLifestyleComponent', () => {
  let component: FamilyLifestyleComponent;
  let fixture: ComponentFixture<FamilyLifestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyLifestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyLifestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
