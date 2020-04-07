import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewAdminProfileComponent } from "./view-admin-profile.component";

describe("ViewAdminProfileComponent", () => {
  let component: ViewAdminProfileComponent;
  let fixture: ComponentFixture<ViewAdminProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAdminProfileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
