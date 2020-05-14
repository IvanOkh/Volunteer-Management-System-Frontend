// ANGULAR IMPORTS
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";

// CUSTOM COMPONENTS
import { VolunteerForm } from "src/app/shared/models/volunteer-form.model";
import { VolunteerService } from 'src/app/shared/services/new-volunteer.service';


@Component({
  selector: "app-volunteer-pending",
  templateUrl: "./volunteer-pending.component.html",
  styleUrls: ["./volunteer-pending.component.css"],
  providers: [VolunteerService]
})
export class VolunteerPendingComponent implements OnInit
{
  appList: VolunteerForm[] = [];
  isLoading: boolean = false;

  constructor(private test: VolunteerService) {}

  ngOnInit()
  {
    // this.loadActiveApplicants();  // this one loads all currently active applicants
    this.loadAllApplicants();     // this one loads all applicants regardless of active status
  }

  acceptApplication(volunteerID: number): void
  {
    // guard condition if the volunteerID returend by the DOM is undefiend
    if (!volunteerID) {
      console.log('ERROR: volunteer id is' + volunteerID);
      return;
    }

    this.test.getVolunteerForm(volunteerID)
    .subscribe(
      (volunteer: VolunteerForm) => {  // http success
        console.log(volunteer);
        if (volunteer) {  // if volunteer is found
          volunteer.approved = true;
          volunteer.active = true;
          this.updateApplication(volunteer);
        } else {  // volunteer is null (happens when not found)
          console.log('Volunteer not found!')
        }
      },
      (error: any) => {  // http error
        console.log(error);
      }
    );
  }

  rejectApplication(volunteerID: number): void
  {
    // guard condition if the volunteerID returend by the DOM is undefiend
    if (!volunteerID) {
      console.log('ERROR: volunteer id is' + volunteerID);
      return;
    }

    this.test.getVolunteerForm(volunteerID)
    .subscribe(
      (volunteer: VolunteerForm) => {  // http success
        if (volunteer) {  // if volunteer is found
          volunteer.approved = false;
          volunteer.active = false;
          this.updateApplication(volunteer);
        } else {  // volunteer is null (happens when not found)
          console.log('Volunteer not found!')
        }
      },
      (error: any) => {  // http error
        console.log(error);
      }
    );
  }

  private loadActiveApplicants(): void
  {
    this.isLoading = true;
    this.test.loadApplicants(true)  // true means the returned applicants will be active
    .subscribe(
      (applicants: VolunteerForm[]) => {  // success
        this.appList = [];
        applicants.forEach((applicant: VolunteerForm) => {
          this.appList.push(applicant);
        });
        this.isLoading = false;
      },
      (error: any) => {  // error
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  private loadAllApplicants(): void
  {
    this.isLoading = true;
    this.test.loadAllApplicants()
    .subscribe(
      (applicants: VolunteerForm[]) => {
        this.appList = [];
        applicants.forEach((applicant: VolunteerForm) => {
          this.appList.push(applicant);
        });
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  private updateApplication(changes: VolunteerForm): void
  {
    this.test.updateVolunteer(changes)
    .subscribe(
      (status: any) => {
        this.loadAllApplicants();   //! this line refreshes content after update.
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


}
