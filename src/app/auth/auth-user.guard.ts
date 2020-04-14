import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class AuthUserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;
        if (isAuth && user.role === "regular") {
          // console.log("Guard let you inside regular");
          return true;
        }
        //console.log("Guard didn't let you in");
        return this.router.createUrlTree(["/login"]);
      })
    );
  }
}
