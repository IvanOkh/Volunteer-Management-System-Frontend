import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Directive,
  ElementRef,
  HostListener,
} from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { BaseForm } from "../form-base";
import { FormService } from "../../cat-form/services/form.service";
import { CatForm } from "../cat-model";
import { invalid } from "@angular/compiler/src/render3/view/util";
import { FormsService } from "src/app/shared/services/forms.service";
import { Router } from "@angular/router";

export type SubFormName =
  | "basicInfo"
  | "familyLifestyle"
  | "yourHome"
  | "currentPreviousPet"
  | "newPetInfo"
  | "physicalCharacter"
  | "references"
  | "catTable"
  | "catTable2";

@Component({
  selector: "app-form-cat",
  templateUrl: "./form-layout.component.html",
  styleUrls: ["../../cat-form/cat-form-style.css"],
})
export class FormLayoutComponent implements OnInit {
  onScroll() {
    document.body.scrollTop = 0;
  }

  parentForm: FormGroup;
  catForm: CatForm;

  id: number = 0;
  submissionDate: string = "";
  rejected: boolean = false;
  rejectionReason: string = "";
  approved: boolean = false;

  //variables for living places validation
  numberOfPetCheck: any;
  sizeWeightCheck: any;
  breedCheck: any;

  petRestrictions: string;
  sizeWeightRestrictions: string;
  breedRestriction: string;
  restrictions: string;

  indoorCheck: any;
  combinationCheck: any;
  oneRoomCheck: any;
  condoCheck: any;
  barnCheck: any;
  outdoorCheck: any;
  freeCheck: any;
  outdoorCatPlaceCheck: any;
  garrageCheck: any;

  catHome: any;

  indoorValue: string;
  combinationValue: string;
  oneRoomValue: string;
  condoValue: string;
  barnValue: string;
  outdoorValue: string;
  freeValue: string;
  outdoorCatPlaceValue: string;
  garrageValue: string;

  friendlyCat: string;
  playfulCat: string;
  afraidCat: string;
  aggressiveCat: string;
  notSureCat: string;
  catAttitude: string;
  otherPets: string;
  friendlyCatCheck: any;
  playfulCatCheck: any;
  afraidCatCheck: any;
  aggressiveCatCheck: any;
  notSureCatCheck: any;
  catsAttitude: any;

  constructor(
    private readonly fb: FormBuilder,
    private readonly formService: FormService,
    private FS: FormsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.parentForm = this.fb.group({
      basicInfo: null,
      familyLifestyle: null,
      yourHome: null,
      currentPreviousPet: null,
      newPetInfo: null,
      physicalCharacter: null,
      references: null,
      catTable: null,
    });
  }

  /**
   * Function to navigate the user back to home page (used for back button)
   */
  onOkClick() {
    this.onScroll();
    this.router.navigate(["/public/home"]);
  }

