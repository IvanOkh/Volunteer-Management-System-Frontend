// ANGULAR IMPORTS
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";

// FOSTER COMPONENTS
import { FosterApplication } from "src/app/shared/models/foster-applications.model";
import { FosterModel } from "src/app/shared/models/foster.model";
import { FostersService } from "src/app/shared/services/new-fosters.service";
import { FosterRejectedComponent } from "../foster-rejected/foster-rejected.component";

@Component({
  selector: "app-foster-pending",
  templateUrl: "./foster-pending.component.html",
  styleUrls: ["./foster-pending.component.css"],
  providers: [FostersService],
})
export class FosterPendingComponent implements OnInit {
  appList: FosterApplication[] = [];
  isLoading: boolean = false;

  constructor(private fs: FostersService) {}

  ngOnInit() {
    this.loadPendingApplicants();
  }

  /**
   * Turns foster application into an official foster in the system. Takes attributes that were provided in the
   * application model as attributes for the new FosterModel and DELETES the foster application.
   * @param fostr
   */
  acceptApplication(foster: FosterApplication): void {
    // guard condition if the foster.id returend by the DOM is undefiend
    if (!foster.id) {
      console.log("ERROR: foster id is" + foster.id);
      return;
    }
    
    this.fs.addFoster(foster).subscribe(
      () => {
        //success
        this.loadPendingApplicants();
      },
      (error: any) => {
        //error
        console.log("Add foster HTTP response failed.");
      }
    );
  }

  /**
   * Changes the 'rejected' attribute of the foster application from 'true' to 'false'. Will also
   * take a string for 'rejectedReason' and update the foster application model.
   *
   * @param fosterID
   * @param reason
   */
  rejectApplication(fosterID: number, reason: string): void {
    // guard condition if the fosterID returend by the DOM is undefiend
    if (!fosterID) {
      console.log("ERROR: foster id is" + fosterID);
      return;
    }

    this.fs.getFosterApplication(fosterID).subscribe(
      (foster: FosterApplication) => {
        // http success
        if (foster) {
          // if foster is found
          foster.rejected = true;
          foster.rejectionReason = reason;
          this.updateApplication(foster);
        } else {
          // Foster is null (happens when not found)
          console.log("Foster not found!");
        }
      },
      (error: any) => {
        // http error
        console.log(error);
      }
    );
  }

  /**
   * Loads all Foster applications into appList that has the rejection attribute equal to 'false'.
   */
  private loadPendingApplicants(): void {
    this.isLoading = true;
    this.fs.loadApplicants().subscribe(
      (applicants: FosterApplication[]) => {
        this.appList = [];
        applicants.forEach((applicant: FosterApplication) => {
          if (!applicant.rejected) {
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

  /**
   * Takes the passed foster application model and requests an update to the backend with the attributes provided.
   * @param changes
   */
  private updateApplication(changes: FosterApplication): void {
    this.fs.updateFosterApplication(changes).subscribe(
      (status: any) => {
        this.loadPendingApplicants();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  /**
   * Permanently deletes the foster application with the passed id.
   * @param id
   */
  private deleteApplication(id: number): void {
    this.fs.removeApplication(id).subscribe(
      (status: any) => {
        this.loadPendingApplicants();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
