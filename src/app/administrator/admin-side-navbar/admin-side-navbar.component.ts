// ANGULAR IMPORTS
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

// ADMIN SIDE NAVBAR COMPONENT
@Component({
  selector: "app-admin-side-navbar",
  templateUrl: "./admin-side-navbar.component.html",
  styleUrls: ["./admin-side-navbar.component.css"],
})
export class AdminSideNavbarComponent implements OnInit {
  constructor(private AS: AuthService) {}

  ngOnInit() {}

  doLogOut() {
    this.AS.logout();
  }
}
