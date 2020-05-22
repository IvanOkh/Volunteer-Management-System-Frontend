import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FosterModel } from "../models/foster.model";

/******************************************************************************/
@Injectable({
  providedIn: "root",
})
export class FostersService {
  private REST_API_SERVER = "http://68.66.193.100:8080/CARS/";
  private CTRL_MAPPING = "fosters/";

  constructor(private http: HttpClient) {}

  /**
   * Sends a request to the backend for an array containing all fosters.
   * Returns the list of fosters in a subscribe-able object.
   * @returns {Observable<FosterModel[]>}
   */
  public loadAllFosters(): Observable<FosterModel[]> {
    return this.sendGetAllLoadRequest().pipe(
      map((responseData: FosterModel[]) => {
        const fosterArray: FosterModel[] = [];
        responseData.forEach((foster: FosterModel) => {
          if (foster.id || foster.id === 0) {
            fosterArray.push(foster);
          }
        });
        return fosterArray;
      })
    );
  }

  /**
   * Sends a request to the backend for an array containing all fosters.
   * Returns the list of fosters in a subscribe-able object.
   * @returns {Observable<FosterModel[]>}
   */
  public loadFosters(activeStatus: boolean): Observable<FosterModel[]> {
    return this.sendGetAllLoadRequest().pipe(
      map((responseData: FosterModel[]) => {
        const fosterArray: FosterModel[] = [];
        if (responseData != null) {
          responseData.forEach((foster: FosterModel) => {
            if (
              foster.id ||
              (foster.id === 0 && foster.active === activeStatus)
            ) {
              fosterArray.push(foster);
            }
          });
        }
        return fosterArray;
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
   * Sends a request to add a new Foster to the backend database. The
   * input is the new Foster to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param newFoster
   */
  public addFoster(newFoster: FosterModel): Observable<string> {
    return this.sendPostRequest(newFoster).pipe(
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
    return this.sendUpdateRequest(changes).pipe(
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
    return this.sendDeleteRequest(deleteID).pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }

  /******************************************************************************/
  private sendGetAllLoadRequest() {
    return this.http.get<FosterModel[]>(
      this.REST_API_SERVER + this.CTRL_MAPPING
    );
  }

  private sendGetFosterRequest(id: number) {
    return this.http.get<FosterModel[]>(
      this.REST_API_SERVER + this.CTRL_MAPPING + id
    );
  }

  private sendPostRequest(foster: FosterModel) {
    return this.http.post(this.REST_API_SERVER + this.CTRL_MAPPING, foster, {
      responseType: "text",
    });
  }

  private sendUpdateRequest(foster: FosterModel) {
    return this.http.patch(this.REST_API_SERVER + this.CTRL_MAPPING, foster, {
      responseType: "text",
    });
  }

  private sendDeleteRequest(id: number) {
    return this.http.delete(this.REST_API_SERVER + this.CTRL_MAPPING + id, {
      responseType: "text",
    });
  }
}
