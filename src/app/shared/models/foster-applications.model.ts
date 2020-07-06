export class FosterApplication {
  public id: number;
  public submissiondate: string;
  public rejected: boolean;
  public rejectionReason: string;
    constructor(
      public fname: string,
      public lname: string,
      public address: string,
      public city: string,
      public province: string,
      public postalCode: string,
      public homePhone: string,
      public cellPhone: string,
      public over18: boolean,
      public email: string,
      public typeOfResidence: string,
      public own: boolean,
      public landlordContact: string,
      public childrenInHome: boolean,
      public household: string,
      public allergies: boolean,
      public householdHandling: boolean,
      public anyPets: boolean,
      public petDetails: string,
      public spayedAndNeutured: string,
      public dogHabit: string,
      public catHabit: string,
      public familyAgreeable: boolean,
      public fosterAnimalType: string,
      public preferredAnimal: string,
      public keepCatsIndoor: boolean,
      public fencedYard: boolean,
      public fenceHeight: number,
      public willingToTrain: boolean,
      public familiarWithCrate: boolean,
      public useDogCrate: boolean,
      public pastRescueExperience: string,
      public takeAnimalToVet: boolean,
      public haveVehicle: boolean,
      public medicateAnimal: boolean,
      public hoursLeftAlone: number,
      public ref1_fname: string,
      public ref1_lname: string,
      public ref1_cellPhone: string,
      public ref1_email: string,
      public ref2_fname: string,
      public ref2_lname: string,
      public ref2_cellPhone: string,
      public ref2_email: string,
      public ref3_fname: string,
      public ref3_lname: string,
      public ref3_cellPhone: string,
      public ref3_email: string,
      public allowHomeVisit: boolean,
    ) {
      this.id = 0;
      this.submissiondate = "date";
      this.rejected = false;
      this.rejectionReason = "Reason for Rejection: ";
     }
  }
  