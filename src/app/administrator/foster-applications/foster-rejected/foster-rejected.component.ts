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
  styleUrls: ["./foster-rejected.component.css"],
  providers: [FostersService],
})
export class FosterRejectedComponent implements OnInit {
  appList: FosterApplication[] = [];
  isLoading: boolean = false;
  application: FosterApplication;

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
    
  }

  //next two methods were added to eliminate prod error requestion to have these methods as they are defined in html. Ivan
  acceptApplication(application) {}
  rejectApplication(application) {}

  /**
   * Loads all Foster applications into appList that has the rejection attribute equal to 'true'.
   */
  private loadRejectedApplicants(): void {
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
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  /**
   * Changes the 'rejected' attribute of the foster application from 'false' to 'true'.
   * @param fosterID
   */
  private sendToPending(fosterID: number): void {
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
        console.log(error);
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
        this.loadRejectedApplicants();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  /**
   * Permanently deletes the foster application with the passed id. (UNTESTED, AWAITING MORE APPLICATIONS)
   * @param id
   */
  private deleteApplication(id: number): void {
    this.fs.removeApplication(id).subscribe(
      (status: any) => {
        this.loadRejectedApplicants();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private getRecord(id: number) {
    this.isLoading = true;
    this.appList.forEach(
      (element) => {
        if (element.id === id) {
          this.application = element;
          this.isLoading = false;
        }
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
