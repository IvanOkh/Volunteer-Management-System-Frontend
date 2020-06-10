// ANGULAR IMPORTS
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";

// CUSTOM COMPONENTS
import { FosterApplication } from "src/app/shared/models/foster-applications.model";
import { FostersService } from 'src/app/shared/services/new-fosters.service';

@Component({
  selector: 'app-foster-rejected',
  templateUrl: './foster-rejected.component.html',
  styleUrls: ['./foster-rejected.component.css'],
  providers: [FostersService]
})
export class FosterRejectedComponent implements OnInit {

  appList: FosterApplication[] = [];
  isLoading: boolean = false;

  constructor(private fs: FostersService) { }

  ngOnInit() {
    this.loadRejectedApplicants(); 
  }

  private loadRejectedApplicants(): void
  {
    this.isLoading = true;
    this.fs.loadRejectedApplicants()
    .subscribe(
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


}
