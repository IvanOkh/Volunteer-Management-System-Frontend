import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { DogForm } from "../../forms/dog-form/dog-form.model";
import { CatForm } from "../../forms/cat-form/cat-model";
import { VolunteerApplication } from "src/app/shared/models/volunteer-applications.model";
import { FosterApplication } from "../models/foster-applications.model";

/******************************************************************************/
@Injectable({
  providedIn: "root",
})
export class FormsService {
  private REST_API_SERVER = "http://199.195.116.225:8080/CARS/applications/";
  private VOLUNTEER_FORM_MAPPING = "volunteers/";
  private FOSTER_FORM_MAPPING = "fosters/";
  private DOG_FORM_MAPPING = "dogs/";
  private CAT_FORM_MAPPING = "cats/";

  constructor(private http: HttpClient) {}

  /**
   * Sends a request to add a new Dog Form to the backend database. The
   * input is the new Dog Form to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param dogForm
   */
  public sendDogForm(dogForm: DogForm): Observable<string> {
    return this.sendDogPostRequest(dogForm).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  /**
   * HTTP post new dog form to server
   */
  private sendDogPostRequest(dogForm: DogForm) {
    return this.http.post(
      this.REST_API_SERVER + this.DOG_FORM_MAPPING,
      dogForm,
      { responseType: "text" }
    );
  }

  /**
   * Sends a request to add a new Cat Form to the backend database. The
   * input is the new Cat Form to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param catForm
   */
  public sendCatForm(catForm: CatForm): Observable<string> {
    return this.sendCatPostRequest(catForm).pipe(
      map((responseData) => {
        console.log('This is the form sent from Service: ', catForm);
        // console.log(responseData);
        return responseData;
      })
    );
  }

  /**
   * HTTP post new cat form to server
   */
  private sendCatPostRequest(catForm: CatForm) {
    return this.http.post(
      this.REST_API_SERVER + this.CAT_FORM_MAPPING,
      catForm,
      { responseType: "text" }
    );
  }

  /**
   * Sends a request to add a new Foster Form to the backend database. The
   * input is the new Foster Form to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param fosterForm
   */
  public sendFosterForm(fosterForm: FosterApplication): Observable<string> {
    return this.sendFosterPostRequest(fosterForm).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  /**
   * HTTP post new foster form to server
   */
  private sendFosterPostRequest(fosterForm: FosterApplication) {
    return this.http.post(
      this.REST_API_SERVER + this.FOSTER_FORM_MAPPING,
      fosterForm,
      { responseType: "text" }
    );
  }

  /**
   * Sends a request to add a new Volunteer Form to the backend database.
   * The input is the new Volunteer Form to persist to the backend.
   * Returns a subscibe-able object containing the server success/error response.
   * @param volunteerForm
   */
  public sendVolunteerForm(
    volunteerForm: VolunteerApplication
  ): Observable<string> {
    return this.sendVolunteerPostRequest(volunteerForm).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  /**
   * HTTP post new volunteer form to server
   */
  private sendVolunteerPostRequest(volunteerForm: VolunteerApplication) {
    return this.http.post(
      this.REST_API_SERVER + this.VOLUNTEER_FORM_MAPPING,
      volunteerForm,
      { responseType: "text" }
    );
  }
}
