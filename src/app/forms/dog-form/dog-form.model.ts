export class DogForm {
  constructor(
    //GENERAL
    public id: number,

    public submissionDate: string,

    public approved: boolean,
    public rejected: boolean,
    public rejectionReason: string, //150

    //APPLICANT INFORMATION
    public nameOfDog: string, //25
    public fname: string, //25
    public lname: string, //25
    public address: string, //50
    public city: string, //20
    public province: string, //2
    public postalCode: string, //7
    public homePhone: string, //12
    public cellPhone: string, //12
    public email: string, //50
    public age: number, //3

    //YOUR FAMILY AND LIFESTYLE
    public householdAgreement: boolean,
    public membersIntroduced: boolean,
    public dogAllergies: boolean,
    public howManyAdults: number, //2
    public howManyChildren: number, //2
    public childrenAges: string, //50
    public childrenDogHandling: string, //100
    public childrenVisiting: boolean,
    public visitingFrequency: string, //10
    public childrenPrepared: string, //100
    public familyBusy: string, //10
    public familyActive: string, //15
    public scheduleRegularity: string, //15
    public familyPersonality: string, //100
    public familyPlans: string, //20

    //YOUR HOME 
    public typeOfResidence: string, //15
    public own: boolean,
    public landlordContact: string, //50
    public dogsAllowed: boolean, 
    public restrictions: string, //20
    public livingSituationChanges: string, //200
    public yardType: string, //20
    public fenceType: string, //25
    public fenceHeight: number,
    public dogAddons: string, //20

    //CURRENT/PREVIOUS PETS
    public otherDogs: boolean,
    public dogsInfo: string, //50
    public otherPets: boolean, 
    public otherPetsInfo: string, //50
    public spayedAndNeutered: number, //3
    public petLocation: string, //100
    public priorAdoption: boolean, 
    public groupName: string, //20
    public surrenderedPet: boolean,
    public circumstances: string, //200
    public vetInfo: string, //100

    //NEW PET INFORMATION
    public primaryCaretaker: string, //50
    public hadDogs: boolean,
    public housebrokenBefore: boolean,
    public dogCorrectionPlan: string, //200
    public vacationHome: string, //30   // errrrrrrror was here, this one moved up
    public dogStayDay: string, //50
    public dogStayNight: string, //50
    public leftAloneWeekday: number,
    public leftAloneWeekend: number,
    public petAdjustment: number,
    public dogActivities: string, //90
    public foodExpenses: number,
    public vetExpenses: number,
    public groomingExpenses: number,
    public boardingExpenses: number,
    public gender: string, //6
    public typeOfCoat: string, //15
    public dogAge: string, //10
    public breedTypeColour: string, //20
    public friendlyWithChildren: string, //1
    public friendlyWithDogs: string, //1
    public friendlyWithCats: string, //1
    public friendlyWithMe: string, //1
    public friendlyWithVisitors: string,//1
    public enjoyBeingGroomed: string, //1
    public enjoyBeingHeld: string, //1
    public enjoyBeingPetted: string, //1
    public beCalm: string, //1
    public beActive: string, //1
    public bePlayful: string, //1
    public beQuiet: string, //1
    public beIndependent: string, //1
    public wakeMeUpAtNight: string, //1
    public aggressiveBehaviour: string, //1
    public beProtective: string, //1
    public houseTrained: string, //1
    public obedienceTrained: string, //1
    public firstTimeOwner: string, //1
    public obedienceKnowledge: string, //1
    public handleDifficultDog: string, //1
    public trainingClasses: string, //1
    public lifeStyleChange: string, //200
    public medical: boolean,
    public dogPast: string, //100
    public insurance: boolean,
    public dogMaturing: boolean,
    public giveUpDog: string, //200
    public giveUpCirucumstances: string, //200

    //REFERENCE 1
    public ref1_fname: string, //25
    public ref1_lname: string, //25
    public ref1_relationship: string, //25
    public ref1_phoneNumber: string, //12
    public ref1_email: string, //50

    //REFERENCE 2
    public ref2_fname: string, //25
    public ref2_lname: string, //25
    public ref2_relationship: string, //25
    public ref2_phoneNumber: string, //12
    public ref2_email: string, //50

    public findOutAbout: string //25
  ) {}
}
