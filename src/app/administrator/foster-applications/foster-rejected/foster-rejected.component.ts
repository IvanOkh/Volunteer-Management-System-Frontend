// ANGULAR IMPORTS
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";

// CUSTOM COMPONENTS
import { FosterApplication } from "src/app/shared/models/foster-applications.model";
import { FostersService } from "src/app/shared/services/new-fosters.service";

@Component({
  selector: "app-foster-rejected",
  templateUrl: "./foster-rejected.component.html",
  styleUrls: ["./foster-rejected.component.css"],
  providers: [FostersService],
})
export class FosterRejectedComponent implements OnInit {
  appList: FosterApplication[] = [];
  isLoading: boolean = false;

  constructor(private fs: FostersService) {}

  ngOnInit() {
    this.loadRejectedApplicants();
  }

  //next two methods were added to eliminate prod error requestion to have these methods as they are defined in html. Ivan
  acceptApplication(application) {}
  rejectApplication(application) {}

  private loadRejectedApplicants(): void {
    this.isLoading = true;
    this.fs.loadRejectedApplicants().subscribe(
      (applicants: FosterApplication[]) => {
        this.appList = [];
        applicants.forEach((applicant: FosterApplication) => {
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

  private sendToPending(fosterID: number): void {
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
          foster.rejected = false;
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

  private updateApplication(changes: FosterApplication): void {
    this.fs.updateFosterApplication(changes).subscribe(
      (status: any) => {
        this.loadRejectedApplicants(); //! this line refreshes content after update.
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
