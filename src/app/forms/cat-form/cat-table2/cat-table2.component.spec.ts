import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTable2Component } from './cat-table2.component';

describe('CatTable2Component', () => {
  let component: CatTable2Component;
  let fixture: ComponentFixture<CatTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
