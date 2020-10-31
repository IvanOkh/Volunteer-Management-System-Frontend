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
  styleUrls: ["./foster-pending.component.css", "../../responsive-modal-style.css"],
  providers: [FostersService],
})
export class FosterPendingComponent implements OnInit {
  appList: FosterApplication[] = [];
  isLoading: boolean = false;
  fetched: FosterApplication;

  // Extra variables to delimit fosterAnimalType attribute
  ftPuppy: boolean = false;
  ftAdultDog: boolean = false;
  ftKitten: boolean = false;
  ftAdultCat: boolean = false;
  ftMedicalCare: boolean = false;
  ftQuarantine: boolean = false;

  constructor(private fs: FostersService) {}

  ngOnInit() {
    this.loadPendingApplicants();
    document.body.scrollTop = 0;
  }

  /**
   * Converts ft booleans into Yes/No
   * @param id
   */
  viewFoster(fosterID: number) {
    if (!(fosterID || fosterID === 0)) {
      console.log("ERROR: failed because fosterID: " + fosterID);
      return;
    }
    this.fetchFoster(fosterID);
  }

  /**
   * Turns foster application into an official foster in the system. Takes attributes that were provided in the
   * application model as attributes for the new FosterModel and DELETES the foster application.
   * @param foster
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

  private fetchFoster(fosterID: number): void {
    this.fs.getFosterApplication(fosterID).subscribe(
      (foster: FosterApplication) => {
        this.fetched = foster;
        console.log(this.fetched.fosterAnimalType);
        this.delimitFosterType(this.fetched.fosterAnimalType);
      },
      (error: any) => {
        // console.log(error);
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
            // console.log(applicant);
          }
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
   * Takes the passed foster application model and requests an update to the backend with the attributes provided.
   * @param changes
   */
  private updateApplication(changes: FosterApplication): void {
    this.fs.updateFosterApplication(changes).subscribe(
      (status: any) => {
        this.loadPendingApplicants();
      },
      (error: any) => {
        // console.log(error);
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
        // console.log(error);
      }
    );
  }

  //Takes FosterType attribute type of string and changes ft attributes to display onto Foster modal.
  private delimitFosterType(fosterType: string) {
    let splitted = fosterType.split(",", 6);

    if (splitted[0].match("true")) {
      this.ftPuppy = true;
    } else {
      this.ftPuppy = false;
    }

    if (splitted[1].match("true")) {
      this.ftAdultDog = true;
    } else {
      this.ftAdultDog = false;
    }

    if (splitted[2].match("true")) {
      this.ftKitten = true;
    } else {
      this.ftKitten = false;
    }

    if (splitted[3].match("true")) {
      this.ftAdultCat = true;
    } else {
      this.ftAdultCat = false;
    }

    if (splitted[4].match("true")) {
      this.ftMedicalCare = true;
    } else {
      this.ftMedicalCare = false;
    }

    if (splitted[5].match("true")) {
      this.ftQuarantine = true;
    } else {
      this.ftQuarantine = false;
    }
  }
}
