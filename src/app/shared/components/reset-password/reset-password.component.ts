import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { passwordService } from "../../services/password.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"],
  providers: [passwordService],
})
export class ResetPasswordComponent implements OnInit {
  @ViewChild("form", { static: false }) form: NgForm;

  submitted: boolean = false;
  email: string;
  message: string = "";
  isLoading = false;

  constructor(private passwordService: passwordService) {}

  ngOnInit() {
    // this.submitted = false;
  }

  onSubmit(resetForm: NgForm) {
    var serchfind: boolean;

    this.email = resetForm.value.recoveremail;
    //EMAIL REGEX
    let regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    //test user input
    serchfind = regexp.test(this.email);

    if (serchfind === true) {
      this.isLoading = true;
      this.recover(this.email);
    } else {
      this.message = "Make sure you are entering correct email address";
      this.submitted = true;
    }
    // resetForm.reset();
  }

  private recover(email: string): void {
    this.passwordService.sendRecovery(email).subscribe(
      (response) => {
        console.log(response);
        if (response === "Request processed.") {
          this.message =
            "Your request has been processed. If the email matches our records, you will receive an email. Please check the Spam folder if the email response was not received within 12 hours.";
          this.form.reset();
          this.isLoading = false;
        } else {
          this.message =
            "We could not process your request. Make sure you are entering correct email address";
          this.isLoading = false;
        }
      },
      (error: any) => {
        this.message =
          "Unfortunately, we encountered an error. Please check your internet connection or try again later";
        this.form.reset();
        this.isLoading = false;
      }
    );
    this.submitted = true;
  }
}
