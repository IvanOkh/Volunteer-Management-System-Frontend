import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AnimalModel } from '../models/animal.model';

/******************************************************************************/
@Injectable({
  providedIn: "root"
})
export class AnimalService
{
  private REST_API_SERVER = "http://199.195.116.225:8080/CARS/";
  private CTRL_MAPPING = "animals/";

  constructor(private http: HttpClient) {}

  /**
   * Sends a request to the backend for an array containing all animals.
   * Returns the list of animals in a subscribe-able object.
   * @returns {Observable<AnimalModel[]>}
   */
  public loadAnimals(): Observable<AnimalModel[]>
  {
    return this.sendGetAllLoadRequest()
      .pipe(
        map((responseData: AnimalModel[]) => {
          const animalArray: AnimalModel[] = [];
          responseData.forEach((animal: AnimalModel) => {
            if (animal.id) {
              animalArray.push(animal);
            }
          });
          return animalArray;
        })
      );
  }

  /**
   * Sends a request to get a single animal matching the input id.
   * Returns a subscribe-able object containing the found animal.
   * @param animalID
   */
  public getAnimal(animalID: number): Observable<AnimalModel>
  {
    return this.sendGetAnimalRequest(animalID)
      .pipe(
        map((responseData: AnimalModel[]) => {
          const animal: AnimalModel = responseData[0];
          return animal;
        })
      );
  }

  /**
   * Sends a request to add a new animal to the backend database. The
   * input is the new animal to persist to the backend. Returns a
   * subscibe-able object containing the server success/error response.
   * @param newAnimal
   */
  public addAnimal(newAnimal: AnimalModel): Observable<string>
  {
    return this.sendPostRequest(newAnimal)
      .pipe(
        map((responseData) => {
          return responseData;
        })
      );
  }

  /**
   * Sends a request to update an animal. The input is an animal
   * with the same ID as the one we want to update in the backend.
   * Returns a subscibe-able object containing the server success/error
   * response.
   * @param changes
   */
  public updateAnimal(changes: AnimalModel): Observable<string>
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
   * backend to delete an animal with a matching ID. Returns a subscribe-
   * able object containing the server success/error response.
   * @param deleteID
   */
  public removeAnimal(deleteID: number): Observable<string>
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
    return this.http.get<AnimalModel[]>(
      this.REST_API_SERVER + this.CTRL_MAPPING
    );
  }

  /**
   * Http get one animal from server.
   */
  private sendGetAnimalRequest(id: number)
  {
    return this.http.get<AnimalModel[]>(
      this.REST_API_SERVER + this.CTRL_MAPPING + id
    );
  }

  /**
   * HTTP post new animal to server
   */
  private sendPostRequest(animal: AnimalModel)
  {
    return this.http.post(
      this.REST_API_SERVER + this.CTRL_MAPPING,
      animal,
      {responseType: 'text'}
    );
  }

  /**
   * HTTP delete animal from server
   */
  private sendDeleteRequest(id: number)
  {
    return this.http.delete(
      this.REST_API_SERVER + this.CTRL_MAPPING + id,
      { responseType: 'text' }
    );
  }

  /**
   * HTTP patch animal to update server
   */
  private sendUpdateRequest(animal: AnimalModel)
  {
    return this.http.patch(
      this.REST_API_SERVER + this.CTRL_MAPPING,
      animal,
      { responseType: 'text' }
    );
  }

}
