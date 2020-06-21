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
import { DogForm } from "src/app/forms/dog-form/dog-form.model";

@Component({
  selector: "app-dog-rejected",
  templateUrl: "./dog-rejected.component.html",
  styleUrls: ["./dog-rejected.component.css"],
})
export class DogRejectedComponent implements OnInit {
  dogObj: DogForm;
  application: any;
  dogArray = [];
  isLoading: boolean = false;

  rejectedDog = [];
  applicationID: number;

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
    "rejectedReason",
    "rejected",
  ];

  constructor(
    public dialog: MatDialog,
    private adoptionService: AdoptionService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.dogArray = [];
    this.adoptionService.loadDogs().subscribe((rejectedDogApp) => {
      rejectedDogApp.forEach((dogs: DogForm) => {
        if (dogs.rejected) {
          this.dogArray.push(dogs);
          this.dataSource = new MatTableDataSource(this.dogArray);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.isLoading = false;
        }
      });
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

  deleteApplication() {
    this.adoptionService
      .getApplication(this.applicationID)
      .subscribe((dog: DogForm) => {
        if (dog != null) {
          this.adoptionService
            .deleteApplication(this.applicationID)
            .subscribe((result: any) => {
              // this.loa
              this.ngOnInit();
            });
        }
      });
  }
}
