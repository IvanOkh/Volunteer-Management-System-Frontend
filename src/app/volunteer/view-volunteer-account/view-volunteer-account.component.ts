import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { VolunteerService } from "src/app/shared/services/new-volunteer.service";
import { VolunteerForm } from "src/app/shared/models/volunteer-form.model";
import { BehaviorSubject } from "rxjs";
import { User } from "src/app/auth/user.model";
import { AuthService } from "src/app/auth/auth.service";
import { FostersService } from "src/app/shared/services/new-fosters.service";
import { FosterModel } from "src/app/shared/models/foster.model";

//interface to store either volunteer or foster attributes
export interface logUser {
  fname: string;
  lname: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  cellPhone: string;
  homePhone: string;
  email: string;
  dateOfBirth?: string;
  tshirtSize?: string;
  description?: string;
}

@Component({
  selector: "app-view-volunteer-account",
  templateUrl: "./view-volunteer-account.component.html",
  styleUrls: ["./view-volunteer-account.component.css"],
  providers: [VolunteerService],
})
export class ViewVolunteerAccountComponent implements OnInit {
  @ViewChild("form", { static: false }) form: NgForm;
  user: logUser = null;
  isLoading: boolean = false;

  constructor(
    private fs: FostersService,
    private vs: VolunteerService,
    private a: AuthService
  ) {}

  ngOnInit() {
    const session: BehaviorSubject<User> = this.a.user;
    this.fetchUser(Number(session.value.id));
  }

  // onSubmit(myForm: NgForm) {
  //   this.updateUser();
  // }

  //Adding foster to volunteer - IN PROGRESS
  private fetchUser(id: number) {
    this.isLoading = true;
    this.vs.getVolunteer(id).subscribe(
      (vol: VolunteerForm) => {
        this.user = vol;
        this.isLoading = false;
      },
      (error: any) => {
        // console.log(error);
        // this.isLoading = false;
      }
    );

    //working

    this.fs.getFoster(id).subscribe(
      (fos: FosterModel) => {
        this.user = fos;
        this.isLoading = false;
      },
      (error: any) => {
        // console.log(error);
        this.isLoading = false;
      }
    );
  }

  // private updateUser() {
  //   this.vs.updateVolunteer(this.user).subscribe(
  //     () => {
  //       this.fetchUser(this.user.id);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
