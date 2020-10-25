import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FosterModel } from "../models/foster.model";
import { FosterApplication } from "../models/foster-applications.model";

/******************************************************************************/
@Injectable({
  providedIn: "root",
})
export class FostersService {
  private REST_API_SERVER = "http://199.195.116.225:8080/CARS/";
  private CTRL_FOSTER_MAPPING = "fosters/";
  private CTRL_APPLICATION_MAPPING = "applications/fosters/";
  private NEWFOSTER_MAPPING = "new/";

  constructor(private http: HttpClient) {}

  /**
   * Sends a request to the backend for an array containing all fosters.
   * Returns the list of fosters in a subscribe-able object.
   * @returns {Observable<FosterModel[]>}
   */
  public loadFosters(): Observable<FosterModel[]> {
    return this.sendGetAllFostersLoadRequest().pipe(
      map((responseData: FosterModel[]) => {
        const fosterArray: FosterModel[] = [];
        if (responseData != null) {
          responseData.forEach((foster: FosterModel) => {
            fosterArray.push(foster);
          });
        }
        return fosterArray;
      })
    );
  }

  /**
   * Sends a request to the backend for an array containing all foster applications..
   * Returns the list of fosters in a subscribe-able object.
   * @returns {Observable<FosterApplication[]>}
   */
  public loadApplicants(): Observable<FosterApplication[]> {
    return this.sendGetAllApplicationsLoadRequest().pipe(
      map((responseData: FosterApplication[]) => {
        const fosterAppArray: FosterApplication[] = [];
        if (responseData != null) {
          responseData.forEach((fosterApp: FosterApplication) => {
            fosterAppArray.push(fosterApp);
          });
        }
        return fosterAppArray;
      })
    );
  }

  /**
   * Send a request to the backend for an array containing all rejected foster applications
   * where their approved AND active properties are BOTH FALSE
   */
  public loadRejectedApplicants(): Observable<FosterApplication[]> {
    return this.sendGetAllApplicationsLoadRequest().pipe(
      map((responseData: FosterApplication[]) => {
        const fosterAppArray: FosterApplication[] = [];
        responseData.forEach((application: FosterApplication) => {
          if (application.rejected) {
            fosterAppArray.push(application);
          }
        });
        return fosterAppArray;
      })
    );
  }

  /**
   * Sends a request to get a single Foster matching the input id.
   * Returns a subscribe-able object containing the found Foster.
   * @param fosterID
   */
  public getFoster(fosterID: number): Observable<FosterModel> {
    return this.sendGetFosterRequest(fosterID).pipe(
      map((responseData: FosterModel[]) => {
        const foster: FosterModel = responseData[0];
        return foster;
      })
    );
  }

  /**
   * Sends a request to get a single FosterApplication matching the input id.
   * Returns a subscribe-able object containing the found Foster.
   * @param fosterID
   */
  public getFosterApplication(fosterID: number): Observable<FosterApplication> {
    return this.sendGetApplicationRequest(fosterID).pipe(
      map((responseData: FosterApplication[]) => {
        const application: FosterApplication = responseData[0];
        return application;
      })
    );
  }

  /**
   * Sends a request to add a new Foster to the backend database. The
   * input is the new Foster to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param fosterFoster
   */
  public addFoster(foster: FosterApplication): Observable<string> {
    return this.sendPostFosterRequest(foster).pipe(
      map((responseData) => {
        console.log(responseData);
        return responseData;
      })
    );
  }

  /**
   * Sends a request to add a new Foster to the backend database. The
   * input is the new Foster to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param newFoster
   */
  public addFosterApplication(
    newFosterApplication: FosterApplication
  ): Observable<string> {
    return this.sendPostApplicationRequest(newFosterApplication).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  /**
   * Sends a request to update a foster. The input is a Foster
   * with the same ID as the one we want to update in the backend.
   * Returns a subscibe-able object containing the server success/error
   * response.
   * @param changes
   */
  public updateFoster(changes: FosterModel): Observable<string> {
    return this.sendUpdateFosterRequest(changes).pipe(
      map((responseData: string) => {
        return responseData;
      })
    );
  }

  /**
   * Sends a request to update a foster. The input is a Foster
   * with the same ID as the one we want to update in the backend.
   * Returns a subscibe-able object containing the server success/error
   * response.
   * @param changes
   */
  public updateFosterApplication(
    changes: FosterApplication
  ): Observable<string> {
    return this.sendUpdateApplicationRequest(changes).pipe(
      map((responseData: string) => {
        return responseData;
      })
    );
  }

  /**
   * Sends a delete request to the backend. Input ID is used in the
   * backend to delete a foster with a matching ID. Returns a subscribe-
   * able object containing the server success/error response.
   * @param deleteID
   */
  public removeFoster(deleteID: number): Observable<string> {
    return this.sendDeleteFosterRequest(deleteID).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  /**
   * Sends a delete request to the backend. Input ID is used in the
   * backend to delete a foster with a matching ID. Returns a subscribe-
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
  private sendGetAllFostersLoadRequest() {
    return this.http.get<FosterModel[]>(
      this.REST_API_SERVER + this.CTRL_FOSTER_MAPPING
    );
  }

  private sendGetFosterRequest(id: number) {
    return this.http.get<FosterModel[]>(
      this.REST_API_SERVER + this.CTRL_FOSTER_MAPPING + id
    );
  }

  private sendPostFosterRequest(foster: FosterApplication) {
    return this.http.post(this.REST_API_SERVER + this.CTRL_FOSTER_MAPPING, foster, {
      responseType: "text",
    });
  }

  private sendUpdateFosterRequest(foster: FosterModel) {
    return this.http.patch(
      this.REST_API_SERVER + this.CTRL_FOSTER_MAPPING,
      foster,
      {
        responseType: "text",
      }
    );
  }

  private sendDeleteFosterRequest(id: number) {
    return this.http.delete(
      this.REST_API_SERVER + this.CTRL_FOSTER_MAPPING + id,
      {
        responseType: "text",
      }
    );
  }

  /*************************************Applications*****************************************/
  private sendGetAllApplicationsLoadRequest() {
    return this.http.get<FosterApplication[]>(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING
    );
  }

  private sendGetApplicationRequest(id: number) {
    return this.http.get<FosterApplication[]>(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING + id
    );
  }

  private sendPostApplicationRequest(application: FosterApplication) {
    return this.http.post(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING,
      application,
      {
        responseType: "text",
      }
    );
  }

  private sendUpdateApplicationRequest(application: FosterApplication) {
    return this.http.patch(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING,
      application,
      {
        responseType: "text",
      }
    );
  }

  private sendDeleteApplicationRequest(id: number) {
    return this.http.delete(
      this.REST_API_SERVER + this.CTRL_APPLICATION_MAPPING + id,
      {
        responseType: "text",
      }
    );
  }
}
