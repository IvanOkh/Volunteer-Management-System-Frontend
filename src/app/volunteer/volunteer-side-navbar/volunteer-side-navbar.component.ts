import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-volunteer-side-navbar",
  templateUrl: "./volunteer-side-navbar.component.html",
  styleUrls: ["./volunteer-side-navbar.component.css"],
})
export class VolunteerSideNavbarComponent implements OnInit {
  constructor(private AS: AuthService) {}

  ngOnInit() {}

  doLogOut() {
    this.AS.logout();
  }
}
