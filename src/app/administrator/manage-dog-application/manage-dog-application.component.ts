import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
} from "@angular/material";
import { NgForm } from "@angular/forms";
import { AdoptionService } from "src/app/shared/services/adoption.service";
import { AnimalModel } from "src/app/shared/models/animal.model";
import { DogForm } from 'src/app/forms/dog-form/dog-form.model';

@Component({
  selector: "app-manage-dog-application",
  templateUrl: "./manage-dog-application.component.html",
  styleUrls: ["./manage-dog-application.component.css"],
  providers: [AdoptionService],
})
export class ManageDogApplicationComponent implements OnInit {
  dogObj: AnimalModel;
  application: any;
  dogArray: DogForm[] = [];
  isLoading: boolean = false;
  applicationID: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("form", { static: false }) form: NgForm;
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = [
    "submissionDate",
    "nameOfDog",
    "applicant",
    "email",
    "phone",
    "address",
  ];

  constructor(
    public dialog: MatDialog,
    private adoptionService: AdoptionService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.adoptionService.loadDogs().subscribe((dogs) => {
      this.dataSource = new MatTableDataSource(dogs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dogArray = dogs;
      this.application = this.dogArray[0];
      this.isLoading = false;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getRecord(id: number) {
    this.isLoading = true;
    this.dogArray.forEach(
      (element) => {
        if (element.id === id) {
          this.isLoading = false;
          this.application = element;
          this.applicationID = id;
        }
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  rejectApplication(id: number) {
    let i:number;
    for (i = 0; i < this.dogArray.length; i++) {
      console.log(this.dogArray);
      if ( this.dogArray[i].id == id) {
        this.dogArray[i].rejected = true;
        this.adoptionService.updateDogApplication(this.dogArray[i]);
        console.log(this.dogArray[i].id)
      }
    }
  }
}
