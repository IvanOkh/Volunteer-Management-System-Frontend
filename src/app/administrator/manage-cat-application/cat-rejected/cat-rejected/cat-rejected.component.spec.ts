import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatRejectedComponent } from './cat-rejected.component';

describe('CatRejectedComponent', () => {
  let component: CatRejectedComponent;
  let fixture: ComponentFixture<CatRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
