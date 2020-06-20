import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AnimalModel } from "../models/animal.model";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { FosterApplication } from "../models/foster-applications.model";
import { CatForm } from 'src/app/forms/cat-form/cat-model';
import { DogForm } from 'src/app/forms/dog-form/dog-form.model';

@Injectable({
  providedIn: "root",
})
export class AdoptionService {
  cats: CatForm[] = [];
  dogs: DogForm[] = [];

  rejectedDog: DogForm[] = [];
  dog2: DogForm[] = [];
  element: DogForm;

  private REST_API_SERVER: string = "http://68.66.193.100:8080/CARS/";
  private CAT_CTRL_MAPPING: string = "applications/cats";
  private DOG_CTRL_MAPPING: string = "applications/dogs";

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
        tap((dog) => {
          this.dogs = dog;
          // console.log(this.dogs);
        })
      );
  }

  // updateDogApplication(dogChanges: DogForm): Observable<String> {
  //   debugger
  //   return this.sendUpdateApplicationRequest(dogChanges).pipe(
  //     tap((response:string) => {
  //       console.log(response);
  //       return response
  //     })
  //   );
  // }

  // private sendUpdateApplicationRequest(application: DogForm) {
  //   debugger
  //   return this.http.patch(
  //     this.REST_API_SERVER + this.DOG_CTRL_MAPPING,
  //     application,
  //     {
  //       responseType: "text",
  //     }
  //   );
  // }

  updateDogApplication(dogChanges: DogForm): Observable<String> {
    // if (dogChanges.rejected == false) {
    //   dogChanges.rejected = true;
    // }
    // debugger
    return this.http
    .patch(this.REST_API_SERVER + this.DOG_CTRL_MAPPING, dogChanges, {
      responseType: "text",
    })
    .pipe(
      tap((response: string) => {
        return response;
      })
    );
  }
}
