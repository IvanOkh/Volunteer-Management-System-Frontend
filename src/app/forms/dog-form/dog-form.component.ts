import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
// import { MatCheckboxModule } from "@angular/material/checkbox";
import { DogForm } from "./dog-form.model";
import { FormsService } from "src/app/shared/services/forms.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dog-form",
  templateUrl: "./dog-form.component.html",
  styleUrls: ["./dog-form.component.css"],
})
export class DogFormComponent implements OnInit {
  onScroll() {
    document.body.scrollTop = 0;
  }

  title = "dog-application";
  newDogForm: DogForm;
  //array of subscriptions for dropdown menu
  relationships = ["Friend", "Family", "Co-worker", "Manager", "Landlord"];
  provinces = ["AB", "BC", "SK", "MB", "ON", "QC", "NS", "NB", "PE", "NL"];
  //default value string for dropdown menu
  selectedRelationship = "Friend";
  selectedProvince = "AB";

  // errorMessages: string[] = [];
  checked: number = 0;

  id: number = 0;
  submissionDate: string = "";
  // rejected: boolean = false;
  rejectionReason: string = "";
  // approved: false;

  householdAgreement: boolean;
  membersIntroduced: boolean;
  dogAllergies: boolean;
  childrenVisiting: boolean;
  own: boolean;
  dogsAllowed: boolean;
  otherDogs: boolean;
  otherPets: boolean;
  priorAdoption: boolean;
  surrenderedPet: boolean;
  houseBrokenBefore: boolean;
  restrictions: string = "";
  dogAddons: string = "";
  hadDogs: boolean;
  dogStayDay: string = "";
  dogStayNight: string = "";
  dogActivities: string = "";
  medical: boolean;
  insurance: boolean;
  dogMaturing: boolean;
  childrenAges: string = "";
  landlordContact: string = "";

  @ViewChild("signupForm", { static: false }) sgnForm: NgForm;

  constructor(private FS: FormsService, private router: Router) {}

  ngOnInit() {}

  /**
   * Function to navigate the user back to home page (used for back button)
   */
  onOkClick() {
    this.onScroll();
    this.router.navigate(["/public/home"]);
  }

  refresh() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  //If form has submitted
  validForm: boolean = false;
  addingSuccess: boolean = false;

