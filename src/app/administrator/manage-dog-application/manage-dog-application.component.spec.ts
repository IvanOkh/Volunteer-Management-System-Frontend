import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDogApplicationComponent } from './manage-dog-application.component';

describe('ManageDogApplicationComponent', () => {
  let component: ManageDogApplicationComponent;
  let fixture: ComponentFixture<ManageDogApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDogApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDogApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
