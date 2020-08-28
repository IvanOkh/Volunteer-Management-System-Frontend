import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css", "../../website-style.css"],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.body.scrollTop = 0;
  }
}
