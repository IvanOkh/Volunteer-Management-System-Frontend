import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
} from "@angular/material";
import { NgForm } from "@angular/forms";
import { AdoptionService } from "src/app/shared/services/adoption.service";
import { DogForm } from "src/app/forms/dog-form/dog-form.model";

@Component({
  selector: "app-dog-approved",
  templateUrl: "./dog-approved.component.html",
  styleUrls: ["./dog-approved.component.css", "../../../responsive-modal-style.css"],
})
export class DogApprovedComponent implements OnInit {
  application: any;
  dogArray = [];
  isLoading: boolean = false;
  applicationID: any;
  pendingDogArray: any[];
  reason: string;

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
    // "rejected"
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
        if (pendingDog.approved == true && pendingDog.rejected == false) {
          this.pendingDogArray.push(pendingDog);
        }
        this.dataSource = new MatTableDataSource(this.pendingDogArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.application = this.dogArray[0];
        this.isLoading = false;
      });
    });
    document.body.scrollTop = 0;
  }

  //Using Angular material to apply filter for every applications
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Method to get data when a person click on a row (passing dogID)
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
  //Method to reject an application
  rejectApplication(id: number, reason: string) {
    console.log(id);
    this.adoptionService.getDogApplication(id).subscribe((dog: DogForm) => {
      dog.rejected = true;
      dog.rejectionReason = reason;
      this.reason = reason;
      dog.approved = false;
      this.adoptionService
        .updateDogApplication(dog)
        .subscribe((result: any) => {
          console.log(result);
          this.ngOnInit();
        });
    });
  }
}
