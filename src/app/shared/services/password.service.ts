import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class passwordService {
  private REST_API_SERVER = "http://68.66.193.100:8080/CARS/"; // REST API endpoint
  private CTRL_MAPPING = "";

  constructor(private http: HttpClient) {}

  sendPostResquest(email: string) {
    return this.http.patch(this.REST_API_SERVER + this.CTRL_MAPPING, email, {
      responseType: "text"
    });
  }
}
