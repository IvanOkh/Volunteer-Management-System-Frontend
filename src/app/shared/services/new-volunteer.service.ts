import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { VolunteerForm } from '../models/volunteer-form.model';

/******************************************************************************/
@Injectable({
  providedIn: "root"
})
export class VolunteerService
{
  private REST_API_SERVER = "http://68.66.193.100:8080/CARS/";
  private CTRL_MAPPING = "volunteers/";

  constructor(private http: HttpClient) {}

  public loadAllVolunteers(): Observable<VolunteerForm[]>
  {
    return this.sendGetAllLoadRequest()
      .pipe(
        map((responseData: VolunteerForm[]) => {
          const volunteerArray: VolunteerForm[] = [];
          responseData.forEach((volunteer: VolunteerForm) => {
            if (volunteer.approved) {
              volunteerArray.push(volunteer);
            }
          });
          return volunteerArray;
        })
      );
  }

  /**
   * Sends a request to the backend for an array containing all volunteers.
   * Returns the list of volunteers in a subscribe-able object.
   * @returns {Observable<VolunteerForm[]>}
   */
  public loadVolunteers(activeStatus: boolean): Observable<VolunteerForm[]>
  {
    return this.sendGetAllLoadRequest()
      .pipe(
        map((responseData: VolunteerForm[]) => {
          const volunteerArray: VolunteerForm[] = [];
          responseData.forEach((volunteer: VolunteerForm) => {
            if (volunteer.approved && volunteer.active === activeStatus) {
              volunteerArray.push(volunteer);
            }
          });
          return volunteerArray;
        })
      );
  }

  /**
   * Sends a request to the backend for an array containing all volunteers
   * where their approved ANDproperties are both true.
   * Returns the list of volunteers in a subscribe-able object.
   * @returns {Observable<VolunteerForm[]>}
   */
  public loadAllApplicants(): Observable<VolunteerForm[]>
  {
    return this.sendGetAllLoadRequest()
      .pipe(
        map((responseData: VolunteerForm[]) => {
          const volunteerArray: VolunteerForm[] = [];
          responseData.forEach((volunteer: VolunteerForm) => {
            if (!volunteer.approved) {
              volunteerArray.push(volunteer);
            }
          });
          return volunteerArray;
        })
      );
  }

  /**
   * Sends a request to the backend for an array containing all volunteers
   * where their approved is true and their active status matches the passed activeStatus argument.
   * Returns the list of volunteers in a subscribe-able object.
   * @returns {Observable<VolunteerForm[]>}
   */
  public loadApplicants(activeStatus: boolean): Observable<VolunteerForm[]>
  {
    return this.sendGetAllLoadRequest()
      .pipe(
        map((responseData: VolunteerForm[]) => {
          const volunteerArray: VolunteerForm[] = [];
          responseData.forEach((volunteer: VolunteerForm) => {
            if (!volunteer.approved && volunteer.active === activeStatus) {
              volunteerArray.push(volunteer);
            }
          });
          return volunteerArray;
        })
      );
  }

  /**
   * Send a request to the backend for an array containing all volunteers
   * where their approved AND active properties are BOTH FALSE
   */
  public loadArchivedApplicants(): Observable<VolunteerForm[]>
  {
    return this.sendGetAllLoadRequest()
      .pipe(
        map((responseData: VolunteerForm[]) => {
          const volunteerArray: VolunteerForm[] = [];
          responseData.forEach((volunteer: VolunteerForm) => {
            if (!volunteer.approved && !volunteer.active) {
              volunteerArray.push(volunteer);
            }
          });
          return volunteerArray;
        })
      );
  }

  /**
   * Sends a request to get a single VolunteerForm matching the input id.
   * Returns a subscribe-able object containing the found Volunteer.
   * @param volunteerID
   */
  public getVolunteerForm(volunteerID: number): Observable<VolunteerForm>
  {
    return this.sendGetVolunteerRequest(volunteerID)
      .pipe(
        map((responseData: VolunteerForm[]) => {
          const volunteer: VolunteerForm = responseData[0];
          return volunteer;
        })
      );
  }

  /**
   * Sends a request to add a new Volunteer to the backend database. The
   * input is the new Volunteer to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param newVolunteer
   */
  public addVolunteer(newVolunteer: VolunteerForm): Observable<string>
  {
    return this.sendPostRequest(newVolunteer)
      .pipe(
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
  public updateVolunteer(changes: VolunteerForm): Observable<string>
  {
    return this.sendUpdateRequest(changes)
      .pipe(
        map((responseData: string) => {
          return responseData;
        })
      );
  }

  /**
   * Sends a delete request to the backend. Input ID is used in the
   * backend to delete a Volunteer with a matching ID. Returns a subscribe-
   * able object containing the server success/error response.
   * @param deleteID
   */
  public removeVolunteer(deleteID: number): Observable<string>
  {
    return this.sendDeleteRequest(deleteID)
      .pipe(
        map((responseData) => {
          return responseData;
        })
      );
  }

  /******************************************************************************/
  /**
   * Http get load info from server.
   */
  private sendGetAllLoadRequest()
  {
    return this.http.get<VolunteerForm[]>(
      this.REST_API_SERVER + this.CTRL_MAPPING
    );
  }

  /**
   * Http get one Volunteer from server.
   */
  private sendGetVolunteerRequest(id: number)
  {
    return this.http.get<VolunteerForm[]>(
      this.REST_API_SERVER + this.CTRL_MAPPING + id
    );
  }

  /**
   * HTTP post new Volunteer to server
   */
  private sendPostRequest(volunteer: VolunteerForm)
  {
    return this.http.post(
      this.REST_API_SERVER + this.CTRL_MAPPING,
      volunteer,
      {responseType: 'text'}
    );
  }

  /**
   * HTTP delete Volunteer from server
   */
  private sendDeleteRequest(id: number)
  {
    return this.http.delete(
      this.REST_API_SERVER + this.CTRL_MAPPING + id,
      { responseType: 'text' }
    );
  }

  /**
   * HTTP patch Volunteer to update server
   */
  private sendUpdateRequest(volunteer: VolunteerForm)
  {
    return this.http.patch(
      this.REST_API_SERVER + this.CTRL_MAPPING,
      volunteer,
      { responseType: 'text' }
    );
  }

}
