export class FosterModel {
  private _approved: boolean;
  private _active: boolean;
  private _id: number;
  private _password: string;
  private _fname: string;
  private _lname: string;
  private _address: string;
  private _city: string;
  private _province: string;
  private _postalCode: string;
  private _homePhone: string;
  private _cellPhone: string;
  private _over18: boolean;
  private _email: string;
  private _typeOfResidence: string;
  private _own: boolean;
  private _landlordContact: string;
  private _childrenInHome: boolean;
  private _household: string;
  private _allergies: boolean;
  private _householdHandling: boolean;
  private _anyPets: boolean;
  private _petDetails: string;
  private _spayedAndNeutered: string;
  private _dogHabit: string;
  private _catHabit: string;
  private _familyAgreeable: boolean;
  private _fosterAnimalType: string;
  private _preferredAnimal: string;
  private _keepCatsIndoor: boolean;
  private _fencedYard: boolean;
  private _fenceHeight: number;
  private _willingtotrain: boolean;
  private _familiarWithCrate: boolean;
  private _useDogCrate: boolean;
  private _pastRescueExperience: string;
  private _takeAnimalToVet: boolean;
  private _haveVehicle: boolean;
  private _medicateAnimal: boolean;
  private _hoursLeftAlone: number;
  private _ref1_fname: string;
  private _ref1_lname: string;
  private _ref1_cellPhone: string;
  private _ref1_email: string;
  private _ref2_fname: string;
  private _ref2_lname: string;
  private _ref2_cellPhone: string;
  private _ref2_email: string;
  private _ref3_fname: string;
  private _ref3_lname: string;
  private _ref3_cellPhone: string;
  private _ref3_email: string;
  private _allowHomeVisit: boolean;

