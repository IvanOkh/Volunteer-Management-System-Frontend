// ANGULAR IMPORTS
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

// RXJS IMPORTS
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

// CUSTOM IMPORTS
import { User } from "./user.model";

export interface AuthResponseData {
  email: string;
  id: string;
  role: string;
  token: string;
  expiresIn: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  //observable instance of user
  public user = new BehaviorSubject<User>(null);
  //token timer
  private tokenExpirationTimer: any;

  //make instance of HttpClient and Router
  constructor(private http: HttpClient, private router: Router) {}

  //Method which loads a user in if user credentials exist in their local storage and are not expired. Executes each time application is reloaded (in ngOnInit() of app.component.ts).
  autoLogin() {
    //extract user data from local storage
    const userData: {
      email: string;
      id: string;
      role: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem("userData"));
    //console.log(userData);
    //if user data is empty, return
    if (!userData) {
      return;
    }

    //instantiate a user with extracted data
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData.role,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    //use token getter from user.model to check if token is expired
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }

    if (this.user.value.role === "admin") {
      this.router.navigate(["/admin"]);
    } else {
      this.router.navigate(["/volunteer"]);
    }
  }

  //Method that sends entered email and password to backend. Returns observable of type <AuthResponseData> which can be subscribed to in auth.component.ts
  login(email: string, password: string) {
    return (
      this.http
        .post<AuthResponseData>("http://199.195.116.225:8080/CARS/login", {
          email: email,
          password: password,
          //we can add the following line if API requires a boolean to return token:
          //returnSecureToken: true
        })
        //now lets handle response data, it can be error or legit data if authentication was successful
        .pipe(
          //check if we received response with an error
          catchError(this.handleError),
          //observe for response data, and if recieved, pass it to handleAuthentication
          tap((resData) => {
            // console.log(resData);
            if (resData.email === email) {
              //console.log(resData.expiresIn);
              this.handleAuthentication(
                resData.email,
                resData.id,
                resData.role,
                resData.token,
                resData.expiresIn
              );
            }
          })
        )
    );
  }

  //Method which handles login response data from backend, and saves "session" data into local storage.
  private handleAuthentication(
    email: string,
    userId: string,
    userRole: string,
    token: string,
    expiresIn: string
  ) {
    //we deal with milliseconds here. Make sure to turn it into seconds by * 1000
    //TEMPORARY SOLUTION - can't read date from backend response data
    let newD: Date = new Date(7200000);
    // console.log(newD);
    // console.log(new Date().getTime());
    let expirationDate = new Date(new Date().getTime() + newD.getTime());
    //console.log("new user date is " + expirationDate);
    //instantiate a user from backend reply
    const user = new User(email, userId, userRole, token, expirationDate);
    //push it to observable declared before consturctor
    // console.log(user);
    this.user.next(user);
    //set autologout
    this.autoLogout(newD.getTime());
    //save "session" data into localstorage
    localStorage.setItem("userData", JSON.stringify(user));
  }

  //Method which provides automatic logoutbased on token expiration time.
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      // console.log("auto logout expired");
      this.logout();
    }, expirationDuration);
    // console.log("auto logout kicked in");
  }

  //Method which logs a user out. User is returned to login screen, and local storage is cleaned.
  logout() {
    //console.log("in log out");
    //remove "session" data from local storage
    localStorage.removeItem("userData");
    // localStorage.clear;
    // localStorage.clear;

    //clear the timer's countdown
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    //set timer to null
    this.tokenExpirationTimer = null;
    console.log("LOGGED OUT");
    //clear the user observable by pushing a null
    this.user.next(null);
    //reroute to login
    // this.router.navigate(["/admin"]);
  }

  //Method which fires if 'rxjs operator catchError' detects any error/or error message in response data. Returns observable that emits an error notification.
  private handleError(errorRes: HttpErrorResponse) {
    //!NOTE - the following code can be adjusted to accomodate backend error response
    let errorMsg = "An unknown error occurred.";

    //if no descriptive information from response data then return error message
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }

    //!NOTE - response has to have exactly same messages
    //if there is descriptive message coming from response then check the cases
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMsg = "This email exists already.";
        break;
      case "EMAIL_NOT_FOUND":
        errorMsg = "This email does not exist.";
        break;
      case "INVALID_PASSWORD":
        errorMsg = "This password is not correct.";
        break;
    }
    return throwError(errorMsg);
  }
}
