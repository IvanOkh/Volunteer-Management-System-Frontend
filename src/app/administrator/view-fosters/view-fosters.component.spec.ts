import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFostersComponent } from './view-fosters.component';

describe('ViewFostersComponent', () => {
  let component: ViewFostersComponent;
  let fixture: ComponentFixture<ViewFostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
