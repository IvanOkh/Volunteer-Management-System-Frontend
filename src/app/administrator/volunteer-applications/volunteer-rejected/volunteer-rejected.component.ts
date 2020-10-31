// ANGULAR IMPORTS
import {
  Component,
  OnInit,
  ApplicationInitStatus,
  ViewChild,
} from "@angular/core";

import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
} from "@angular/material";
import { NgForm } from "@angular/forms";

// CUSTOM COMPONENTS
import { VolunteerForm } from "src/app/shared/models/volunteer-form.model";
import { VolunteerApplication } from "src/app/shared/models/volunteer-applications.model";
import { VolunteerService } from "src/app/shared/services/new-volunteer.service";

@Component({
  selector: "app-volunteer-rejected",
  templateUrl: "./volunteer-rejected.component.html",
  styleUrls: ["./volunteer-rejected.component.css", "../../responsive-modal-style.css"],
  providers: [VolunteerService],
})
export class VolunteerRejectedComponent implements OnInit {
  appList: VolunteerApplication[] = [];
  isLoading: boolean = false;
  application: VolunteerApplication;
  //Mat table configuration
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("form", { static: false }) form: NgForm;

  displayedColumns: string[] = [
    "submissionDate",
    "applicant",
    "email",
    "rejectionNote",
  ];

  constructor(public dialog: MatDialog, private vs: VolunteerService) {}

  ngOnInit() {
    // this.loadActiveApplicants();  // this one loads all currently active applicants
    //this.loadArchive(); // this one loads all rejected/archived applicants
    this.loadRejectedApplicants(); // this one loads all applicants regardless of active status
    document.body.scrollTop = 0;

    // console.log(this.appList);
  }

  //next two methods were added to eliminate prod error requestion to have these methods as they are defined in html. Ivan
  acceptApplication(application) {}
  rejectApplication(application) {}

  private loadRejectedApplicants(): void {
    this.isLoading = true;
    this.vs.loadRejectedApplicants().subscribe(
      (applicants: VolunteerApplication[]) => {
        this.appList = [];
        applicants.forEach((applicant: VolunteerApplication) => {
          this.appList.push(applicant);
          this.application = this.appList[0];
        });
        this.isLoading = false;
      },
      (error: any) => {
        // console.log(error);
        this.isLoading = false;
      }
    );
  }

  /**
   * Changes the 'rejected' attribute of the volunteer application from 'false' to 'true'.
   * @param fosterID
   */
  public sendToPending(volunteerID: number): void {
    // guard condition if the volunteerID returend by the DOM is undefiend
    if (!volunteerID) {
      console.log("ERROR: volunteer id is" + volunteerID);
      return;
    }

    this.vs.getVolunteerApplication(volunteerID).subscribe(
      (volunteer: VolunteerApplication) => {
        if (volunteer) {
          volunteer.rejected = false;
          this.updateApplication(volunteer);
        } else {
          console.log("Volunteer not found!");
        }
      },
      (error: any) => {
        // console.log(error);
      }
    );
  }

  /**
   * Takes the passed volunteer application model and requests an update to the backend with the attributes provided.
   * @param changes
   */
  private updateApplication(changes: VolunteerApplication): void {
    this.vs.updateVolunteerApplication(changes).subscribe(
      (status: any) => {
        this.loadRejectedApplicants();
      },
      (error: any) => {
        // console.log(error);
      }
    );
  }

  /**
   * Permanently deletes the volunteer application with the passed id.
   * @param id
   */
  public deleteApplication(id: number): void {
    this.vs.removeApplication(id).subscribe(
      (status: any) => {
        this.loadRejectedApplicants();
      },
      (error: any) => {
        // console.log(error);
      }
    );
  }

  public getRecord(id: number) {
    this.isLoading = true;
    this.appList.forEach(
      (element) => {
        if (element.id === id) {
          this.application = element;
          this.isLoading = false;
        }
      },
      (error: any) => {
        // console.log(error);
        this.isLoading = false;
      }
    );
  }
}
