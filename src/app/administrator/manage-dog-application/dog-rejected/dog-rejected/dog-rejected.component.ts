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
  selector: "app-dog-rejected",
  templateUrl: "./dog-rejected.component.html",
  styleUrls: ["./dog-rejected.component.css"],
})
export class DogRejectedComponent implements OnInit {
  dogObj: AnimalModel;
  application: any;
  dogArray = [];
  isLoading: boolean = false;
  appList: DogForm[] = [];

  rejectedDog = [];
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
    this.appList = [];
    this.adoptionService.loadDogs().subscribe((rejectedDogApp) => {
      rejectedDogApp.forEach((element: DogForm) => {
        if (element.rejected) {
          this.appList.push(element);
        }
      });
      this.dataSource = new MatTableDataSource(this.appList);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dogArray = this.appList;
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
        }
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
