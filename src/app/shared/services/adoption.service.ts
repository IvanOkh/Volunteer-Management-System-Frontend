import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AnimalModel } from "../models/animal.model";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { FosterApplication } from "../models/foster-applications.model";
import { CatForm } from "src/app/forms/cat-form/cat-model";
import { DogForm } from "src/app/forms/dog-form/dog-form.model";

@Injectable({
  providedIn: "root",
})
export class AdoptionService {
  cats: CatForm[] = [];
  dogs: DogForm[] = [];
  dogArray: DogForm[] = [];

  private REST_API_SERVER: string =
    "http://199.195.116.225:8080/CARS/applications/";
  private CAT_CTRL_MAPPING: string = "cats/";
  private DOG_CTRL_MAPPING: string = "dogs/";

  constructor(private http: HttpClient) {}

  loadCats(): Observable<CatForm[]> {
    return this.http
      .get<CatForm[]>(this.REST_API_SERVER + this.CAT_CTRL_MAPPING)
      .pipe(
        tap((cat) => {
          this.cats = cat;
        })
      );
  }

  loadDogs(): Observable<DogForm[]> {
    return this.http
      .get<DogForm[]>(this.REST_API_SERVER + this.DOG_CTRL_MAPPING)
      .pipe(
        tap((dog: DogForm[]) => {
          if (dog != null) {
            dog.forEach((dog: DogForm) => {
              this.dogArray.push(dog);
            });
          }
          return this.dogArray;
        })
      );
  }

  public getDogApplication(dogID: number): Observable<DogForm> {
    return this.sendGetDogApplicationRequest(dogID).pipe(
      map((responseData: DogForm[]) => {
        const application: DogForm = responseData[0];
        return application;
      })
    );
  }
  private sendGetDogApplicationRequest(id: number) {
    return this.http.get<DogForm[]>(
      this.REST_API_SERVER + this.DOG_CTRL_MAPPING + id
    );
  }
  
  public getDOG(dogID: number): Observable<DogForm> {
    return this.http
      .get<DogForm>(this.REST_API_SERVER + this.DOG_CTRL_MAPPING + dogID)
      .pipe(
        tap((dog: DogForm) => {
          console.log(dog)
          return dog;
        })
      );
  }

  public getCatApplication(catID: number): Observable<CatForm> {
    return this.sendGetCatApplicationRequest(catID).pipe(
      map((responseData: CatForm[]) => {
        const application: CatForm = responseData[0];
        return application;
      })
    );
  }
  private sendGetCatApplicationRequest(id: number) {
    return this.http.get<CatForm[]>(
      this.REST_API_SERVER + this.CAT_CTRL_MAPPING + id
    );
  }

  updateCatApplication(catChanges: CatForm): Observable<String> {
    return this.http
      .patch(this.REST_API_SERVER + this.CAT_CTRL_MAPPING, catChanges, {
        responseType: "text",
      })
      .pipe(
        map((response: string) => {
          return response;
        })
      );
  }
  updateDogApplication(dogChanges: DogForm): Observable<String> {
    // debugger
    console.log(dogChanges);
    return this.http
      .patch(this.REST_API_SERVER + this.DOG_CTRL_MAPPING, dogChanges, {
        responseType: "text",
      })
      .pipe(
        map((response: string) => {
          return response;
        })
      );
  }

  deleteApplication(applicationID) {
    return this.http
      .delete(this.REST_API_SERVER + this.CAT_CTRL_MAPPING + applicationID, {
        responseType: "text",
      })
      .pipe(map((response: string) => response));
  }
}
