import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-us-page",
  templateUrl: "./contact-us-page.component.html",
  styleUrls: ["./contact-us-page.component.css", "../../website-style.css"],
})
export class ContactUsPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.body.scrollTop = 0;
  }
}
