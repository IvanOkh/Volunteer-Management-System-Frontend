import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AnimalModel } from "../models/animal.model";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { FosterApplication } from "../models/foster-applications.model";

@Injectable({
  providedIn: "root",
})
export class AdoptionService {
  cats: AnimalModel[] = [];
  dogs: AnimalModel[] = [];

  rejectedDog: AnimalModel[] = [];
  dog2: AnimalModel[] = [];
  element: AnimalModel;

  private REST_API_SERVER: string = "http://68.66.193.100:8080/CARS/";
  private CAT_CTRL_MAPPING: string = "applications/cats";
  private DOG_CTRL_MAPPING: string = "applications/dogs";

  constructor(private http: HttpClient) {}

  loadCats(): Observable<AnimalModel[]> {
    return this.http
      .get<AnimalModel[]>(this.REST_API_SERVER + this.CAT_CTRL_MAPPING)
      .pipe(
        tap((cat) => {
          this.cats = cat;
        })
      );
  }

  loadDogs(): Observable<AnimalModel[]> {
    return this.http
      .get<AnimalModel[]>(this.REST_API_SERVER + this.DOG_CTRL_MAPPING)
      .pipe(
        tap((dog) => {
          this.dogs = dog;
          // console.log(this.dogs);
        })
      );
  }

  updateDogApplication(dogChanges: AnimalModel): Observable<String> {
    return this.sendUpdateApplicationRequest(dogChanges).pipe(
      tap((response:string) => {
        console.log(response);
        return response
      })
    );
  }

  private sendUpdateApplicationRequest(application: AnimalModel) {
    return this.http.patch(
      this.REST_API_SERVER + this.DOG_CTRL_MAPPING,
      application,
      {
        responseType: "text",
      }
    );
  }
}
