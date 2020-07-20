// ANGULAR IMPORTS
import { Component } from "@angular/core";
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
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  message: string = "";
  errorMessage = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    var serchfind: boolean;
    //return if form is invalid
    if (!form.valid) {
      this.errorMessage = true;
    }
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
    serchfind = regexp.test(email);

    if (serchfind === true) {
      this.isLoading = true;
      authObservable = this.authService.login(email, password);

      authObservable.subscribe(
        (responseData) => {
          //console.log(responseData);
          this.isLoading = false;
          if (responseData.role === "admin") {
            this.router.navigate(["/admin"]);
          } else {
            this.router.navigate(["/volunteer"]);
          }
        },
        (errorMessage) => {
          //console.log(errorMessage);
          // this.error = errorMessage;
          this.errorMessage = true;
          this.isLoading = false;
        }
      );
      // form.reset();
    } else {
      this.errorMessage = true;
    }
  }
}