  onSubmit(form: NgForm) {
    // this.errorMessages.length = 0;
    // this.errorMessages.splice(0, this.errorMessages.length);
    // console.log(this.sgnForm.value.staysInHouse);
    // Where will your dog stay during the day

    if (
      form.value.staysInHouse === true ||
      form.value.staysOutdoor === true ||
      form.value.staysInG === true ||
      form.value.staysIndoor === true ||
      form.value.staysTied === true ||
      form.value.staysOutLoose === true ||
      form.value.indorsLocked === true ||
      form.value.staysWith === true
    ) {
      this.checked++;
    }
    // else {
    //   // this.errorMessages.push(
    //   //   "<a href='#daylink'>You must check at least one checkbox for 'Where will your dog stay during the day'</a>"
    //   // );
    //   this.errorMessages.push(
    //     " <b>You must check at least one checkbox for 'Where will your dog stay during the day'</b>"
    //   );
    // }
    // Where will your dog stay during the night
    if (
      form.value.staysInHouseN === true ||
      form.value.staysOutdoorN === true ||
      form.value.staysInGN === true ||
      form.value.staysIndoorN === true ||
      form.value.staysTiedN === true ||
      form.value.staysOutLooseN === true ||
      form.value.indorsLockedN === true ||
      form.value.staysWithN === true
    ) {
      this.checked++;
    }
    //  else {
    //   // this.errorMessages.push(
    //   //   "<a href='#nightlink'>You must check at least one checkbox for 'Where will your dog stay during the night'</a>"
    //   // );
    //   this.errorMessages.push(
    //     "<b>You must check at least one checkbox for 'Where will your dog stay during the night'</b>"
    //   );
    // }
    //activities with the dog
    if (
      form.value.activities1 === true ||
      form.value.activities2 === true ||
      form.value.activities3 === true ||
      form.value.activities4 === true ||
      form.value.activities5 === true ||
      form.value.activities6 === true ||
      form.value.activities7 === true ||
      form.value.activities8 === true ||
      form.value.activities9 === true ||
      form.value.activities10 === true ||
      form.value.activities11 === true ||
      form.value.activities12 === true ||
      form.value.activities13 === true ||
      form.value.activities14 === true ||
      form.value.activities15 === true
    ) {
      this.checked++;
    }
    // else {
    //   // this.errorMessages.push(
    //   //   "<a href='#activitieslink'>You must check at least one checkbox for 'What activities do you plan to do with your dog'</a>"
    //   // );
    //   this.errorMessages.push(
    //     "<b>You must check at least one checkbox for 'What activities do you plan to do with your dog'</b>"
    //   );
    // }

    if (this.checked === 3) {
      //householdAgreement
      if (form.value.familyLovesDogs === "Y") {
        this.householdAgreement = true;
      } else {
        this.householdAgreement = false;
      }
      //membersIntroduced
      if (form.value.familyKnowsTheDog === "Y") {
        this.membersIntroduced = true;
      } else {
        this.membersIntroduced = false;
      }
      //dogAllergies
      if (form.value.familyHasAllergy === "Y") {
        this.dogAllergies = true;
      } else {
        this.dogAllergies = false;
      }
      //childrenVisiting
      if (form.value.childrenVisit === "Y") {
        this.childrenVisiting = true;
      } else {
        this.childrenVisiting = false;
      }
      //restrictions checkboxes placed into String
      if (form.value.numberRestriction === true) {
        this.restrictions = this.restrictions.concat("true");
      } else {
        this.restrictions = this.restrictions.concat("false");
      }
      if (form.value.breedRestrictions === true) {
        this.restrictions = this.restrictions.concat(",true");
      } else {
        this.restrictions = this.restrictions.concat(",false");
      }
      if (form.value.sizeRestrictions === true) {
        this.restrictions = this.restrictions.concat(",true");
      } else {
        this.restrictions = this.restrictions.concat(",false");
      }
      //addons
      if (form.value.undrgrndFence === true) {
        this.dogAddons = this.dogAddons.concat("true");
      } else {
        this.dogAddons = this.dogAddons.concat("false");
      }
      if (form.value.kennel === true) {
        this.dogAddons = this.dogAddons.concat(",true");
      } else {
        this.dogAddons = this.dogAddons.concat(",false");
      }
      if (form.value.dogRun === true) {
        this.dogAddons = this.dogAddons.concat(",true");
      } else {
        this.dogAddons = this.dogAddons.concat(",false");
      }
      //hadDogs
      if (form.value.hadDogs === "Yes") {
        this.hadDogs = true;
      } else {
        this.hadDogs = false;
      }
      //own
      if (form.value.ownOrRent === "Own") {
        this.own = true;
      } else {
        this.own = false;
      }
      //dogsAllowed
      if (form.value.landlordAllows === "Y") {
        this.dogsAllowed = true;
      } else {
        this.dogsAllowed = false;
      }
      //otherDogs
      if (form.value.otherDogs === "Y") {
        this.otherDogs = true;
      } else {
        this.otherDogs = false;
      }
      //otherPets
      if (form.value.otherPets === "Y") {
        this.otherPets = true;
      } else {
        this.otherPets = false;
      }
      //priorAdoption
      if (form.value.adoptedBefore === "Y") {
        this.priorAdoption = true;
      } else {
        this.priorAdoption = false;
      }
      //surrenderedPet
      if (form.value.adoptedBefore === "Y") {
        this.surrenderedPet = true;
      } else {
        this.surrenderedPet = false;
      }
      //houseBrokenBefore
      if (form.value.houseBroken === "Y") {
        this.houseBrokenBefore = true;
      } else {
        this.houseBrokenBefore = false;
      }
      //dogStayDay
      if (form.value.staysInHouse === true) {
        this.dogStayDay = this.dogStayDay.concat("true");
      } else {
        this.dogStayDay = this.dogStayDay.concat("false");
      }
      if (form.value.staysOutdoor === true) {
        this.dogStayDay = this.dogStayDay.concat(",true");
      } else {
        this.dogStayDay = this.dogStayDay.concat(",false");
      }
      if (form.value.staysInG === true) {
        this.dogStayDay = this.dogStayDay.concat(",true");
      } else {
        this.dogStayDay = this.dogStayDay.concat(",false");
      }
      if (form.value.staysIndoor === true) {
        this.dogStayDay = this.dogStayDay.concat(",true");
      } else {
        this.dogStayDay = this.dogStayDay.concat(",false");
      }
      if (form.value.staysTied === true) {
        this.dogStayDay = this.dogStayDay.concat(",true");
      } else {
        this.dogStayDay = this.dogStayDay.concat(",false");
      }
      if (form.value.staysOutLoose === true) {
        this.dogStayDay = this.dogStayDay.concat(",true");
      } else {
        this.dogStayDay = this.dogStayDay.concat(",false");
      }
      if (form.value.indorsLocked === true) {
        this.dogStayDay = this.dogStayDay.concat(",true");
      } else {
        this.dogStayDay = this.dogStayDay.concat(",false");
      }
      if (form.value.staysWith === true) {
        this.dogStayDay = this.dogStayDay.concat(",true");
      } else {
        this.dogStayDay = this.dogStayDay.concat(",false");
      }
      //dogStayNight
      if (form.value.staysInHouseN === true) {
        this.dogStayNight = this.dogStayNight.concat("true");
      } else {
        this.dogStayNight = this.dogStayNight.concat("false");
      }
      if (form.value.staysOutdoorN === true) {
        this.dogStayNight = this.dogStayNight.concat(",true");
      } else {
        this.dogStayNight = this.dogStayNight.concat(",false");
      }
      if (form.value.staysInGN === true) {
        this.dogStayNight = this.dogStayNight.concat(",true");
      } else {
        this.dogStayNight = this.dogStayNight.concat(",false");
      }
      if (form.value.staysIndoorN === true) {
        this.dogStayNight = this.dogStayNight.concat(",true");
      } else {
        this.dogStayNight = this.dogStayNight.concat(",false");
      }
      if (form.value.staysTiedN === true) {
        this.dogStayNight = this.dogStayNight.concat(",true");
      } else {
        this.dogStayNight = this.dogStayNight.concat(",false");
      }
      if (form.value.staysOutLooseN === true) {
        this.dogStayNight = this.dogStayNight.concat(",true");
      } else {
        this.dogStayNight = this.dogStayNight.concat(",false");
      }
      if (form.value.indorsLockedN === true) {
        this.dogStayNight = this.dogStayNight.concat(",true");
      } else {
        this.dogStayNight = this.dogStayNight.concat(",false");
      }
      if (form.value.staysWithN === true) {
        this.dogStayNight = this.dogStayNight.concat(",true");
      } else {
        this.dogStayNight = this.dogStayNight.concat(",false");
      }
      //dogActivities
      if (form.value.activities1 == true) {
        this.dogActivities = this.dogActivities.concat("true");
      } else {
        this.dogActivities = this.dogActivities.concat("false");
      }
      if (form.value.activities2 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities3 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities4 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities5 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities6 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities7 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities8 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities9 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities10 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities11 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities12 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities13 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities14 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      if (form.value.activities15 === true) {
        this.dogActivities = this.dogActivities.concat(",true");
      } else {
        this.dogActivities = this.dogActivities.concat(",false");
      }
      //medical
      if (form.value.buysBoosters === "Y") {
        this.medical = true;
      } else {
        this.medical = false;
      }
      //insurance
      if (form.value.buysInsurance === "Y") {
        this.insurance = true;
      } else {
        this.insurance = false;
      }
      //dogMaturing
      if (form.value.largeDog === "Y") {
        this.dogMaturing = true;
      } else {
        this.dogMaturing = false;
      }
      //childrenAges
      if (form.value.children >= 1) {
        this.childrenAges = this.childrenAges.concat(form.value.childAges);
      } else {
        this.childrenAges = "";
      }
      //landlordContact
      if (form.value.ownOrRent === "Rent") {
        this.landlordContact = this.landlordContact.concat(form.value.landlord);
      } else {
        this.landlordContact = "";
      }

      this.newDogForm = new DogForm(
        this.id,
        this.submissionDate,
        false,
        false,
        this.rejectionReason,
        //APPLICANT
        form.value.dogName, //nameOfDog S
        form.value.firstName, //fname S
        form.value.lastName, //lname S
        form.value.street, //address S
        form.value.city, //city S
        form.value.province, //province S
        form.value.postal, //postalCode S
        form.value.homePhone, //homePhone S
        form.value.cellPhone, //cellPhone S
        form.value.email, //email S
        form.value.age, //age Number
        //YOUR FAMILY AND LIFESTYLE
        this.householdAgreement, //householdAgreement Boolean
        this.membersIntroduced, //membersIntroduced Boolean
        this.dogAllergies, //dogAllergies Boolean
        form.value.adults, //howManyAdults Number
        form.value.children, //howManyChildren Number
        this.childrenAges, //childrenAges S
        form.value.smartKids, //childrenDogHandling S
        this.childrenVisiting, //childrenVisiting Boolean
        form.value.visitFrequency, //visitingFrequency S
        form.value.preparedKids, //childrenPrepared S
        form.value.busyFamily, //family busy S
        form.value.activeFamily, //familyActive S
        form.value.regularSchedule, //scheduleRegularity S
        form.value.familyPerosonality, //familyPersonality S
        form.value.expectEvents, //familyPlans S
        //YOUR HOME
        form.value.typeOfHome, //typeOfResidence S
        this.own, //own Boolean
        this.landlordContact, //landlordContact S
        this.dogsAllowed, //dogsAllowed Boolean
        this.restrictions, // true,true,true -> String
        form.value.lifeChanges, //livingSituationChanges S
        form.value.hasYard, //yardType S
        form.value.fenceType, //fenceType S
        form.value.fenceHeight, //fenceHeight Number
        this.dogAddons, //dogAddons: S
        //CURRENT/Previous PETS
        this.otherDogs, //otherDogs Boolean;
        form.value.howOldAnmls, //dogsInfo S
        this.otherPets, //otherPets Boolean
        form.value.otherPetsDesc, //otherPetsInfo String
        form.value.howMnySpayed, //spayedAndNeutered Number;
        form.value.whereAnimals, //petLocation S
        this.priorAdoption, //priorAdoption Boolean
        form.value.whatGroup, //groupName S
        this.surrenderedPet, //surrenderedPet Boolean
        form.value.circumstances, //circumstances S
        form.value.veterinarian, //vetInfo S
        //NEW PET INFO
        form.value.primeCaretaker, //primaryCaretaker S
        this.hadDogs, //hadDogs Boolean
        this.houseBrokenBefore, //housebrokenBefore Boolean
        form.value.correction, //dogCorrectionPlan S
        form.value.vacationStay, // vacationHome S
        this.dogStayDay, //dogStayDay S
        this.dogStayNight, //dogStayNight S
        form.value.leftAloneWeek, //leftAloneWeekday Number
        form.value.leftAloneWknd, //leftAloneWeekend Number
        form.value.adjTime, // petAdjustment Number
        this.dogActivities, //dogActivities S
        form.value.foodExp, //foodExpenses Number
        form.value.vetExp, //vetExpenses Number
        form.value.groomingExp, //groomingExpenses Number
        form.value.boardingExp, //boardingExpenses Number
        form.value.gender, //gender S
        form.value.coat, //typeOfCoat S
        form.value.desiredAge, //dogAge S
        form.value.breedTypeColor, //breedTypeColor S
        form.value.frndlyWthChldrn, //friendlyWithChildren S
        form.value.frndlyWthDogs, //friendlyWithDogs S
        form.value.frndlyWthCats, //friendlyWithCats S
        form.value.frndlyWthMe, //friendlyWithMe S
        form.value.frndlyWthVistrs, // friendlyWithVisitors S
        form.value.enjoysGrooming, // enjoyBeingGroomed S
        form.value.lovesBeingHeld, //enjoyBeingHeld S
        form.value.lovesBeingPeted, // enjoyBeingPetted
        form.value.beCalm, //beCalm S
        form.value.beActive, //beActive S
        form.value.bePlayful, //bePlayful S
        form.value.beQuiet, //beQuiet S
        form.value.beIndependent, //beIndependent S
        form.value.neverWakeMe, //wakeMeUpAtNight S
        form.value.neverShowAggr, //aggressiveBehaviour S
        form.value.beProtective, //  beProtective S
        form.value.houseTrained, //houseTrained S
        form.value.obedienceTrained, //obedienceTrained S
        form.value.firstTimeOwner, //firstTimeOwner S
        form.value.ownerIsTrained, //obedienceKnowledge S
        form.value.expWthDiffcltDog, //handleDifficultDog
        form.value.willingToTrain, //trainingClasses S
        form.value.longTermExpcttns, //lifeStyleChange
        this.medical, //medical Boolean
        form.value.wiilBeGentle, // dogPast S
        this.insurance, //insurance Boolean
        this.dogMaturing, //dogMaturing Boolean
        form.value.wouldSurrender, //giveUpDog S
        form.value.whatWouldDo, // giveUpCirucumstances S

        form.value.firstRefFirstName,
        form.value.firstRefLastName,
        form.value.relationship,
        form.value.firstRefPhone,
        form.value.firstRefEmail,
        form.value.secondRefFirstName,
        form.value.secondRefLastName,
        form.value.secondRelationship,
        form.value.secondtRefPhone,
        form.value.secondRefEmail,
        form.value.howFoundTheDog
      );
      //DO PROCESSING HERE (this.newDogForm has been populated)
      // console.log(form.touched);
      // console.log("VALID?: " + form.valid);
      // console.log("CHECKED?: " + this.checked);
      // form.controls.forEach(element => {
      //   console.log(element);
      // });
      console.log(form.controls);

      if (form.valid && this.checked === 3) {    
        console.log("Thank you for submitting this form");
        this.sendTheForm(this.newDogForm);
        this.validForm = true;
      }
    } else {
      this.checked = 0;
    }

    // //Validation
    // if (form.valid && this.checked === 3) {
    //   console.log("Valid form 100%");
    //   this.sendTheForm(this.newDogForm);
    //   // console.log("Validated");
    //   // console.log(NgForm);
    //   // console.log(form);
    //   return;
    // }
  }

  private sendTheForm(dogForm: DogForm): void {
    this.FS.sendDogForm(dogForm).subscribe(
      (responseData) => {
        // success
        // console.log("Events add HTTP response succeeded.");
        // console.log(responseData);

        if (responseData === "Error adding application.") {
          // this.newDogForm = null;
          // this.checked = 0;
          // this.validForm = false;
          this.validForm = false;
        }
        this.newDogForm = null;
        this.checked = 0;
      },
      () => {
        // error
        console.log("Events add HTTP response failed.");
        this.newDogForm = null;
        this.checked = 0;
        this.validForm = false;
      }
    );
  }
}
