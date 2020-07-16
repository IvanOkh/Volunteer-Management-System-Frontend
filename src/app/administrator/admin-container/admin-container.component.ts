// ANGULAR IMPORTS
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

// ADMIN CONTAINER COMPONENT
@Component({
  selector: "app-admin-container",
  templateUrl: "./admin-container.component.html",
  styleUrls: ["./admin-container.component.css"],
})
export class AdminContainerComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  // ngAfterContentInit() {
  //   // this.router.navigate(["events"], { relativeTo: this.route });
  // }
}
