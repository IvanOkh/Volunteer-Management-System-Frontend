import { AnimalModel } from './models/animal.model';
import { ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class AnimalService {
    animals: AnimalModel[] = [];
    private REST_API_SERVER = "http://68.66.193.100:8080/CARS/";
    private CTRL_MAPPING = "animals/";

    constructor(private http: HttpClient) { }

    @ViewChild("form", { static: false }) form: NgForm;

    // load animal from DB
    //load animal data
    loadAllAnimals(): AnimalModel[] {
        console.log(this.animals);
        return this.animals;
    }

    loadAnimals(): boolean {
        this.sendGetLoadRequest().subscribe(response => {
            response.body.forEach(a => this.animals.push(a));
            console.log('this:' + response.body);
        });
        console.log(this.animals);
        return true;
    }

    clearAnimal() {
        this.animals = [];
    }

    //remove an animal
    removeAnimal(animalId: number) {
        let found: AnimalModel = this.findAnimal(animalId);
        if (found != null) {
            this.sendDeleteRequest(found.id).subscribe((responseType) => {
                console.log(responseType);
            });
            let animal = this.indexOfAnimal(animalId);
            this.animals.splice(animal, 1);
            console.log(found.name + " Removed");
            return true
        }
        else {
            return false;
        }

    }
    // FIND THE INDEX OF ANIMAL
    indexOfAnimal(id: number): number {
        return this.animals.indexOf(this.findAnimal(id));
    }

    //add animal
    addAnimal(newAnimal: AnimalModel): boolean {
        if (newAnimal != null) {
            this.sendPostAddRequest(newAnimal).subscribe((responseType) => {
                this.sendGetLoadRequest();
                for (var i = 0; i <= this.animals.length; i++) {
                    let id = this.animals[this.animals.length - 1].id;
                    newAnimal.id = id + 1;
                }
                this.animals.push(newAnimal);
                console.log(this.animals);
            })
        }
        return false;
    }
    // UPDATE ANY CHANGES FROM EDIT POP UP
    updateAnimal(changes: AnimalModel) {
        console.log('find animal works');
        console.log('changes' + changes.id);
        if (this.findAnimal(changes.id) != null) {
            console.log('service:' + changes.id);
            this.sendUpdateRequest(changes).subscribe((responseData) => {
                console.log(responseData);
            });
            let index = this.animals.indexOf(this.findAnimal(changes.id));
            this.animals[index] = changes;
            console.log('NEW name: ' + changes.name);
            return true;
        } else {
            return false;
        }
    }
    //FIND ANIMAL BY ITS ID
    findAnimal(animalId: number): AnimalModel {
        console.log(this.animals.find(a => a.id == animalId));
        return this.animals.find(a => a.id == animalId);
    }


    // HTTP SEND UPDATE REQUEST TO BACKEND
    sendUpdateRequest(animal: AnimalModel) {
        return this.http.patch(
            this.REST_API_SERVER + this.CTRL_MAPPING,
            animal,
            { responseType: "text" })
    }
    // HTTP SEND DELETE REQUEST AN ANIMAL
    public sendDeleteRequest(animalId: number) {
        return this.http.delete(
            this.REST_API_SERVER + this.CTRL_MAPPING + animalId,
            { responseType: "text" });
    }
    // HTTP SEND TO GET DATA FROM BACKEND
    sendGetLoadRequest() {
        return this.http.get<any>(
            this.REST_API_SERVER + this.CTRL_MAPPING,
            { observe: "response" });
    }

    /**
     * HTTP post new event to backend
     */
    public sendPostAddRequest(animal: AnimalModel) {
        return this.http.post(
            this.REST_API_SERVER + this.CTRL_MAPPING,
            animal,
            { responseType: "text" });
    }
}
