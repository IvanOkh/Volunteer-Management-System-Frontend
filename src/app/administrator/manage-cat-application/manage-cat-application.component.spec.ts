import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCatApplicationComponent } from './manage-cat-application.component';

describe('ManageCatApplicationComponent', () => {
  let component: ManageCatApplicationComponent;
  let fixture: ComponentFixture<ManageCatApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCatApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCatApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
