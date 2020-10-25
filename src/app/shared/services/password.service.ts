import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NewPassword } from "../models/new-password.model";

@Injectable({
  providedIn: "root",
})
export class passwordService {
  private REST_API_SERVER = "http://199.195.116.225:8080/CARS/"; // REST API endpoint
  private CTRL_MAPPING = "reset";
  private UUID_MAPPING = "password";

  private holder: NewPassword = null;

  constructor(private http: HttpClient) {}

  //sequre request with uuid
  public sendNewPassword(uuid: string, password: string): Observable<string> {
    this.holder = new NewPassword(uuid, password);
    // console.log(this.holder);
    return this.sendPostUUID(this.holder).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  private sendPostUUID(new_pass: NewPassword) {
    return this.http.post(this.REST_API_SERVER + this.UUID_MAPPING, new_pass, {
      responseType: "text",
    });
  }

  //initial recovery request
  public sendRecovery(email: string): Observable<string> {
    return this.sendPostRequest(email).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  private sendPostRequest(email: string) {
    return this.http.post(this.REST_API_SERVER + this.CTRL_MAPPING, email, {
      responseType: "text",
    });
  }
}
