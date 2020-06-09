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

@Component({
  selector: "app-manage-cat-application",
  templateUrl: "./manage-cat-application.component.html",
  styleUrls: ["./manage-cat-application.component.css"],
  providers: [AdoptionService],
})
export class ManageCatApplicationComponent implements OnInit {
  catObj: AnimalModel;
  application: any;
  catArray = [];
  isLoading: boolean = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("form", { static: false }) form: NgForm;
  dataSource = new MatTableDataSource(this.adoptionService.loadAllCats());

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
      this.dataSource = new MatTableDataSource(cats);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.catArray = cats;
      this.application = this.catArray[0];
      this.isLoading = false;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getRecord(id: number) {
    this.isLoading = true;
    this.catArray.forEach(
      (element) => {
        if (element.id === id) {
          this.application = element;
          this.isLoading = false;
        }
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
