import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalCharacteristicsComponent } from './physical-characteristics.component';

describe('PhysicalCharacteristicsComponent', () => {
  let component: PhysicalCharacteristicsComponent;
  let fixture: ComponentFixture<PhysicalCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
