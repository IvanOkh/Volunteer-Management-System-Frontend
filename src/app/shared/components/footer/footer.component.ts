import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit() {}

  onScroll() {
    document.body.scrollTop = 0;
  }

  onOkClick() {
    this.onScroll();
    this.router.navigate(["/public/goptek"]);
  }

  public get currentDate () {
    return new Date();
  }
}
