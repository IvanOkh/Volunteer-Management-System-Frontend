import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { VolunteerService } from 'src/app/shared/services/new-volunteer.service';
import { VolunteerForm } from 'src/app/shared/models/volunteer-form.model';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/auth/user.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-view-volunteer-account',
  templateUrl: './view-volunteer-account.component.html',
  styleUrls: ['./view-volunteer-account.component.css'],
  providers: [VolunteerService]

})
export class ViewVolunteerAccountComponent implements OnInit
{
  @ViewChild("form", { static: false }) form: NgForm;
  user: VolunteerForm;
  isLoading: boolean = false;

  constructor(private vs: VolunteerService, private a: AuthService) { }

  ngOnInit()
  {
    const session: BehaviorSubject<User> = this.a.user;
    this.fetchUser(Number(session.value.id));

  }

  onSubmit(myForm: NgForm)
  {
    this.updateUser();

  }

  private fetchUser(id: number)
  {
    this.isLoading = true;
    this.vs.getVolunteerForm(id)
    .subscribe(
      (vol: VolunteerForm) => {
        this.user = vol;
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  private updateUser()
  {
    this.vs.updateVolunteer(this.user)
    .subscribe(
      () => {
        this.fetchUser(this.user.id);
      },
      (error: any) => {
        console.log(error);
      },
    );
  }
}
