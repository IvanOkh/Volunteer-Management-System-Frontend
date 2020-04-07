// ANGULAR IMPORTS
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

// CUSTOM COMPONENTS
import { FosterModel } from "src/app/shared/models/foster.model";
import { FostersService } from 'src/app/shared/services/new-fosters.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: "app-view-admin-profile",
  templateUrl: "./view-admin-profile.component.html",
  styleUrls: ["./view-admin-profile.component.css"],
  providers: [FostersService]
})
export class ViewAdminProfileComponent implements OnInit
{
  @ViewChild("form", { static: false }) form: NgForm;

  isLoading: boolean = false;
  user: FosterModel;

  constructor(private fs: FostersService, private a: AuthService) {}

  ngOnInit()
  {
    const session: BehaviorSubject<User> = this.a.user;
    this.fetchUser(Number(session.value.id));
  }

  onSubmit()
  {
    this.updateUser();
  }

  private fetchUser(id: number)
  {
    this.isLoading = true;
    this.fs.getFoster(id)
    .subscribe(
      (foster: FosterModel) => {
        this.user = foster;
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
    this.fs.updateFoster(this.user)
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