  constructor(
    approved: boolean,
    active: boolean,
    id: number,
    password: string,
    fname: string,
    lname: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
    homePhone: string,
    cellPhone: string,
    over18: boolean,
    email: string,
    typeOfResidence: string,
    own: boolean,
    landlordContact: string,
    childrenInHome: boolean,
    household: string,
    allergies: boolean,
    householdHandling: boolean,
    anyPets: boolean,
    petDetails: string,
    spayedAndNeutered: string,
    dogHabit: string,
    catHabit: string,
    familyAgreeable: boolean,
    fosterAnimalType: string,
    preferredAnimal: string,
    keepCatsIndoor: boolean,
    fencedYard: boolean,
    fenceHeight: number,
    willingtotrain: boolean,
    familiarWithCrate: boolean,
    useDogCrate: boolean,
    pastRescueExperience: string,
    takeAnimalToVet: boolean,
    haveVehicle: boolean,
    medicateAnimal: boolean,
    hoursLeftAlone: number,
    ref1_fname: string,
    ref1_lname: string,
    ref1_cellPhone: string,
    ref1_email: string,
    ref2_fname: string,
    ref2_lname: string,
    ref2_cellPhone: string,
    ref2_email: string,
    ref3_fname: string,
    ref3_lname: string,
    ref3_cellPhone: string,
    ref3_email: string,
    allowHomeVisit: boolean
  ) {
    this.approved = approved;
    this.active = active;
    this.id = id;
    this.password = password;
    this.fname = fname;
    this.lname = lname;
    this.address = address;
    this.city = city;
    this.province = province;
    this.postalCode = postalCode;
    this.homePhone = homePhone;
    this.cellPhone = cellPhone;
    this.over18 = over18;
    this.email = email;
    this.typeOfResidence = typeOfResidence;
    this.own = own;
    this.landlordContact = landlordContact;
    this.childrenInHome = childrenInHome;
    this.household = household;
    this.allergies = allergies;
    this.householdHandling = householdHandling;
    this.anyPets = anyPets;
    this.petDetails = petDetails;
    this.spayedAndNeutered = spayedAndNeutered;
    this.dogHabit = dogHabit;
    this.catHabit = catHabit;
    this.familyAgreeable = familyAgreeable;
    this.fosterAnimalType = fosterAnimalType;
    this.preferredAnimal = preferredAnimal;
    this.keepCatsIndoor = keepCatsIndoor;
    this.fencedYard = fencedYard;
    this.fenceHeight = fenceHeight;
    this.willingtotrain = willingtotrain;
    this.familiarWithCrate = familiarWithCrate;
    this.useDogCrate = useDogCrate;
    this.pastRescueExperience = pastRescueExperience;
    this.takeAnimalToVet = takeAnimalToVet;
    this.haveVehicle = haveVehicle;
    this.medicateAnimal = medicateAnimal;
    this.hoursLeftAlone = hoursLeftAlone;
    this.ref1_fname = ref1_fname;
    this.ref1_lname = ref1_lname;
    this.ref1_cellPhone = ref1_cellPhone;
    this.ref1_email = ref1_email;
    this.ref2_fname = ref2_fname;
    this.ref2_lname = ref2_lname;
    this.ref2_cellPhone = ref2_cellPhone;
    this.ref2_email = ref2_email;
    this.ref3_fname = ref3_fname;
    this.ref3_lname = ref3_lname;
    this.ref3_cellPhone = ref3_cellPhone;
    this.ref3_email = ref3_email;
    this.allowHomeVisit = allowHomeVisit;
  }
  public get approved(): boolean {
    return this._approved;
  }
  public set approved(value: boolean) {
    this._approved = value;
  }
  public get active(): boolean {
    return this._active;
  }
  public set active(value: boolean) {
    this._active = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get childrenInHome(): boolean {
    return this._childrenInHome;
  }
  public set childrenInHome(value: boolean) {
    this._childrenInHome = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get fname(): string {
    return this._fname;
  }
  public set fname(value: string) {
    this._fname = value;
  }

  public get lname(): string {
    return this._lname;
  }
  public set lname(value: string) {
    this._lname = value;
  }
  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }
  public get city(): string {
    return this._city;
  }
  public set city(value: string) {
    this._city = value;
  }
  public get province(): string {
    return this._province;
  }
  public set province(value: string) {
    this._province = value;
  }
  public get postalCode(): string {
    return this._postalCode;
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public get homePhone(): string {
    return this._homePhone;
  }
  public set homePhone(value: string) {
    this._homePhone = value;
  }
  public get cellPhone(): string {
    return this._cellPhone;
  }
  public set cellPhone(value: string) {
    this._cellPhone = value;
  }
  public get over18(): boolean {
    return this._over18;
  }
  public set over18(value: boolean) {
    this._over18 = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get typeOfResidence(): string {
    return this._typeOfResidence;
  }
  public set typeOfResidence(value: string) {
    this._typeOfResidence = value;
  }
  public get own(): boolean {
    return this._own;
  }
  public set own(value: boolean) {
    this._own = value;
  }

  public get landlordContact(): string {
    return this._landlordContact;
  }
  public set landlordContact(value: string) {
    this._landlordContact = value;
  }

  public get household(): string {
    return this._household;
  }
  public set household(value: string) {
    this._household = value;
  }

  public get allergies(): boolean {
    return this._allergies;
  }
  public set allergies(value: boolean) {
    this._allergies = value;
  }

  public get householdHandling(): boolean {
    return this._householdHandling;
  }
  public set householdHandling(value: boolean) {
    this._householdHandling = value;
  }
  public get anyPets(): boolean {
    return this._anyPets;
  }
  public set anyPets(value: boolean) {
    this._anyPets = value;
  }
  public get petDetails(): string {
    return this._petDetails;
  }
  public set petDetails(value: string) {
    this._petDetails = value;
  }

  public get spayedAndNeutered(): string {
    return this._spayedAndNeutered;
  }
  public set spayedAndNeutered(value: string) {
    this._spayedAndNeutered = value;
  }
  public get dogHabit(): string {
    return this._dogHabit;
  }
  public set dogHabit(value: string) {
    this._dogHabit = value;
  }

  public get catHabit(): string {
    return this._catHabit;
  }
  public set catHabit(value: string) {
    this._catHabit = value;
  }

  public get familyAgreeable(): boolean {
    return this._familyAgreeable;
  }
  public set familyAgreeable(value: boolean) {
    this._familyAgreeable = value;
  }
  public get fosterAnimalType(): string {
    return this._fosterAnimalType;
  }
  public set fosterAnimalType(value: string) {
    this._fosterAnimalType = value;
  }

  public get preferredAnimal(): string {
    return this._preferredAnimal;
  }
  public set preferredAnimal(value: string) {
    this._preferredAnimal = value;
  }
  public get keepCatsIndoor(): boolean {
    return this._keepCatsIndoor;
  }
  public set keepCatsIndoor(value: boolean) {
    this._keepCatsIndoor = value;
  }
  public get fencedYard(): boolean {
    return this._fencedYard;
  }
  public set fencedYard(value: boolean) {
    this._fencedYard = value;
  }

  public get fenceHeight(): number {
    return this._fenceHeight;
  }
  public set fenceHeight(value: number) {
    this._fenceHeight = value;
  }
  public get willingtotrain(): boolean {
    return this._willingtotrain;
  }
  public set willingtotrain(value: boolean) {
    this._willingtotrain = value;
  }
  public get familiarWithCrate(): boolean {
    return this._familiarWithCrate;
  }
  public set familiarWithCrate(value: boolean) {
    this._familiarWithCrate = value;
  }
  public get useDogCrate(): boolean {
    return this._useDogCrate;
  }
  public set useDogCrate(value: boolean) {
    this._useDogCrate = value;
  }
  public get pastRescueExperience(): string {
    return this._pastRescueExperience;
  }
  public set pastRescueExperience(value: string) {
    this._pastRescueExperience = value;
  }
  public get takeAnimalToVet(): boolean {
    return this._takeAnimalToVet;
  }
  public set takeAnimalToVet(value: boolean) {
    this._takeAnimalToVet = value;
  }
  public get haveVehicle(): boolean {
    return this._haveVehicle;
  }
  public set haveVehicle(value: boolean) {
    this._haveVehicle = value;
  }
  public get medicateAnimal(): boolean {
    return this._medicateAnimal;
  }
  public set medicateAnimal(value: boolean) {
    this._medicateAnimal = value;
  }
  public get hoursLeftAlone(): number {
    return this._hoursLeftAlone;
  }
  public set hoursLeftAlone(value: number) {
    this._hoursLeftAlone = value;
  }

  public get ref1_fname(): string {
    return this._ref1_fname;
  }
  public set ref1_fname(value: string) {
    this._ref1_fname = value;
  }
  public get ref1_lname(): string {
    return this._ref1_lname;
  }
  public set ref1_lname(value: string) {
    this._ref1_lname = value;
  }

  public get ref1_cellPhone(): string {
    return this._ref1_cellPhone;
  }
  public set ref1_cellPhone(value: string) {
    this._ref1_cellPhone = value;
  }

  public get ref1_email(): string {
    return this._ref1_email;
  }
  public set ref1_email(value: string) {
    this._ref1_email = value;
  }
  public get ref2_fname(): string {
    return this._ref2_fname;
  }
  public set ref2_fname(value: string) {
    this._ref2_fname = value;
  }

  public get ref2_lname(): string {
    return this._ref2_lname;
  }
  public set ref2_lname(value: string) {
    this._ref2_lname = value;
  }
  public get ref2_cellPhone(): string {
    return this._ref2_cellPhone;
  }
  public set ref2_cellPhone(value: string) {
    this._ref2_cellPhone = value;
  }
  public get ref2_email(): string {
    return this._ref2_email;
  }
  public set ref2_email(value: string) {
    this._ref2_email = value;
  }

  public get ref3_fname(): string {
    return this._ref3_fname;
  }
  public set ref3_fname(value: string) {
    this._ref3_fname = value;
  }

  public get ref3_lname(): string {
    return this._ref3_lname;
  }
  public set ref3_lname(value: string) {
    this._ref3_lname = value;
  }
  public get ref3_cellPhone(): string {
    return this._ref3_cellPhone;
  }
  public set ref3_cellPhone(value: string) {
    this._ref3_cellPhone = value;
  }

  public get ref3_email(): string {
    return this._ref3_email;
  }
  public set ref3_email(value: string) {
    this._ref3_email = value;
  }
  public get allowHomeVisit(): boolean {
    return this._allowHomeVisit;
  }
  public set allowHomeVisit(value: boolean) {
    this._allowHomeVisit = value;
  }

  edit(
    address: string,
    city: string,
    province: string,
    postalCode: string,
    homePhone: string,
    email: string
  ) {
    this.address = address;
    this.city = city;
    this.province = province;
    this.postalCode = postalCode;
    this.homePhone = homePhone;
    this.email = email;
  }
}
