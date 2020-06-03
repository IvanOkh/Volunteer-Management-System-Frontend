// ANGULAR IMPORTS
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";

// CUSTOM COMPONENTS
import { VolunteerApplication } from "src/app/shared/models/volunteer-applications.model";
import { VolunteerService } from 'src/app/shared/services/new-volunteer.service';
import { VolunteerForm } from 'src/app/shared/models/volunteer-form.model';

@Component({
  selector: "app-volunteer-pending",
  templateUrl: "./volunteer-pending.component.html",
  styleUrls: ["./volunteer-pending.component.css"],
  providers: [VolunteerService]
})
export class VolunteerPendingComponent implements OnInit
{
  appList: VolunteerApplication[] = [];
  isLoading: boolean = false;

  constructor(private test: VolunteerService) {}

  ngOnInit()
  {
    // this.loadActiveApplicants();  // this one loads all currently active applicants
    this.loadPendingApplicants();     // this one loads all applicants regardless of active status
  }

  acceptApplication(volunteerID: number): void
  {
    // guard condition if the volunteerID returend by the DOM is undefiend
    if (!volunteerID) {
      console.log('ERROR: volunteer id is' + volunteerID);
      return;
    }

    this.test.getVolunteerApplication(volunteerID)
    .subscribe(
      (volunteer: VolunteerApplication) => {  // http success
        console.log(volunteer);
        if (volunteer) {  // if volunteer is found
          
          //Create new Volunteer and add to system
          const newVolunteer: VolunteerForm = new VolunteerForm(
            volunteer.id, true, "", "", volunteer.fname, volunteer.lname, volunteer.address, volunteer.city,
            volunteer.province, volunteer.postalCode, volunteer.cellPhone, volunteer.homePhone, volunteer.email, 
            volunteer.over18, volunteer.gender, volunteer.tshirtSize, volunteer.selfdescription, volunteer.emg1_fname,
            volunteer.emg1_lname, volunteer.emg1_relationship, volunteer.emg1_homePhone, volunteer.emg1_cellPhone, 
            volunteer.emg1_email, volunteer.emg2_fname, volunteer.emg2_lname, volunteer.emg2_relationship, 
            volunteer.emg2_homePhone, volunteer.emg2_cellPhone, volunteer.emg2_email, volunteer.ref1_fname,
            volunteer.ref1_lname, volunteer.ref1_cellPhone, volunteer.ref1_email, volunteer.ref2_fname, 
            volunteer.ref2_lname, volunteer.ref2_cellPhone, volunteer.ref2_email, volunteer.emailAllowed, volunteer.emailPref
            );
          this.test.addVolunteer(newVolunteer);

          //Delete application
          this.deleteApplication(volunteerID);
        } else {  // volunteer is null (happens when not found)
          console.log('Volunteer not found!')
        }
      },
      (error: any) => {  // http error
        console.log(error);
      }
    );
  }


  //NOTE TO MYSELF(albert): Create functionality for rejection note
  rejectApplication(volunteerID: number): void
  {
    // guard condition if the volunteerID returend by the DOM is undefiend
    if (!volunteerID) {
      console.log('ERROR: volunteer id is' + volunteerID);
      return;
    }

    this.test.getVolunteerApplication(volunteerID)
    .subscribe(
      (volunteer: VolunteerApplication) => {  // http success
        if (volunteer) {  // if volunteer is found
          volunteer.rejected = true;
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

  private loadPendingApplicants(): void
  {
    this.isLoading = true;
    this.test.loadApplicants()
    .subscribe(
      (applicants: VolunteerApplication[]) => {
        this.appList = [];
        applicants.forEach((applicant: VolunteerApplication) => {
          if(!applicant.rejected){
            this.appList.push(applicant);
          }
        });
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  private updateApplication(changes: VolunteerApplication): void
  {
    this.test.updateVolunteerApplication(changes)
    .subscribe(
      (status: any) => {
        this.loadPendingApplicants();   //! this line refreshes content after update.
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private deleteApplication(id: number): void{
    this.test.removeApplication(id)
    .subscribe(
      (status: any) => {
        this.loadPendingApplicants();   //! this line refreshes content after update.
      },
      (error: any) => {
        console.log(error);
      }
    )
  }




}
