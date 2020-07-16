import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class passwordService {
  private REST_API_SERVER = "http://68.66.193.100:8080/CARS/"; // REST API endpoint
  private CTRL_MAPPING = "reset";

  constructor(private http: HttpClient) {}

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
