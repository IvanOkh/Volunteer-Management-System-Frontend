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

  constructor(private passwordService: passwordService) {}

  ngOnInit() {
    this.submitted = false;
  }

  onSubmit(resetForm: NgForm) {
    this.message = "";
    // console.log(resetForm.value.recoveremail);
    this.email = resetForm.value.recoveremail;
    if (!(this.email === "" || this.email === null)) {
      // this.passwordService.sendRecovery(this.email).pipe(
      //   map((responseData) => {
      //     console.log(responseData);
      //     return responseData;
      //   })
      // );
      this.recover(this.email);
      // this.submitEmail(this.email).subscribe {}
      // this.submitted = true;
    } else {
      this.message = "Make sure you are entering correct email address";
      this.submitted = true;
    }
    resetForm.reset();
  }

  private recover(email: string): void {
    this.message = "";
    this.passwordService.sendRecovery(this.email).subscribe(
      (response) => {
        if (response === "Fail") {
          this.message =
            "We could not process your request. Make sure you are entering correct email address";
        } else {
          this.message =
            "An email has been sent. Please click the link when you get it.";
        }
      },
      (error: any) => {
        this.message =
          "Unfortunaelly, we encountered an error. Please check you internet connection or try again later";
        console.log("Password Recovery HTTP response failed.");
        console.log(error);
      }
    );
    this.submitted = true;
  }

  // this.es.addEvent(newEvent).subscribe(
  //   () => {
  //     // success
  //     this.loadEvents();
  //   },
  //   (error: any) => {
  //     // error
  //     console.log("Password Recovery HTTP response failed.");
  //     console.log(error);
  //   }
  // );
  // }
}
