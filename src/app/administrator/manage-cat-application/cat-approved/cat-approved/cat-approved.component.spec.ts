import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatApprovedComponent } from './cat-approved.component';

describe('CatApprovedComponent', () => {
  let component: CatApprovedComponent;
  let fixture: ComponentFixture<CatApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
