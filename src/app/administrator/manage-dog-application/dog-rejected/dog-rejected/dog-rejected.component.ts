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
  styleUrls: ["./dog-rejected.component.css", "../../../responsive-modal-style.css"],
})
export class DogRejectedComponent implements OnInit {
  dogObj: DogForm;
  application: any;
  dogArray = [];
  isLoading: boolean = false;
  pendingDogArray: any[];

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
    // "rejected",
  ];

  constructor(
    public dialog: MatDialog,
    private adoptionService: AdoptionService
  ) {}

  //Load table
  ngOnInit() {
    this.isLoading = true;
    this.adoptionService.loadDogs().subscribe((dogs) => {
      this.pendingDogArray = [];
      this.dogArray = dogs;
      this.dogArray.forEach((pendingDog: DogForm) => {
        if (pendingDog.rejected == true) this.pendingDogArray.push(pendingDog);
        this.dataSource = new MatTableDataSource(this.pendingDogArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.application = this.dogArray[0];
        this.isLoading = false;
      });
    });
    document.body.scrollTop = 0;
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
      .getDogApplication(this.applicationID)
      .subscribe((dog: DogForm) => {
        if (dog != null) {
          this.adoptionService
            .deleteApplication(this.applicationID)
            .subscribe((result: any) => {
              this.ngOnInit();
            });
        }
      });
  }

  markPendingApplication(id: number) {
    console.log(id);
    this.adoptionService.getDogApplication(id).subscribe((dog: DogForm) => {
      if (dog) {
        dog.rejected = false;
        dog.approved = false;
        this.adoptionService
          .updateDogApplication(dog)
          .subscribe((result: any) => {
            this.ngOnInit(); //re-load the table to update new information
          });
      }
    });
  }
}
