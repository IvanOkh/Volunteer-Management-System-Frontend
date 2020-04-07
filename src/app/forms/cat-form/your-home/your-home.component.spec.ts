import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourHomeComponent } from './your-home.component';

describe('YourHomeComponent', () => {
  let component: YourHomeComponent;
  let fixture: ComponentFixture<YourHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
