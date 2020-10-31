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
import { CatForm } from "src/app/forms/cat-form/cat-model";

@Component({
  selector: "app-manage-cat-application",
  templateUrl: "./manage-cat-application.component.html",
  styleUrls: ["./manage-cat-application.component.css", "../responsive-modal-style.css"],
  providers: [AdoptionService],
})
export class ManageCatApplicationComponent implements OnInit {
  catObj: AnimalModel;
  application: any;
  catArray = [];
  isLoading: boolean = false;
  applicationID: number;
  pendingCatArray: any[];
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

  ngOnInit() {
    this.isLoading = true;
    this.adoptionService.loadCats().subscribe((cats) => {
      this.pendingCatArray = [];
      this.catArray = cats;
      this.catArray.forEach((pendingCat: CatForm) => {
        if (pendingCat.approved == false && pendingCat.rejected == false)
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
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
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
      if (cat) {
        cat.rejected = true;
        cat.rejectionReason = reason;
        this.reason = reason;
        this.adoptionService
          .updateCatApplication(cat)
          .subscribe((result: any) => {
            this.ngOnInit(); //re-load the table to update new information
          });
      }
    });
  }
  acceptApplication(id: number) {
    console.log(id);
    this.adoptionService.getCatApplication(id).subscribe((cat: CatForm) => {
      cat.approved = true;
      cat.rejected = false;
      console.log(cat);
      this.adoptionService
        .updateCatApplication(cat)
        .subscribe((result: any) => {
          console.log(result);
          this.ngOnInit(); //re-load the table to update new information
        });
    });
  }
}
