import { CatForm } from "./../../../../forms/cat-form/cat-model";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
} from "@angular/material";
import { NgForm } from "@angular/forms";
import { AdoptionService } from "src/app/shared/services/adoption.service";

@Component({
  selector: "app-cat-approved",
  templateUrl: "./cat-approved.component.html",
  styleUrls: ["./cat-approved.component.css", "../../../responsive-modal-style.css"],
})
export class CatApprovedComponent implements OnInit {
  application: any;
  catArray = [];
  pendingCatArray: any[];
  isLoading: boolean = false;
  applicationID: any;
  reason: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("form", { static: false }) form: NgForm;
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = [
    "submissionDate",
    "nameOfCat",
    "applicant",
    "email",
    "phone",
    "address",
  ];

  constructor(
    public dialog: MatDialog,
    private adoptionService: AdoptionService
  ) {}

  //Load table
  ngOnInit() {
    this.isLoading = true;
    this.adoptionService.loadCats().subscribe((cats) => {
      this.pendingCatArray = [];
      this.catArray = cats;
      this.catArray.forEach((pendingCat: CatForm) => {
        if (pendingCat.approved == true && pendingCat.rejected == false)
          this.pendingCatArray.push(pendingCat);
        this.dataSource = new MatTableDataSource(this.pendingCatArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.application = this.catArray[0];
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
    this.catArray.forEach(
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
    this.adoptionService.getCatApplication(id).subscribe((cat: CatForm) => {
      cat.rejected = true;
      cat.rejectionReason = reason;
      this.reason = reason;
      cat.approved = false;
      this.adoptionService
        .updateCatApplication(cat)
        .subscribe((result: any) => {
          console.log(result);
          this.ngOnInit();
        });
    });
  }
}
