import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { VolunteerForm } from "../models/volunteer-form.model";
import { VolunteerApplication } from "../models/volunteer-applications.model";

/******************************************************************************/
@Injectable({
  providedIn: "root",
})
export class VolunteerService {
  private REST_API_SERVER = "http://199.195.116.225:8080/CARS/";
  private CTRL_VOLUNTEER_MAPPING = "volunteers/";
  private CTRL_APPLICATION_MAPPING = "applications/volunteers/";
  private NEWVOLUNTEER_MAPPING = "new/";

  constructor(private http: HttpClient) {}

  /**
   * Sends a request to the backend for an array containing all current volunteers.
   * Returns the list of volunteers in a subscribe-able object.
   * @returns {Observable<VolunteerForm[]>}
   */
  public loadVolunteers(): Observable<VolunteerForm[]> {
    return this.sendGetAllVolunteersLoadRequest().pipe(
      map((responseData: VolunteerForm[]) => {
        // console.log(responseData);
        const volunteerArray: VolunteerForm[] = [];
        if (responseData != null) {
          responseData.forEach((volunteer: VolunteerForm) => {
            volunteerArray.push(volunteer);
          });
        }
        return volunteerArray;
      })
    );
  }

  /**
   * Sends a request to the backend for an array containing all volunteer applications.
   * where their approved AND properties are both true.
   * Returns the list of volunteers in a subscribe-able object.
   * @returns {Observable<VolunteerForm[]>}
   */
  public loadApplicants(): Observable<VolunteerApplication[]> {
    return this.sendGetAllApplicationsLoadRequest().pipe(
      map((responseData: VolunteerApplication[]) => {
        const volunteerAppArray: VolunteerApplication[] = [];
        responseData.forEach((volunteerApp: VolunteerApplication) => {
          volunteerAppArray.push(volunteerApp);
        });
        return volunteerAppArray;
      })
    );
  }

  /**
   * Send a request to the backend for an array containing all rejected volunteer applications
   * where their approved AND active properties are BOTH FALSE
   */
  public loadRejectedApplicants(): Observable<VolunteerApplication[]> {
    return this.sendGetAllApplicationsLoadRequest().pipe(
      map((responseData: VolunteerApplication[]) => {
        const volunteerAppArray: VolunteerApplication[] = [];
        responseData.forEach((application: VolunteerApplication) => {
          if (application.rejected) {
            volunteerAppArray.push(application);
          }
        });
        return volunteerAppArray;
      })
    );
  }

  /**
   * Sends a request to get a single VolunteerForm matching the input id.
   * Returns a subscribe-able object containing the found Volunteer.
   * @param volunteerID
   */
  public getVolunteer(volunteerID: number): Observable<VolunteerForm> {
    return this.sendGetVolunteerRequest(volunteerID).pipe(
      map((responseData: VolunteerForm[]) => {
        const volunteer: VolunteerForm = responseData[0];
        return volunteer;
      })
    );
  }

  /**
   * Sends a request to get a single VolunteerApplication matching the input id.
   * Returns a subscribe-able object containing the found Volunteer.
   * @param volunteerID
   */
  public getVolunteerApplication(
    volunteerID: number
  ): Observable<VolunteerApplication> {
    return this.sendGetApplicationRequest(volunteerID).pipe(
      map((responseData: VolunteerApplication[]) => {
        const application: VolunteerApplication = responseData[0];
        return application;
      })
    );
  }

  /**
   * Sends a request to add a new Volunteer to the backend database. The
   * input is the new Volunteer to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param volunteer
   */
  public addVolunteer(volunteer: VolunteerApplication): Observable<string> {
    return this.sendPostVolunteerRequest(volunteer).pipe(
      map((responseData) => {
        console.log(responseData);
        return responseData;
      })
    );
  }

