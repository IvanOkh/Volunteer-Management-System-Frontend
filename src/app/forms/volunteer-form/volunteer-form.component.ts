import { Component, OnInit, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { FormsService } from "src/app/shared/services/forms.service";
import { Router } from "@angular/router";
import { VolunteerApplication } from "src/app/shared/models/volunteer-applications.model";

@Component({
  selector: "app-volunteer-form",
  templateUrl: "./volunteer-form.component.html",
  styleUrls: ["./volunteer-form.component.css"],
})
export class VolunteerFormComponent {
  newsLetters: string = "";
  weekLetterCheckbox: string = "";
  agreementCheckbox: string = "";
  defaultdobMonth: string = "";
  defaultdobDay: string = "";
  defaultdobYear: string = "";
  defaultGender: string = "choose";
  defaultShirtSize: string = "choose";
  defaultec1Relationship: string = "choose";
  defaultec2Relationship: string = "choose";
  defaultProvince = "choose";

  nlVisible: boolean = false;

  constructor(
    private http: HttpClient,
    private FS: FormsService,
    private router: Router
  ) {}

  onScroll() {
    document.body.scrollTop = 0;
  }

  //To check if form has been submitted successfully without any errors within values
  validForm: boolean = false;
  addingSuccess: boolean = false;
  onSubmit(form: NgForm) {
    //Validation check
    if (!form.valid) {
      console.log("Invalid Form");
      this.validForm = false;
    } else {
      //newsletter check
      if (form.value.weekLetter === true) {
        this.weekLetterCheckbox = this.weekLetterCheckbox.concat(", true");
      } else {
        this.weekLetterCheckbox = this.weekLetterCheckbox.concat(", false");
      }

      //newsletters
      if (form.value.eNewsLetters === true) {
        this.newsLetters = this.newsLetters.concat(", true");
      } else {
        this.newsLetters = this.newsLetters.concat(", false");
      }

      if (form.value.recAppeals === true) {
        this.newsLetters = this.newsLetters.concat(", true");
      } else {
        this.newsLetters = this.newsLetters.concat(", false");
      }

      if (form.value.schedReminders === true) {
        this.newsLetters = this.newsLetters.concat(", true");
      } else {
        this.newsLetters = this.newsLetters.concat(", false");
      }

      //agreement
      if (form.value.agreementCheck === true) {
        this.agreementCheckbox = this.agreementCheckbox.concat(", true");
      } else {
        this.agreementCheckbox = this.agreementCheckbox.concat(", false");
      }

      //province
      if (form.value.province === "choose") {
        form.control.setErrors({ invalid: true });
      }

      // console.log(form.value);

      const volunteerForm = new VolunteerApplication(
        form.value.firstname as string, // fname
        form.value.lastname as string, // lname
        form.value.street1 as string, // address
        form.value.city as string, // city
        form.value.province as string, // province
        form.value.postalCode as string, // postalCode
        form.value.cellPhone as string, // cellPhone
        form.value.homePhone as string, // homePhone
        form.value.email as string, // email
        form.value.over18 as boolean, // over18
        form.value.gender as string, // gender
        form.value.shirtSize as string, // tshirtSize
        form.value.paragraph as string, // selfdescription
        form.value.ec1Fname as string, // emg1_fname
        form.value.ec1Lname as string, // emg1_lname
        form.value.ec1Relationship as string, // emg1_relationship
        form.value.ec1Hphone as string, // emg1_homePhone
        form.value.ec1Cphone as string, // emg1_cellPhone
        form.value.ec1Email as string, // emg1_email
        form.value.ec2Fname as string, // emg2_fname
        form.value.ec2Lname as string, // emg2_lname
        form.value.ec2Relationship as string, // emg2_relationship
        form.value.ec2Hphone as string, // emg2_homePhone
        form.value.ec2Cphone as string, // emg2_cellPhone
        form.value.ec2Email as string, // emg2_email
        form.value.r1Fname as string, // ref1_fname
        form.value.r1Lname as string, // ref1_lname
        form.value.r1Cphone as string, // ref1_cellPhone
        form.value.r1Email as string, // ref1_email
        form.value.r2Fname as string, // ref2_fname
        form.value.r2Lname as string, // ref2_lname
        form.value.r2Cphone as string, // ref2_cellPhone
        form.value.r2Email as string, // ref2_email
        false, // emailAllowed
        "false,false,false" as string // emailPref [FALSE,FALSE,FALSE,FALSE] [electric newsletters, recruitment appeals, schedule reminders]
      );

      // console.log(volunteerForm);

      // this.onCreatePost(volunteerForm);
      this.sendTheForm(volunteerForm);
      this.validForm = true;
    }
  }

  /**
   * Refreshes the volunteer application form removing all inputs that existed before the page was refreshed.
   */
  reset() {
    window.location.reload();
  }

  /**
   * Redirects user back to home page
   */
  onOkClick() {
    this.onScroll();
    this.router.navigate(["/login"]);
  }

  private sendTheForm(volForm: VolunteerApplication): void {
    this.FS.sendVolunteerForm(volForm).subscribe(
      (responseData) => {
        // success
        // console.log("Events add HTTP response succeeded.");
        // console.log(responseData);

        if (responseData === "Error adding application.") {
          this.validForm = false;
        }
      },
      () => {
        // error
        console.log("Events add HTTP response failed.");
      }
    );
  }

  nlToggle() {
    if (this.nlVisible === true) {
      this.nlVisible = false;
    } else {
      this.nlVisible = true;
    }
  }
}
