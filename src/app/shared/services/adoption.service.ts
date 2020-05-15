import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AnimalModel } from "../models/animal.model";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AdoptionService {
  cats: AnimalModel[] = [];
  dogs: AnimalModel[] = [];

  element: AnimalModel;

  private REST_API_SERVER: string = "http://68.66.193.100:8080/CARS/";
  private CAT_CTRL_MAPPING: string = "cats/";
  private DOG_CTRL_MAPPING: string = "dogs/";

  constructor(private http: HttpClient) {}

  loadAllCats(): AnimalModel[] {
    console.log(this.cats);
    return this.cats;
  }
  loadAllDogs(): AnimalModel[] {
    console.log(this.dogs);
    return this.dogs;
  }

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
        })
      );
  }
}