  /**
   * Sends a request to add a new VolunteerApplication to the backend database. The
   * input is the new Volunteer to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param newVolunteer
   */
  public addVolunteerApplication(
    newVolunteerApplication: VolunteerApplication
  ): Observable<string> {
    return this.sendPostApplicationRequest(newVolunteerApplication).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  /**
   * Sends a request to update a Volunteer. The input is a Volunteer
   * with the same ID as the one we want to update in the backend.
   * Returns a subscibe-able object containing the server success/error
   * response.
   * @param changes
   */
  public updateVolunteer(changes: VolunteerForm): Observable<string> {
    return this.sendUpdateVolunteerRequest(changes).pipe(
      map((responseData: string) => {
        return responseData;
      })
    );
  }

  /**
   * Sends a request to update a VolunteerApplication. The input is a Volunteer
   * with the same ID as the one we want to update in the backend.
   * Returns a subscibe-able object containing the server success/error
   * response.
   * @param changes
   */
  public updateVolunteerApplication(
    changes: VolunteerApplication
  ): Observable<string> {
    return this.sendUpdateApplicationRequest(changes).pipe(
      map((responseData: string) => {
        return responseData;
      })
    );
  }

  /**
   * Sends a delete request for an existing volunteer to the backend. Input ID is used in the
   * backend to delete a Volunteer with a matching ID. Returns a subscribe-
   * able object containing the server success/error response.
   * @param deleteID
   */
  public removeVolunteer(deleteID: number): Observable<string> {
    return this.sendDeleteVolunteerRequest(deleteID).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  /**
   * Sends a delete request for a volunteer application to the backend. Input ID is used in the
   * backend to delete a Volunteer with a matching ID. Returns a subscribe-
   * able object containing the server success/error response.
   * @param deleteID
   */
  public removeApplication(deleteID: number): Observable<string> {
    return this.sendDeleteApplicationRequest(deleteID).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  /******************************************************************************/
  /**
   * Http get load info from server.
   */
  private sendGetAllVolunteersLoadRequest() {
    return this.http.get<VolunteerForm[]>(
      this.REST_API_SERVER + this.CTRL_VOLUNTEER_MAPPING
    );
  }

  /**
   * Http get one Volunteer from server.
   */
  private sendGetVolunteerRequest(id: number) {
    return this.http.get<VolunteerForm[]>(
      this.REST_API_SERVER + this.CTRL_VOLUNTEER_MAPPING + id
    );
  }

  /**
   * HTTP post new Volunteer to server
   */
  private sendPostVolunteerRequest(volunteer: VolunteerApplication) {
    return this.http.post(
      this.REST_API_SERVER + this.CTRL_VOLUNTEER_MAPPING,
      volunteer,
      {
        responseType: "text",
      }
    );
  }

  /**
   * HTTP delete Volunteer from server
   */
  private sendDeleteVolunteerRequest(id: number) {
    return this.http.delete(
      this.REST_API_SERVER + this.CTRL_VOLUNTEER_MAPPING + id,
      {
        responseType: "text",
      }
    );
  }

  /**
   * HTTP patch Volunteer to update server
   */
  private sendUpdateVolunteerRequest(volunteer: VolunteerForm) {
    return this.http.patch(
      this.REST_API_SERVER + this.CTRL_VOLUNTEER_MAPPING,
      volunteer,
      { responseType: "text" }
    );
  }

  //***********************Applications******************* */

  private sendGetAllApplicationsLoadRequest() {
    return this.http.get<VolunteerApplication[]>(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING
    );
  }

  /**
   * Http get one Volunteer from server.
   */
  private sendGetApplicationRequest(id: number) {
    return this.http.get<VolunteerApplication[]>(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING + id
    );
  }

  /**
   * HTTP post new Volunteer to server
   */
  private sendPostApplicationRequest(application: VolunteerApplication) {
    return this.http.post(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING,
      application,
      {
        responseType: "text",
      }
    );
  }

  /**
   * HTTP delete Volunteer from server
   */
  private sendDeleteApplicationRequest(id: number) {
    return this.http.delete(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING + id,
      {
        responseType: "text",
      }
    );
  }

  /**
   * HTTP patch Volunteer to update server
   */
  private sendUpdateApplicationRequest(application: VolunteerApplication) {
    return this.http.patch(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING,
      application,
      { responseType: "text" }
    );
  }
}
