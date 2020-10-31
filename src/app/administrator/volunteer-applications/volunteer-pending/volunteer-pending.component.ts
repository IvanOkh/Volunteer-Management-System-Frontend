// ANGULAR IMPORTS
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";

// CUSTOM COMPONENTS
import { VolunteerApplication } from "src/app/shared/models/volunteer-applications.model";
import { VolunteerService } from "src/app/shared/services/new-volunteer.service";
import { VolunteerForm } from "src/app/shared/models/volunteer-form.model";

@Component({
  selector: "app-volunteer-pending",
  templateUrl: "./volunteer-pending.component.html",
  styleUrls: ["./volunteer-pending.component.css", "../../responsive-modal-style.css"],
  providers: [VolunteerService],
})
export class VolunteerPendingComponent implements OnInit {
  appList: VolunteerApplication[] = [];
  isLoading: boolean = false;

  constructor(private vs: VolunteerService) {}

  ngOnInit() {
    // this.loadActiveApplicants();  // this one loads all currently active applicants
    this.loadPendingApplicants(); // this one loads all applicants regardless of active status
    document.body.scrollTop = 0;
  }

  acceptApplication(volunteer: VolunteerApplication): void {
    // guard condition if the volunteer.id returend by the DOM is undefiend
    if (!volunteer.id) {
      console.log("ERROR: volunteer id is" + volunteer.id);
      return;
    }
    this.vs.addVolunteer(volunteer).subscribe(
      () => {
        //success
        this.loadPendingApplicants();
      },
      (error: any) => {
        //error
        // console.log(error);
      }
    );
  }

  rejectApplication(volunteerID: number, reason: string): void {
    // guard condition if the volunteerID returend by the DOM is undefiend
    if (!volunteerID) {
      console.log("ERROR: volunteer id is" + volunteerID);
      return;
    }

    this.vs.getVolunteerApplication(volunteerID).subscribe(
      (volunteer: VolunteerApplication) => {
        // http success
        if (volunteer) {
          // if volunteer is found
          volunteer.rejected = true;
          volunteer.rejectionReason = reason;
          this.updateApplication(volunteer);
        } else {
          // volunteer is null (happens when not found)
          console.log("Volunteer not found!");
        }
      },
      (error: any) => {
        // http error
        // console.log(error);
      }
    );
  }

  private loadPendingApplicants(): void {
    this.isLoading = true;
    this.vs.loadApplicants().subscribe(
      (applicants: VolunteerApplication[]) => {
        this.appList = [];
        applicants.forEach((applicant: VolunteerApplication) => {
          if (!applicant.rejected) {
            this.appList.push(applicant);
          }
        });
        // console.log(this.appList);
        this.isLoading = false;
      },
      (error: any) => {
        // console.log(error);
        this.isLoading = false;
      }
    );
  }

  private updateApplication(changes: VolunteerApplication): void {
    this.vs.updateVolunteerApplication(changes).subscribe(
      (status: any) => {
        this.loadPendingApplicants(); //! this line refreshes content after update.
      },
      (error: any) => {
        // console.log(error);
      }
    );
  }

  private deleteApplication(id: number): void {
    this.vs.removeApplication(id).subscribe(
      (status: any) => {
        this.loadPendingApplicants(); //! this line refreshes content after update.
      },
      (error: any) => {
        // console.log(error);
      }
    );
  }
}
