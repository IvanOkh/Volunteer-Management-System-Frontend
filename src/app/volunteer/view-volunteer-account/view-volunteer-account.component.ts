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
  id: number;
  fname: string;
  lname: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  cellPhone: string;
  homePhone: string;
  email: string;

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
  tempfoster: FosterModel = null;
  tempvolunteer: VolunteerForm = null;

  constructor(
    private fs: FostersService,
    private vs: VolunteerService,
    private a: AuthService
  ) {}

  session: BehaviorSubject<User> = this.a.user;

  ngOnInit() {
    if (this.fetchUser(Number(this.session.value.id)) === true) {
      this.fetchUser(Number(this.session.value.id));
    }
    document.body.scrollTop = 0;
  }

  onSubmit(myForm: NgForm) {
    this.updateUser();
  }

  //Adding foster to volunteer - IN PROGRESS
  private fetchUser(id: number): boolean {
    this.isLoading = true;
    this.vs.getVolunteer(id).subscribe(
      (vol: VolunteerForm) => {
        if (vol != null) {
          this.tempvolunteer = vol;
          // console.log(this.tempvolunteer);
          this.user = vol;
          // console.log(this.user);

          this.isLoading = false;
          return true;
        }
      },
      (error: any) => {
        // this.fetchUser(Number(this.session.value.id));
        // console.log(error);
        // this.isLoading = false;
      }
    );

    this.fs.getFoster(id).subscribe(
      (fos: FosterModel) => {
        if (fos != null) {
          this.tempfoster = fos;
          // console.log(this.tempfoster);
          this.user = fos;
          // console.log(this.user);
          this.isLoading = false;
          return true;
        }
      },
      (error: any) => {
        // this.fetchUser(Number(this.session.value.id));
        // console.log(error);
        // this.isLoading = false;
      }
    );
    return false;
  }

  private updateUser() {
    //if user is volunteer
    if (this.tempvolunteer != null) {
      this.tempvolunteer.fname = this.user.fname;
      this.tempvolunteer.lname = this.user.lname;
      this.tempvolunteer.address = this.user.address;
      this.tempvolunteer.city = this.user.city;
      this.tempvolunteer.province = this.user.province;
      this.tempvolunteer.postalCode = this.user.postalCode;
      this.tempvolunteer.homePhone = this.user.homePhone;
      this.tempvolunteer.cellPhone = this.user.cellPhone;
      this.tempvolunteer.email = this.user.email;
      this.tempvolunteer.tshirtSize = this.user.tshirtSize;
      this.tempvolunteer.description = this.user.description;
      this.vs.updateVolunteer(this.tempvolunteer).subscribe(
        () => {
          this.fetchUser(Number(this.user.id));
        },
        (error: any) => {
          // console.log(error);
        }
      );
    }
    //user is foster
    else {
      this.tempfoster.fname = this.user.fname;
      this.tempfoster.lname = this.user.lname;
      this.tempfoster.address = this.user.address;
      this.tempfoster.city = this.user.city;
      this.tempfoster.province = this.user.province;
      this.tempfoster.postalCode = this.user.postalCode;
      this.tempfoster.homePhone = this.user.homePhone;
      this.tempfoster.cellPhone = this.user.cellPhone;
      this.tempfoster.email = this.user.email;
      this.fs.updateFoster(this.tempfoster).subscribe(
        () => {
          this.fetchUser(Number(this.user.id));
        },
        (error: any) => {
          // console.log(error);
        }
      );
    }
  }
}
