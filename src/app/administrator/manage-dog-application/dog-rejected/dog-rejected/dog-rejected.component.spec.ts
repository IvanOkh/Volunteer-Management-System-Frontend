import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogRejectedComponent } from './dog-rejected.component';

describe('DogRejectedComponent', () => {
  let component: DogRejectedComponent;
  let fixture: ComponentFixture<DogRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