  public onSubmit() {
    this.numberOfPetCheck = this.parentForm
      .get("yourHome")
      .get("numberOfPetRestrict").value;
    this.sizeWeightCheck = this.parentForm
      .get("yourHome")
      .get("sizeWeightRestrict").value;
    this.breedCheck = this.parentForm
      .get("yourHome")
      .get("breedRestrict").value;

    this.indoorCheck = this.parentForm
      .get("yourHome")
      .get("ExclusivelyIndoorCatPlace").value;
    this.combinationCheck = this.parentForm
      .get("yourHome")
      .get("CombinationCatPlace").value;
    this.oneRoomCheck = this.parentForm
      .get("yourHome")
      .get("OneRoomCatPlace").value;
    this.condoCheck = this.parentForm
      .get("yourHome")
      .get("CondoCatPlace").value;
    this.barnCheck = this.parentForm.get("yourHome").get("BarnCatPlace").value;
    this.outdoorCheck = this.parentForm
      .get("yourHome")
      .get("ExclusivelyOutdoorCatPlace").value;
    this.freeCheck = this.parentForm.get("yourHome").get("FreeCatPlace").value;
    this.outdoorCatPlaceCheck = this.parentForm
      .get("yourHome")
      .get("OutdoorCatPlace").value;
    this.garrageCheck = this.parentForm
      .get("yourHome")
      .get("GarageCatPlace").value;

    if (this.indoorCheck === true) {
      this.indoorValue = "true";
    }
    if (this.indoorCheck === "" || this.indoorCheck == false) {
      this.indoorValue = "false";
    }
    if (this.combinationCheck === true) {
      this.combinationValue = "true";
    }
    if (this.combinationCheck === "" || this.combinationCheck == false) {
      this.combinationValue = "false";
    }
    if (this.oneRoomCheck === true) {
      this.oneRoomValue = "true";
    }
    if (this.oneRoomCheck === "") {
      this.oneRoomValue = "false";
    }
    if (this.condoCheck === true) {
      this.condoValue = "true";
    }
    if (this.condoCheck === "") {
      this.condoValue = "false";
    }
    if (this.barnCheck === true) {
      this.barnValue = "true";
    }
    if (this.barnCheck === "") {
      this.barnValue = "false";
    }
    if (this.outdoorCheck === true) {
      this.outdoorValue = "true";
    }
    if (this.outdoorCheck === "") {
      this.outdoorValue = "false";
    }
    if (this.freeCheck === true) {
      this.freeValue = "true";
    }
    if (this.freeCheck === "") {
      this.freeValue = "false";
    }
    if (this.outdoorCatPlaceCheck === true) {
      this.outdoorCatPlaceValue = "true";
    }
    if (this.outdoorCatPlaceCheck === "") {
      this.outdoorCatPlaceValue = "false";
    }
    if (this.garrageCheck === true) {
      this.garrageValue = "true";
    }
    if (this.garrageCheck === "") {
      this.garrageValue = "false";
    }

    this.catHome =
      this.indoorValue +
      "," +
      this.combinationValue +
      "," +
      this.oneRoomValue +
      "," +
      this.condoValue +
      "," +
      this.barnValue +
      "," +
      this.outdoorValue +
      "," +
      this.freeValue +
      "," +
      this.outdoorCatPlaceValue +
      "," +
      this.garrageValue;

    if (this.numberOfPetCheck === true) {
      this.petRestrictions = "true";
    } else {
      this.petRestrictions = "false";
    }
    if (this.sizeWeightCheck === true) {
      this.sizeWeightRestrictions = "true";
    } else {
      this.sizeWeightRestrictions = "false";
    }
    if (this.breedCheck === true) {
      this.breedRestriction = "true";
    } else {
      this.breedRestriction = "false";
    }

    this.restrictions =
      this.petRestrictions +
      "," +
      this.sizeWeightRestrictions +
      "," +
      this.breedRestriction;

    //Current/pre pet
    this.friendlyCatCheck = this.parentForm
      .get("currentPreviousPet")
      .get("FriendlyCat").value;
    this.playfulCatCheck = this.parentForm
      .get("currentPreviousPet")
      .get("PlayfulCat").value;
    this.afraidCatCheck = this.parentForm
      .get("currentPreviousPet")
      .get("AfraidCat").value;
    this.aggressiveCatCheck = this.parentForm
      .get("currentPreviousPet")
      .get("AggressiveCat").value;
    this.notSureCatCheck = this.parentForm
      .get("currentPreviousPet")
      .get("NotSureCat").value;

    if (this.friendlyCatCheck === true) {
      this.friendlyCat = "true";
    }
    if (this.friendlyCatCheck === "") {
      this.friendlyCat = "false";
    }
    if (this.playfulCatCheck === true) {
      this.playfulCat = "true";
    }
    if (this.playfulCatCheck === "") {
      this.playfulCat = "false";
    }
    if (this.afraidCatCheck === true) {
      this.afraidCat = "true";
    }
    if (this.afraidCatCheck === "") {
      this.afraidCat = "false";
    }
    if (this.aggressiveCatCheck === true) {
      this.aggressiveCat = "true";
    }
    if (this.aggressiveCatCheck === "") {
      this.aggressiveCat = "false";
    }
    if (this.notSureCatCheck === true) {
      this.notSureCat = "true";
    }
    if (this.notSureCatCheck === "") {
      this.notSureCat = "false";
    }

    this.catAttitude =
      this.friendlyCat +
      "," +
      this.playfulCat +
      "," +
      this.afraidCat +
      "," +
      this.aggressiveCat +
      "," +
      this.notSureCat;

    if (this.parentForm.get("basicInfo").invalid) {
      this.formService.notifyRunValidate();
    }
    if (this.parentForm.get("familyLifestyle").invalid) {
      this.formService.notifyRunValidate();
    }
    if (this.parentForm.get("currentPreviousPet").invalid) {
      this.formService.notifyRunValidate();
    }
    if (this.parentForm.get("newPetInfo").invalid) {
      this.formService.notifyRunValidate();
    }
    if (this.parentForm.get("physicalCharacter").invalid) {
      this.formService.notifyRunValidate();
    }
    if (this.parentForm.get("references").invalid) {
      this.formService.notifyRunValidate();
    }
    if (this.parentForm.get("catTable").invalid) {
      this.formService.notifyRunValidate();
    }
    if (this.parentForm.get("catTable2").invalid) {
      this.formService.notifyRunValidate();
    } else {
      this.catForm = new CatForm(
        this.id,
        this.submissionDate,
        this.approved,
        this.rejected,
        this.rejectionReason,
        this.parentForm.get("basicInfo").get("catName").value,
        this.parentForm.get("basicInfo").get("fname").value,
        this.parentForm.get("basicInfo").get("lname").value,
        this.parentForm.get("basicInfo").get("address").value,
        this.parentForm.get("basicInfo").get("city").value,
        this.parentForm.get("basicInfo").get("province").value,
        this.parentForm.get("basicInfo").get("postalCode").value,

        this.parentForm.get("basicInfo").get("homephone").value,
        this.parentForm.get("basicInfo").get("cellphone").value,
        this.parentForm.get("basicInfo").get("email").value,
        this.parentForm.get("basicInfo").get("age").value,

        //family and lifestyle
        this.parentForm.get("familyLifestyle").get("personcatisfor").value,
        this.parentForm.get("familyLifestyle").get("householdagreement").value,
        this.parentForm.get("familyLifestyle").get("membersintroduced").value,
        this.parentForm.get("familyLifestyle").get("catallergies").value,
        this.parentForm.get("familyLifestyle").get("howmanyadults").value,
        this.parentForm.get("familyLifestyle").get("howmanychild").value,
        this.parentForm.get("familyLifestyle").get("childrenages").value,
        this.parentForm.get("familyLifestyle").get("childrenhandling").value,
        this.parentForm.get("familyLifestyle").get("childrenvisit").value,
        this.parentForm.get("familyLifestyle").get("visitingfrequency").value,
        this.parentForm.get("familyLifestyle").get("childrenprepared").value,
        this.parentForm.get("familyLifestyle").get("familybusy").value,
        this.parentForm.get("familyLifestyle").get("activefamily").value,
        this.parentForm.get("familyLifestyle").get("scheduleregularity").value,
        this.parentForm.get("familyLifestyle").get("familypersonality").value,
        this.parentForm.get("familyLifestyle").get("plans").value,

        //Your home
        this.parentForm.get("yourHome").get("typeofresidence").value,
        this.parentForm.get("yourHome").get("own").value,
        this.parentForm.get("yourHome").get("landlordcontact").value,
        this.parentForm.get("yourHome").get("catsallowed").value,
        this.restrictions,
        this.parentForm.get("yourHome").get("outdoorareas").value,
        this.parentForm.get("yourHome").get("busystreet").value,
        this.catHome,
        this.parentForm.get("yourHome").get("livingsituationchanges").value,

        //current/previous pet
        this.parentForm.get("currentPreviousPet").get("anycats").value,
        this.parentForm.get("currentPreviousPet").get("catsinfo").value,
        this.catAttitude,
        this.parentForm.get("currentPreviousPet").get("otherpet").value,
        this.parentForm.get("currentPreviousPet").get("otherpetinfo").value,
        this.parentForm.get("currentPreviousPet").get("numberPetSpayed").value,
        this.parentForm.get("currentPreviousPet").get("animalLocation").value,
        this.parentForm.get("currentPreviousPet").get("adoptedBefore").value,
        this.parentForm
          .get("currentPreviousPet")
          .get("adoptedBeforeValue").value,
        this.parentForm.get("currentPreviousPet").get("surrenderedPet").value,
        this.parentForm
          .get("currentPreviousPet")
          .get("circumstancesValue").value,
        this.parentForm.get("currentPreviousPet").get("petInfoPrivious").value,

        //new pet
        this.parentForm.get("newPetInfo").get("rescueOrExpectation").value,
        this.parentForm.get("newPetInfo").get("mainPurposeAdopting").value,
        this.parentForm.get("newPetInfo").get("primaryCaretaker").value,
        this.parentForm.get("newPetInfo").get("hadCatBefore").value,
        this.parentForm.get("newPetInfo").get("vacationHome").value,
        this.parentForm.get("newPetInfo").get("catLeftAloneWeek").value,
        this.parentForm.get("newPetInfo").get("catLeftAloneWeekend").value,
        this.parentForm.get("newPetInfo").get("dailyExercise").value,
        this.parentForm
          .get("newPetInfo")
          .get("lengthOfTimeAdjustToNewHome").value,
        +this.parentForm.get("newPetInfo").get("foodExpense").value,
        this.parentForm.get("newPetInfo").get("veterinarianExpense").value,
        this.parentForm.get("newPetInfo").get("groomingExpense").value,
        this.parentForm.get("newPetInfo").get("boardingExpense").value,

        //characteristics
        this.parentForm.get("physicalCharacter").get("desiredGender").value,
        this.parentForm.get("physicalCharacter").get("desiredCoat").value,
        this.parentForm.get("physicalCharacter").get("desiredAge").value,
        this.parentForm.get("physicalCharacter").get("breedTypeColor").value,

        //cat table
        this.parentForm.get("catTable").get("friendlyWithChildren").value,
        this.parentForm.get("catTable").get("friendlyWithDogs").value,
        this.parentForm.get("catTable").get("friendlyWithCats").value,
        this.parentForm.get("catTable").get("friendlyWithMe").value,
        this.parentForm.get("catTable").get("friendlyWithVisitors").value,
        this.parentForm.get("catTable").get("enjoyBeingGroomed").value,
        this.parentForm.get("catTable").get("enjoyBeingHeld").value,
        this.parentForm.get("catTable").get("enjoyBeingPetted").value,
        this.parentForm.get("catTable").get("beCalm").value,
        this.parentForm.get("catTable").get("beActive").value,
        this.parentForm.get("catTable").get("bePlayful").value,
        this.parentForm.get("catTable").get("beQuiet").value,
        this.parentForm.get("catTable").get("beIndependent").value,
        this.parentForm.get("catTable").get("wakeMeUpAtNight").value,
        this.parentForm.get("catTable").get("aggressiveBehaviour").value,
        this.parentForm.get("catTable").get("beProtective").value,

        //cat table 2
        this.parentForm.get("catTable2").get("litterTrained").value,
        this.parentForm.get("catTable2").get("declawed").value,
        this.parentForm.get("catTable2").get("firstTimeOwner").value,
        this.parentForm.get("catTable2").get("handleDifficultCat").value,
        this.parentForm.get("catTable2").get("medical").value,
        this.parentForm.get("catTable2").get("kittenHandling").value,
        this.parentForm.get("catTable2").get("nailCare").value,
        this.parentForm.get("catTable2").get("behaviouralIssue").value,
        this.parentForm.get("catTable2").get("declaw").value,
        this.parentForm.get("catTable2").get("catPast").value,
        this.parentForm.get("catTable2").get("insurance").value,
        this.parentForm.get("catTable2").get("giveUpCircumstances").value,
        this.parentForm.get("catTable2").get("explainGiveUp").value,
        this.parentForm.get("catTable2").get("additionalInfo").value,

        //reference
        this.parentForm.get("references").get("firstNameReference").value,
        this.parentForm.get("references").get("lastNameReference").value,
        this.parentForm.get("references").get("relationshipRef").value,
        this.parentForm.get("references").get("phoneNumReference").value,
        this.parentForm.get("references").get("emailReference").value,
        this.parentForm.get("references").get("firstNameReference2").value,
        this.parentForm.get("references").get("lastNameReference2").value,
        this.parentForm.get("references").get("relationshipRef2").value,
        this.parentForm.get("references").get("phoneNumReference2").value,
        this.parentForm.get("references").get("emailReference2").value,
        this.parentForm.get("references").get("howFindOutThisAnimal").value
      );
    }
    this.sendTheForm(this.catForm);
        
    console.log('this is cat name:' , this.parentForm.get("basicInfo").get("catName").value)
  }

  private sendTheForm(catForm: CatForm): void {
    this.FS.sendCatForm(catForm).subscribe(
      () => {
        // success
        console.log('this is send method', catForm);
        console.log("Events add HTTP response succeeded.");
      },
      () => {
        // error
        console.log("Events add HTTP response failed.");
      }
    );
  }

  public onSubFormReady(subForm: FormGroup, formName: SubFormName) {
    this.parentForm.setControl(formName, subForm);
  }
}
