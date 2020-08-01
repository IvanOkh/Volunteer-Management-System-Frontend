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
  UUID: string = "";
  newPassword: string = "";
  message: string = "";

  constructor(
    private passwordService: passwordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let sub = this.route.queryParams.subscribe((queryParams: Params) => {
      this.UUID = queryParams["uuid"];
      console.log(this.UUID);
    });
  }

  onSubmit(form: NgForm) {
    // console.log(form.value.newPassword);
    // console.log(form.value.confirmedNewPassword);
    if (form.value.newPassword === form.value.confirmedNewPassword) {
      this.recover(this.UUID, form.value.newPassword);
    } else {
      this.message = "Please make sure both passwords match each other";
      // form.resetForm();
    }
  }

  private recover(uuid: string, password: string): void {
    this.passwordService.sendNewPassword(uuid, password).subscribe(
      (response) => {
        console.log(response);
        if (response) {
          console.log("i am in processed");
          this.message =
            "Your request has been processed. Please try to login using new password.";
          // this.form.reset();
          // this.isLoading = false;
        }
        // else {
        //   console.log("i am in else");
        //   this.message =
        //     "We could not process your request. Make sure you are entering correct email address";
        //   // this.isLoading = false;
        // }
      },
      (error: any) => {
        console.log("received an error");
        this.message =
          "Unfortunately, we encountered an error. Please check your internet connection or try again later";
        // this.form.reset();
        // this.isLoading = false;
      }
    );
    // this.submitted = true;
  }

  onScroll() {
    document.body.scrollTop = 0;
  }
  onOkClick() {
    this.onScroll();
    this.router.navigate(["/login"]);
  }
}
