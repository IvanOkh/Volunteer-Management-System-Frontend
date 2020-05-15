import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterArchiveComponent } from './foster-archive.component';

describe('FosterArchiveComponent', () => {
  let component: FosterArchiveComponent;
  let fixture: ComponentFixture<FosterArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosterArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
