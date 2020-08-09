import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import { passwordService } from "../../services/password.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
  private UUID: string = "";
  message: string = "";
  isLoading: boolean = false;
  processed: boolean = false;

  constructor(
    private passwordService: passwordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let sub = this.route.queryParams.subscribe((queryParams: Params) => {
      this.UUID = queryParams["uuid"];
      // console.log(this.UUID);
    });
    this.onScroll();
  }

  onSubmit(form: NgForm) {
    // console.log(form.value.newPassword);
    // console.log(form.value.confirmedNewPassword);
    // console.log(form.value.newPassword.length);
    if (
      form.value.newPassword.length === 0 &&
      form.value.confirmedNewPassword.length === 0
    ) {
      this.message =
        "Your new password can't be empty. Try to use at least 8 characters";
      return;
    }
    if (
      form.value.newPassword.length < 8 &&
      form.value.confirmedNewPassword.length < 8
    ) {
      this.message =
        "Your new password is too short. Try to use at least 8 characters";
      return;
    }
    if (form.value.newPassword === form.value.confirmedNewPassword) {
      this.recover(this.UUID, form.value.newPassword);
    } else {
      this.message = "Please make sure both passwords match each other";
    }
  }

  private recover(uuid: string, password: string): void {
    this.isLoading = true;
    this.passwordService.sendNewPassword(uuid, password).subscribe(
      (response) => {
        // console.log(response);
        if (response) {
          // console.log("i am in processed");
          this.message =
            "Your request has been processed. Please try to login using new password";
          // this.form.reset();
          this.processed = true;
          this.isLoading = false;
        }
      },
      (error: any) => {
        // console.log("received an error");
        this.message =
          "Unfortunately, we encountered an error. Please check your internet connection or try again later";
        this.isLoading = false;
      }
    );
  }

  onScroll() {
    document.body.scrollTop = 0;
  }
  onOkClick() {
    this.onScroll();
    this.router.navigate(["/login"]);
  }
}
