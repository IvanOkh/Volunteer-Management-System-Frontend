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
import { FosterApplication } from "src/app/shared/models/foster-applications.model";
import { FostersService } from "src/app/shared/services/new-fosters.service";

@Component({
  selector: "app-foster-rejected",
  templateUrl: "./foster-rejected.component.html",
  styleUrls: ["./foster-rejected.component.css", "../../responsive-modal-style.css"],
  providers: [FostersService],
})
export class FosterRejectedComponent implements OnInit {
  appList: FosterApplication[] = [];
  isLoading: boolean = false;
  application: FosterApplication;

  // Extra variables to delimit fosterAnimalType attribute
  ftPuppy: boolean = false;
  ftAdultDog: boolean = false;
  ftKitten: boolean = false;
  ftAdultCat: boolean = false;
  ftMedicalCare: boolean = false;
  ftQuarantine: boolean = false;

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

  constructor(public dialog: MatDialog, private fs: FostersService) {}

  ngOnInit() {
    this.loadRejectedApplicants();
    document.body.scrollTop = 0;
  }

  //next two methods were added to eliminate prod error requestion to have these methods as they are defined in html. Ivan
  acceptApplication(application) {}
  rejectApplication(application) {}

  /**
   * Loads all Foster applications into appList that has the rejection attribute equal to 'true'.
   */
  loadRejectedApplicants(): void {
    this.isLoading = true;
    this.fs.loadRejectedApplicants().subscribe(
      (applicants: FosterApplication[]) => {
        this.appList = [];
        applicants.forEach((applicant: FosterApplication) => {
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
   * Changes the 'rejected' attribute of the foster application from 'false' to 'true'.
   * @param fosterID
   */
  sendToPending(fosterID: number): void {
    // guard condition if the fosterID returend by the DOM is undefiend
    if (!fosterID) {
      console.log("ERROR: foster id is" + fosterID);
      return;
    }

    this.fs.getFosterApplication(fosterID).subscribe(
      (foster: FosterApplication) => {
        if (foster) {
          foster.rejected = false;
          this.updateApplication(foster);
        } else {
          console.log("Foster not found!");
        }
      },
      (error: any) => {
        // console.log(error);
      }
    );
  }

  /**
   * Takes the passed foster application model and requests an update to the backend with the attributes provided.
   * @param changes
   */
  updateApplication(changes: FosterApplication): void {
    this.fs.updateFosterApplication(changes).subscribe(
      (status: any) => {
        this.loadRejectedApplicants();
      },
      (error: any) => {
        // console.log(error);
      }
    );
  }

  /**
   * Permanently deletes the foster application with the passed id. (UNTESTED, AWAITING MORE APPLICATIONS)
   * @param id
   */
  deleteApplication(id: number): void {
    this.fs.removeApplication(id).subscribe(
      (status: any) => {
        this.loadRejectedApplicants();
      },
      (error: any) => {
        // console.log(error);
      }
    );
  }

  getRecord(id: number) {
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
