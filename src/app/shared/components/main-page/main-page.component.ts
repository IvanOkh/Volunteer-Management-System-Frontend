import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit() {}

  onScroll() {
    document.body.scrollTop = 0;
  }

  onOkClick() {
    this.onScroll();
    this.router.navigate(["/public/home"]);
  }
}
