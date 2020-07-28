// ANGULAR IMPORTS
import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

// CUSTOM COMPONENTS
import { AuthService, AuthResponseData } from "./auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  // @ViewChild("authForm", { static: false }) sgnForm: NgForm;
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  message: string = "";
  errorMessage = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    // this.sgnForm = form.value.email;
    // this.isLoading = true;
    // var serchfind: boolean;
    //return if form is invalid
    if (!form.valid) {
      this.errorMessage = true;
      // this.isLoading = false;
      // this.sgnForm.reset();
      // console.log("invalid input");
      // form.reset();
    } else {
      //get email and pass from the submited form
      const email = form.value.email;
      const password = form.value.password;
      //observable for the login response data
      let authObservable: Observable<AuthResponseData>;

      //EMAIL REGEX
      let regexp = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      //test user input
      let serchfind = regexp.test(email);

      if (serchfind === true) {
        this.isLoading = true;
        authObservable = this.authService.login(email, password);

        authObservable.subscribe((responseData) => {
          // console.log(responseData);

          this.isLoading = false;

          if (responseData.role === null && responseData.token === null) {
            this.errorMessage = true;
            this.isLoading = false;
          } else if (responseData.role === "admin") {
            this.router.navigate(["/admin"]);
          } else if (responseData.role === "regular") {
            this.router.navigate(["/volunteer"]);
          }
        });
        // form.reset();
      } else {
        this.errorMessage = true;
        this.isLoading = false;
      }
    }
  }
}
