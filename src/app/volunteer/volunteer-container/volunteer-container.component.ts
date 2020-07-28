import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-volunteer-container",
  templateUrl: "./volunteer-container.component.html",
  styleUrls: ["./volunteer-container.component.css"],
})
export class VolunteerContainerComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
}
