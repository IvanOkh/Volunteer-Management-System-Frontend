import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.css"],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onScroll() {
    document.body.scrollTop = 0;
  }
  onOkClick() {
    this.onScroll();
    this.router.navigate(["/login"]);
  }
}
