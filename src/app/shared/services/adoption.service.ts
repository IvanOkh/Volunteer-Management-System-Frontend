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

  private REST_API_SERVER: string = "http://68.66.193.100:8080/CARS/applications/";
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
          const dogArray: DogForm[] =[];
          if (dog != null) {
            dog.forEach((dog: DogForm) => {
              dogArray.push(dog);
            });
          }
          return dogArray;
        })
      );
  }

  public getApplication(dogID: number): Observable<DogForm> {
    return this.sendGetApplicationRequest(dogID).pipe(
      map((responseData: DogForm[]) => {
        const application: DogForm = responseData[0];
        return application;
      })
    );
  }
  private sendGetApplicationRequest(id: number) {
    return this.http.get<DogForm[]>(
      this.REST_API_SERVER + this.DOG_CTRL_MAPPING + id
    );
  }
  // sendGetApplicationRequest(dogID: number) {
  //   return this.http.get<FosterApplication[]>(
  //     this.REST_API_SERVER + this.DOG_CTRL_MAPPING + dogID
  //   );
  // }

  updateDogApplication(dogChanges: DogForm): Observable<String> {
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
}
