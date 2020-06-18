// ANGULAR IMPORTS
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";

// FOSTER COMPONENTS
import { FosterApplication } from "src/app/shared/models/foster-applications.model";
import { FosterModel } from "src/app/shared/models/foster.model";
import { FostersService } from "src/app/shared/services/new-fosters.service";

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
   * @param fosterID
   */
  acceptApplication(fosterID: number): void {
    // guard condition if the fosterID returend by the DOM is undefiend
    if (!fosterID) {
      console.log("ERROR: volunteer id is" + fosterID);
      return;
    }

     this.fs.getFosterApplication(fosterID).subscribe(
      (foster: FosterApplication) => {
         if (foster) {

          //Create new Volunteer and add to system
          // const newFoster: FosterModel = new FosterModel(
          //   foster.id,
          //   true,
          //   "Notes: ",
          //   0,
          //   foster.fname,
          //   foster.lname,
          //   foster.address,
          //   foster.city,
          //   foster.province,
          //   foster.postalCode,
          //   foster.homePhone,
          //   foster.cellPhone,
          //   foster.over18,
          //   foster.email,
          //   foster.typeOfResidence,
          //   foster.own,
          //   foster.landlordContact,
          //   foster.childrenInHome,
          //   foster.household,
          //   foster.allergies,
          //   foster.householdHandling,
          //   foster.anyPets,
          //   foster.petDetails,
          //   foster.spayedAndNeutured,
          //   foster.dogHabit,
          //   foster.catHabit,
          //   foster.familyAgreeable,
          //   foster.fosterAnimalType,
          //   foster.preferredAnimal,
          //   foster.keepCatsIndoor,
          //   foster.fencedYard,
          //   foster.fenceHeight,
          //   foster.willingToTrain,
          //   foster.familiarWithCrate,
          //   foster.useDogCrate,
          //   foster.pastRescueExperience,
          //   foster.takeAnimalToVet,
          //   foster.haveVehicle,
          //   foster.medicateAnimal,
          //   foster.hoursLeftAlone,
          //   foster.ref1_fname,
          //   foster.ref1_lname,
          //   foster.ref1_cellPhone,
          //   foster.ref1_email,
          //   foster.ref2_fname,
          //   foster.ref2_lname,
          //   foster.ref2_cellPhone,
          //   foster.ref2_email,
          //   foster.ref3_fname,
          //   foster.ref3_lname,
          //   foster.ref3_cellPhone,
          //   foster.ref3_email,
          //   foster.allowHomeVisit
          // );
          this.fs.addFoster(fosterID);
        } else {
          // foster is null (happens when not found)
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
