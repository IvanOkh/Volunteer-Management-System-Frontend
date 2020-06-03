// ANGULAR IMPORTS
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";

// CUSTOM COMPONENTS
import { VolunteerForm } from "src/app/shared/models/volunteer-form.model";
import { VolunteerApplication } from "src/app/shared/models/volunteer-applications.model";
import { VolunteerService } from 'src/app/shared/services/new-volunteer.service';

@Component({
  selector: 'app-volunteer-rejected',
  templateUrl: './volunteer-rejected.component.html',
  styleUrls: ['./volunteer-rejected.component.css'],
  providers: [VolunteerService]
})
export class VolunteerRejectedComponent implements OnInit {

  appList: VolunteerApplication[] = [];
  isLoading: boolean = false;

  constructor(private test: VolunteerService) {}

  ngOnInit()
  {
    // this.loadActiveApplicants();  // this one loads all currently active applicants
    //this.loadArchive(); // this one loads all rejected/archived applicants
    this.loadRejectedApplicants();     // this one loads all applicants regardless of active status

    
    console.log(this.appList);
  }

  private loadRejectedApplicants(): void
  {
    this.isLoading = true;
    this.test.loadRejectedApplicants()
    .subscribe(
      (applicants: VolunteerApplication[]) => {
        this.appList = [];
        applicants.forEach((applicant: VolunteerApplication) => {
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

}
