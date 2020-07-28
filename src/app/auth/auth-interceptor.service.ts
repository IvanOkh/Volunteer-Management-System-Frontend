import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from "@angular/common/http";
import { take, exhaustMap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  //attach auth-token to every http request header
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        //request can't be modified. Make a copy and apply changes to it
        const modifiedReq = req.clone({
          setHeaders: { "auth-token": user.token },
        });
        //return modified HttpRequest with auth-token written in the header
        return next.handle(modifiedReq);
      })
    );
  }
}
