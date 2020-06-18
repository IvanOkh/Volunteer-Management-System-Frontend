export class AnimalModel {
    private _id: number;
    private _avatar: string;
    private _name: string;
    private _date: string;
    private _age: number;
    private _species: string;
    private _breed: string;
    private _bio: string;
    private _medicalHistory: string;
    private _status: string;
    private _rejected: boolean
    
  
    constructor(
        id: number,
        avatar: string,
        name: string,
        date: string,
        age: number,
        species: string,
        breed: string,
        bio: string,
        medicalHistory: string,
        status: string,
        rejected: boolean
    ) {
        this.id = id;
        this.avatar = avatar;
        this.name = name;
        this.date = date;
        this.age = age;
        this.species = species;
        this.breed = breed;
        this.bio = bio;
        this.medicalHistory = medicalHistory;
        this.status = status;
        this.rejected = rejected;
    }
    public get rejected(): boolean {
      return this._rejected;
  }
  public set rejected(value: boolean) {
      this.rejected = value;
  }
  
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get avatar(): string {
        return this._avatar;
    }
    public set avatar(value: string) {
        this._avatar = value;
    }
    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get species(): string {
        return this._species;
    }
    public set species(value: string) {
        this._species = value;
    }
    public get breed(): string {
        return this._breed;
    }
    public set breed(value: string) {
        this._breed = value;
    }
    public get bio(): string {
        return this._bio;
    }
    public set bio(value: string) {
        this._bio = value;
    }
    public get medicalHistory(): string {
        return this._medicalHistory;
    }
    public set medicalHistory(value: string) {
        this._medicalHistory = value;
    }
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
  
  
  }
  