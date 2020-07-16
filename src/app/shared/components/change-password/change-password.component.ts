import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
  hhh: string = "empty";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.hhh = this.route.snapshot.params.id;
  }
}
