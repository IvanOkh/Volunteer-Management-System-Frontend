import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";

import { NgForm } from "@angular/forms";
import { AnimalModel } from "../../shared/models/animal.model";
import { AnimalService } from 'src/app/shared/services/new-animal.service';

@Component({
  selector: "app-animal-management",
  templateUrl: "./animal-management.component.html",
  styleUrls: ["./animal-management.component.css"],
  providers: [AnimalService]
})
export class AnimalManagementComponent implements OnInit {
  @ViewChild("form", { static: false }) form: NgForm;
  @ViewChild("editForm", { static: false }) editForm: NgForm;

  aList: AnimalModel[] = [];
  isLoading: boolean = false;
  fetched: AnimalModel;
  fetchedLoading: boolean = false;

  constructor(public dialog: MatDialog, private as: AnimalService) {}

  ngOnInit()
  {
    this.loadAllAnimals();
  }

  viewAnimal(rowId: number)
  {
    if (!(rowId || rowId === 0)) {
      console.log('view animal failed because rowId was undefined.')
      return;
    }

    this.fetchAnimal(rowId);
  }

  onDeleteAnimal()
  {
    if(!this.fetched) {
      console.log('update attempted when fetched animal was undefined!')
      return;
    }

    this.deleteAnimal();
  }

  onAddAnimal(form: NgForm)
  {
    this.addAnimal(form.value);
  }

  editAnimal(editForm: NgForm)
  {
    if(!this.fetched) {
      console.log('update attempted when fetched animal was undefined!')
      return;
    }

    this.updateAnimal();
  }

  private addAnimal(animal: AnimalModel)
  {
    this.as.addAnimal(animal)
    .subscribe(
      () => {
        this.loadAllAnimals();
      },
      (error: any) => {
        console.log(error);
      },
    );
  }

  private deleteAnimal()
  {
    this.as.removeAnimal(this.fetched.id)
    .subscribe(
      () => {
        this.loadAllAnimals();
      },
      (error: any) => {
        console.log(error);
      },
    );
  }

  private updateAnimal()
  {
    this.as.updateAnimal(this.fetched)
    .subscribe(
      () => {
        console.log('update animals http success');
        this.loadAllAnimals();
      },
      (error: any) => {
        console.log(error);
      },
    );

  }

  private fetchAnimal(id: number)
  {
    this.fetchedLoading = true;
    this.as.getAnimal(id)
    .subscribe(
      (animal: AnimalModel) => {
        this.fetched = animal;
        this.fetchedLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.fetchedLoading = false;
      }
    );
  }

  private loadAllAnimals()
  {
    this.isLoading = true;
    this.as.loadAnimals()
    .subscribe(
      (animals: AnimalModel[]) => {
        this.aList = [];
        animals.forEach((animal: AnimalModel) => {
          this.aList.push(animal);
        });
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
