// ANGULAR IMPORTS
import { Component, OnInit, ViewChild } from "@angular/core";

// CUSTOM COMPONENTS
import { VolunteerForm } from "src/app/shared/models/volunteer-form.model";
import { VolunteerService } from "src/app/shared/services/new-volunteer.service";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
} from "@angular/material";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-view-volunteer",
  templateUrl: "./view-volunteer.component.html",
  styleUrls: ["./view-volunteer.component.css"],
  providers: [VolunteerService],
})
export class ViewVolunteerComponent implements OnInit {
  vList: VolunteerForm[] = []; // holds data from server to display
  isLoading: boolean = false; // overall data loading state
  fetched: VolunteerForm; // holds data about selected volunteer
  fetchLoading: boolean = false; // selected volunteer data loading state

  volunteers = [];
  eachVolunteer: any;
  activation: boolean;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("form", { static: false }) form: NgForm;
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = [
    "fname",
    "lname",
    "email",
    "over18",
    "gender",
    "active",
  ];

  constructor(public dialog: MatDialog, private test: VolunteerService) {}

  // THIS IS BOOTSTRAP TABLE VERSION
  // ngOnInit()
  // {
  //   this.loadAllVolunteers();
  // }

  // THIS IS MAT TABLE VERSION
  ngOnInit() {
    this.isLoading = true;
    this.test.loadVolunteers().subscribe((volunteer) => {
      // console.log(volunteer);
      this.volunteers = volunteer;
      this.dataSource = new MatTableDataSource(this.volunteers);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.eachVolunteer = this.volunteers[0];

      this.isLoading = false;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  viewVolunteer(rowId: number) {
    if (!(rowId || rowId === 0)) {
      console.log("viewVolunteer failed because id: " + rowId);
      return;
    }

    this.fetchVolunteer(rowId);
  }

  activeVolunteer() {
    if (this.fetched.active) this.fetched.active = false;
    else this.fetched.active = true;
    this.updateVolunteer(this.fetched);
    this.ngOnInit();
  }

  onDeleteVolunteer(rowId: number) {
    if (!(rowId || rowId === 0)) {
      console.log("ERROR: cannot delete because rowID: " + rowId);
      return;
    }

    this.deleteVolunteer(rowId);
  }

  editVolunteer(form: NgForm) {
    if (!this.fetched) {
      console.log("ERROR: Edit failed because fetched is: ");
      console.log(this.fetched);
      return;
    }

    this.updateVolunteer(this.fetched);
  }

  private deleteVolunteer(volID: number): void {
    this.test.removeVolunteer(volID).subscribe(
      () => {
        this.loadAllVolunteers();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private updateVolunteer(changes: VolunteerForm): void {
    this.test.updateVolunteer(changes).subscribe(
      () => {
        this.loadAllVolunteers();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private loadAllVolunteers(): void {
    this.isLoading = true;
    this.test.loadVolunteers().subscribe(
      (volunteers: VolunteerForm[]) => {
        this.vList = [];
        volunteers.forEach((volunteer: VolunteerForm) => {
          this.vList.push(volunteer);
        });
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  private fetchVolunteer(volID: number): void {
    this.fetchLoading = true;
    this.test.getVolunteer(volID).subscribe(
      (volunteer: VolunteerForm) => {
        this.fetched = volunteer;
        this.fetchLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.fetchLoading = false;
      }
    );
  }
}
