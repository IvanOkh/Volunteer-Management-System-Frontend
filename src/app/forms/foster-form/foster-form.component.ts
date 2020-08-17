import { Component, Input, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FosterApplication } from "src/app/shared/models/foster-applications.model";
import { HttpClient } from "@angular/common/http";
import { FamilyMember } from "./family-members/familymember.model";
import { FormsService } from "src/app/shared/services/forms.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-foster-form",
  templateUrl: "./foster-form.component.html",
  styleUrls: ["./foster-form.component.css"],
})
export class FosterFormComponent {
  onScroll() {
    document.body.scrollTop = 0;
  }

  /***FIELDS/PARAMETERS***/
  choices = ["Yes", "No"];
  residencesRadio = [
    "House",
    "Duplex",
    "Apartment",
    "Mobile Home",
    "Farm/Acreage",
    "Basement Suite",
  ];
  ownRentRadio = ["Own", "Rent"];
  ifDogChoices = [
    "Primarily Indoor",
    "Primarily Outdoor",
    "Combination",
    "No Dogs",
  ];
  ifCatChoices = ["Indoor", "Outdoor", "Combination", "No Cats"];
  fosterTypesRadio = [
    "Puppy",
    "AdultDog",
    "Kitten",
    "AdultCat",
    "MedicalCare",
    "Quarantine",
  ];

  // Form Values
  @ViewChild("fl", { static: false })
  public familyList: FamilyMember[];

  @ViewChild("ownRent", { static: false }) ownRent: string;

  /***FUNCTIONS***/
  constructor(
    private http: HttpClient,
    private FS: FormsService,
    private router: Router
  ) {}

  //If form has submitted
  validForm: boolean = false;
  addingSuccess: boolean = false;
  fosterTypesProperObject: string = "";

  stringifyFamilyList(familyList: FamilyMember[]) {
    // console.log(familyList);
    let stringified = "";

    familyList.forEach((member) => {
      stringified += member.fname + "," + member.lname + "," + member.age + ";";
    });

    stringified = stringified.slice(0, -1);

    return stringified;
  }

  onOkClick() {
    this.onScroll();
    this.router.navigate(["/login"]);
  }

  /**
   * Refreshes the volunteer application form removing all inputs that existed before the page was refreshed.
   */
  reset() {
    window.location.reload();
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.validForm = false;
      return;
    }
    let formatForm: FosterApplication;

    if (f.value.Puppy === true) {
      this.fosterTypesProperObject = this.fosterTypesProperObject + "true,";
    } else {
      this.fosterTypesProperObject = this.fosterTypesProperObject + "false,";
    }

    if (f.value.AdultDog === true) {
      this.fosterTypesProperObject = this.fosterTypesProperObject + "true,";
    } else {
      this.fosterTypesProperObject = this.fosterTypesProperObject + "false,";
    }

    if (f.value.Kitten === true)
      this.fosterTypesProperObject = this.fosterTypesProperObject + "true,";
    else this.fosterTypesProperObject = this.fosterTypesProperObject + "false,";

    if (f.value.AdultCat === true)
      this.fosterTypesProperObject = this.fosterTypesProperObject + "true,";
    else this.fosterTypesProperObject = this.fosterTypesProperObject + "false,";

    if (f.value.MedicalCare === true)
      this.fosterTypesProperObject = this.fosterTypesProperObject + "true,";
    else this.fosterTypesProperObject = this.fosterTypesProperObject + "false,";

    if (f.value.Quarantine === true)
      this.fosterTypesProperObject = this.fosterTypesProperObject + "true";
    else this.fosterTypesProperObject = this.fosterTypesProperObject + "false";

    formatForm = new FosterApplication(
      f.value.fname as string,
      f.value.lname as string,
      f.value.street as string,
      f.value.city as string,
      f.value.prov as string,
      f.value.postal as string,
      f.value.hphone as string,
      f.value.cphone as string,
      !!(f.value.over18 as string).match("Yes"),
      f.value.email as string,
      f.value.residenceType as string,
      !!(f.value.rentOrOwn as string).match("Own"),
      f.value.llQuestion as string,
      this.checkForChildren(f.value.familyList.familyMembers as FamilyMember[]),
      this.stringifyFamilyList(
        f.value.familyList.familyMembers as FamilyMember[]
      ),
      !!(f.value.hasAllergies as string).match("Yes"),
      !!(f.value.safeHandling as string).match("Yes"),
      !!(f.value.hasPets as string).match("Yes"),
      f.value.petDetails as string,
      f.value.petMedical as string,
      f.value.dogEnvironment as string,
      f.value.catEnvironment as string,
      !!(f.value.familyAgrees as string).match("Yes"),
      // f.value.fosterTypesRadio as string, - this code should not be used on checkboxes
      // as they only return booleans for individual ids
      // (f.value.Puppy
      //   ? this.fosterTypesProperObject.concat("true,")
      //   : this.fosterTypesProperObject.concat("false,"),
      // f.value.AdultDog
      //   ? this.fosterTypesProperObject.concat("true,")
      //   : this.fosterTypesProperObject.concat("false,"),
      // f.value.Kitten
      //   ? this.fosterTypesProperObject.concat("true,")
      //   : this.fosterTypesProperObject.concat("false,"),
      // f.value.AdultCat
      //   ? this.fosterTypesProperObject.concat("true,")
      //   : this.fosterTypesProperObject.concat("false,"),
      // f.value.MedicalCare
      //   ? this.fosterTypesProperObject.concat("true,")
      //   : this.fosterTypesProperObject.concat("false,"),
      // f.value.Quarantine
      //   ? this.fosterTypesProperObject.concat("true,")
      //   : this.fosterTypesProperObject.concat("false,")),
      // "Puppy,Adult Dog,Kitten,Adult Cat,Medical Care,Quarantine",
      this.fosterTypesProperObject,
      f.value.fosterRequest as string,
      !!(f.value.keepFosterCatInside as string).match("Yes"),
      !!(f.value.hasFence as string).match("Yes"),
      f.value.fenceHeight as number,
      !!(f.value.canHouseTrain as string).match("Yes"),
      !!(f.value.familiarCrateTrain as string).match("Yes"),
      !!(f.value.crateWilling as string).match("Yes"),
      f.value.rescueHistory as string,
      !!(f.value.vetWilling as string).match("Yes"),
      !!(f.value.hasVehicle as string).match("Yes"),
      !!(f.value.medicateWilling as string).match("Yes"),
      f.value.hoursAlone as number,
      f.value.ref1Fname as string,
      f.value.ref1Lname as string,
      f.value.ref1Phone as string,
      f.value.ref1Email as string,
      f.value.ref2Fname as string,
      f.value.ref2Lname as string,
      f.value.ref2Phone as string,
      f.value.ref2Email as string,
      f.value.ref3Fname as string,
      f.value.ref3Lname as string,
      f.value.ref3Phone as string,
      f.value.ref3Email as string,
      !!(f.value.agreeHomeVisit as string).match("Yes")
    );

    // this.onCreatePost(formatForm);
    // console.log(formatForm);
    this.sendTheForm(formatForm);

    if (f.valid) {
      this.validForm = true;
      return;
    }
  }

  private sendTheForm(fosForm: FosterApplication): void {
    this.FS.sendFosterForm(fosForm).subscribe(
      (responseData) => {
        // success

        if (responseData === "Error adding application.") {
          this.validForm = false;
        }
        console.log(responseData);
      },
      () => {
        // error
        // console.log("Events add HTTP response failed.");
      }
    );
  }

  private checkForChildren(familyMembers: FamilyMember[]) {
    return false;
  }
}
