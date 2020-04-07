import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VolunteerSideNavbarComponent } from "./volunteer-side-navbar.component";

describe("VolunteerSideNavbarComponent", () => {
  let component: VolunteerSideNavbarComponent;
  let fixture: ComponentFixture<VolunteerSideNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerSideNavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
