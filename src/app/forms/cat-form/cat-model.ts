export class CatForm {
  // //Basic Info
  // nameOfCat: String;
  // fname: String;
  // lname: String;
  // address: String;
  // city: String;
  // province: String;
  // postalCode: String;
  // homePhone: String;
  // cellPhone: String;
  // email: String;
  // age: number;

  // //Your Family and Lifestyle
  // personCatIsFor: String; // self or {other}
  // householdAgreement: boolean; // yes/no -> true/false
  // membersIntroduced: boolean;; // yes/no -> true/false
  // catAllergies: boolean;; // yes/no -> true/false
  // howManyAdults: number; // number of adults
  // howManyChildren: number; // number of children
  // childrenAges: String; // {#},{#},{#},{#}...
  // childrenCatHandling: String; // explain if children have been taught to handle cats
  // childrenVisiting: boolean;; // yes/no -> true/false
  // visitingFrequency: String; // daily OR weekly OR monthly OR annually
  // childrenPrepared: String; // explain if children have been taught to respect cats boundaries
  // familyBusy: String; // very busy OR a little OR not at all
  // familyActive: String; // very busy OR a little OR not at all
  // scheduleRegularity: String; // very regular OR very irregular OR moderate
  // familyPersonality: String; // describe your families personality
  // familyPlans: String; // moving OR vacation OR change (change in schedule) OR

  // //your home variables
  // typeOfResidence: String; // house OR apartment OR condo OR trailer OR inner city OR suburban OR acreage OR rural OR {other}
  // own: Boolean; // own/rent -> true/false
  // landlordContact: String;; // name, phone number, OPTIONAL email
  // catsAllowed: Boolean; // yes/no -> true/false
  // restrictions: String; // true,true,true ->
  // outdoorAreas: String; // balcony OR patio OR yard OR cat condo OR none OR {other}
  // typeOfStreet: String; // busy OR quiet OR main road OR {other}
  // catHome: String; // true,true,true,true,true,true,true,true,true ->
  // livingSituationChanges: String; // explain what will happen to the cat if living situation changes

  // //current/previous
  // otherCats: Boolean;
  // catsInfo: String; // info about other owned cats
  // catsAttitude: String; // true,true,true,true,true -> String
  // otherPets: Boolean; // yes/no -> true/false
  // otherPetsInfo: String; // {pet type},{pet type},{pet type},{pet type}....
  // spayedAndNeutered: number;
  // petLocation: String;
  // priorAdoption: Boolean; // yes/no -> true/false
  // groupName: String;
  // surrenderedPet: Boolean; // yes/no -> true/false
  // circumstances: String;
  // vetInfo: String; // name, phone number

  // //new pet
  // expectations: String;
  // purpose: String; // companion OR muuser OR companion for pet OR barn cat OR gift OR {other}
  // primaryCaretaker: String;
  // hadCats: Boolean; // yes/no -> true/false
  // vacationHome: String; // at home with care OR boarding OR with family/friends OR {other}
  // leftAloneWeekday: number;
  // leftAloneWeekend: number;
  // dailyExercise: number;
  // petAdjustment: number;
  // foodExpenses: number;
  // vetExpenses: number;
  // groomingExpenses: number;
  // boardingExpenses: number;

  // //characteristics
  // gender: String;
  // typeOfCoat: String;
  // catAge: number;
  // breedTypeColour: String;

  // //table 1
  // friendlyWithChildren: String;
  // friendlyWithDogs: String;
  // friendlyWithCats: String;
  // friendlyWithMe: String;
  // friendlyWithVisitors: String;
  // enjoyBeingGroomed: String;
  // enjoyBeingHeld: String;
  // enjoyBeingPetted: String;
  // beCalm: String;
  // beActive: String;
  // bePlayful: String;
  // beQuiet: String;
  // beIndependent: String;
  // wakeMeUpAtNight: String;
  // aggressiveBehaviour: String;
  // beProtective: String;

  // //table 2 variables
  // litterTrained: String;
  // declawed: String;
  // firstTimeOwner: String;
  // handleDifficultCat: String;
  // medical: Boolean;
  // kittenHandling: Boolean;
  // nailCare: String;
  // behaviouralIssue: String;
  // declaw: Boolean;
  // catPast: String;
  // insurance: Boolean;
  // giveUpCircumstances: String;
  // explainGiveUp: String;
  // additionalInfo: String;

  // //reference
  // ref1_fname:String;
  // ref1_lname:String;
  // ref1_relationship:String;
  // ref1_phoneNumber:String;
  // ref1_email:String;

  // ref2_fname:String;
  // ref2_lname:String;
  // ref2_relationship:String;
  // ref2_phoneNumber:String;
  // ref2_email:String;

  // findOutAbout:String;

  constructor(
    public id: number,
    public submissionDate: string,
    public approved: boolean,
    public rejected: boolean,
    public rejectionReason: string,
    public nameOfCat: String,
    public fname: String,
    public lname: String,
    public address: String,
    public city: String,
    public province: String,
    public postalCode: String,
    public homePhone: String,
    public cellPhone: String,
    public email: String,
    public age: number,

    //Family and lifeStyle constructor
    public personCatIsFor: String,
    public householdAgreement: boolean,
    public membersIntroduced: boolean,
    public catAllergies: boolean,
    public howManyAdults: number,
    public howManyChildren: number,
    public childrenAges: String,
    public childrenCatHandling: String,
    public childrenVisiting: boolean,
    public visitingFrequency: String,
    public childrenPrepared: String,
    public familyBusy: String,
    public familyActive: String,
    public scheduleRegularity: String,
    public familyPersonality: String,
    public familyPlans: String,

    //your home constructor
    public typeOfResidence: String,
    public own: Boolean,
    public landlordContact: String,
    public catsAllowed: Boolean,
    public restrictions: String,
    public outdoorAreas: String,
    public typeOfStreet: String,
    public catHome: String,
    public livingSituationChanges: String,

    //current previous
    public otherCats: Boolean,
    public catsInfo: String,
    public catsAttitude: String,
    public otherPets: Boolean,
    public otherPetsInfo: String,
    public spayedAndNeutered: number,
    public petLocation: String,
    public priorAdoption: Boolean,
    public groupName: String,
    public surrenderedPet: Boolean,
    public circumstances: String,
    public vetInfo: String,

    //new pet constructor
    public expectations: String,
    public purpose: String,
    public primaryCaretaker: String,
    public hadCats: Boolean,
    public vacationHome: String,
    public leftAloneWeekday: number,
    public leftAloneWeekend: number,
    public dailyExercise: number,
    public petAdjustment: number,
    public foodExpenses: number,
    public vetExpenses: number,
    public groomingExpenses: number,
    public boardingExpenses: number,

    //characteristics constructor
    public gender: String,
    public typeOfCoat: String,
    public catAge: number,
    public breedTypeColour: String,

    //table 1
    public friendlyWithChildren: String,
    public friendlyWithDogs: String,
    public friendlyWithCats: String,
    public friendlyWithMe: String,
    public friendlyWithVisitors: String,
    public enjoyBeingGroomed: String,
    public enjoyBeingHeld: String,
    public enjoyBeingPetted: String,
    public beCalm: String,
    public beActive: String,
    public bePlayful: String,
    public beQuiet: String,
    public beIndependent: String,
    public wakeMeUpAtNight: String,
    public aggressiveBehaviour: String,
    public beProtective: String,

    //table 2 variables
    public litterTrained: String, // Y, N, X -> yes, no, not sure
    public declawed: String, // Y, N, X
    public firstTimeOwner: String, // Y, N, X
    public handleDifficultCat: String, // Y, N, X
    public medical: Boolean, // yes/no -> true/false
    public kittenHandling: Boolean, // yes/no -> true/false
    public nailCare: String, // declawing OR scratching posts OR trimming the nails OR nails covers OR i don't know
    public behaviouralIssue: String, // vocalization OR litter box issues OR spraying OR scratching furniture OR aggression towards people OR aggression towards other animals OR overly timid OR none
    public declaw: Boolean, // yes/no -> true/false
    public catPast: String,
    public insurance: Boolean, // yes/no -> true/false
    public giveUpCircumstances: String,
    public explainGiveUp: String,
    public additionalInfo: String,

    //refernce
    public ref1_fname: String,
    public ref1_lname: String,
    public ref1_relationship: String,
    public ref1_phoneNumber: String,
    public ref1_email: String,

    public ref2_fname: String,
    public ref2_lname: String,
    public ref2_relationship: String,
    public ref2_phoneNumber: String,
    public ref2_email: String,
    public findOutAbout: String
  ) {
    // this.nameOfCat = nameOfCat
    // this.fname = fname;
    // this.lname = lname;
    // this.address = address;
    // this.city = city;
    // this.province = province;
    // this.postalCode = postalCode;
    // this.homePhone = homePhone;
    // this.cellPhone = cellPhone;
    // this.email = email;
    // this.age = age;
    // //family and life style
    // this.personCatIsFor = personCatIsFor;
    // this.householdAgreement = householdAgreement;
    // this.membersIntroduced = membersIntroduced;
    // this.catAllergies = catAllergies;
    // this.howManyAdults = howManyAdults;
    // this.howManyChildren = howManyChildren;
    // this.childrenAges = childrenAges;
    // this.childrenCatHandling = childrenCatHandling;
    // this.childrenVisiting = childrenVisiting;
    // this.visitingFrequency = visitingFrequency;
    // this.childrenPrepared = childrenPrepared;
    // this.familyBusy = familyBusy;
    // this.familyActive = familyActive;
    // this.scheduleRegularity = scheduleRegularity;
    // this.familyPersonality = familyPersonality;
    // this.familyPlans = familyPlans;
    // //your home
    // this.typeOfResidence = typeOfResidence;
    // this.own = own;
    // this.landlordContact = landlordContact;
    // this.catsAllowed = catsAllowed;
    // this.restrictions = restrictions;
    // this.outdoorAreas = outdoorAreas;
    // this.typeOfStreet = typeOfStreet;
    // this.catHome = catHome;
    // this.livingSituationChanges = livingSituationChanges;
    // //current/previous
    // this.otherCats = otherCats;
    // this.catsInfo = catsInfo;
    // this.catsAttitude = catsAttitude;
    // this.otherPets = otherPets;
    // this.otherPetsInfo = otherPetsInfo;
    // this.spayedAndNeutered = spayedAndNeutered;
    // this.petLocation = petLocation
    // this.priorAdoption = priorAdoption
    // this.groupName = groupName;
    // this.surrenderedPet = surrenderedPet;
    // this.circumstances = circumstances;
    // this.vetInfo = vetInfo;
    // //new pet
    // this.expectations = expectations,
    //     this.purpose = purpose,
    //     this.primaryCaretaker = primaryCaretaker,
    //     this.hadCats = hadCats,
    //     this.vacationHome = vacationHome,
    //     this.leftAloneWeekday = leftAloneWeekday,
    //     this.leftAloneWeekend = leftAloneWeekend,
    //     this.dailyExercise = dailyExercise,
    //     this.petAdjustment = petAdjustment,
    //     this.foodExpenses = foodExpenses,
    //     this.vetExpenses = vetExpenses,
    //     this.groomingExpenses = groomingExpenses,
    //     this.boardingExpenses = boardingExpenses,
    //     //characteristic
    //     this.gender = gender;
    // this.typeOfCoat = typeOfCoat;
    // this.catAge = catAge;
    // this.breedTypeColour = breedTypeColour;
    // //table 1
    // this.friendlyWithChildren = friendlyWithChildren,
    //     this.friendlyWithDogs = friendlyWithDogs,
    //     this.friendlyWithCats = friendlyWithCats,
    //     this.friendlyWithMe = friendlyWithMe,
    //     this.friendlyWithVisitors = friendlyWithVisitors,
    //     this.enjoyBeingGroomed = enjoyBeingGroomed,
    //     this.enjoyBeingHeld = enjoyBeingHeld,
    //     this.enjoyBeingPetted = enjoyBeingPetted,
    //     this.beCalm = beCalm,
    //     this.beActive = beActive,
    //     this.bePlayful = bePlayful,
    //     this.beQuiet = beQuiet,
    //     this.beIndependent = beIndependent,
    //     this.wakeMeUpAtNight = wakeMeUpAtNight,
    //     this.aggressiveBehaviour = aggressiveBehaviour,
    //     this.beProtective = beProtective
    // //table 2
    // this.litterTrained= litterTrained,
    // this.declawed=declawed,
    // this.firstTimeOwner=firstTimeOwner,
    // this.handleDifficultCat=handleDifficultCat,
    // this.medical=medical,
    // this.kittenHandling=kittenHandling,
    // this.nailCare=nailCare,
    // this.behaviouralIssue=behaviouralIssue,
    // this.declaw=declaw,
    // this.catPast=catPast,
    // this.insurance=declaw,
    // this.giveUpCircumstances=giveUpCircumstances,
    // this.explainGiveUp=explainGiveUp,
    // this.additionalInfo=additionalInfo
    // //reference
    // this.ref1_fname=ref1_fname,
    // this.ref1_lname=ref1_lname,
    // this.ref1_relationship=ref1_relationship,
    // this.ref1_phoneNumber=ref1_phoneNumber,
    // this.ref1_email=ref1_email,
    // this.ref2_fname=ref2_fname,
    // this.ref2_lname=ref2_lname,
    // this.ref2_relationship=ref2_relationship,
    // this.ref2_phoneNumber=ref2_phoneNumber,
    // this.ref2_email=ref2_email,
    // this.findOutAbout=findOutAbout
  }
}
