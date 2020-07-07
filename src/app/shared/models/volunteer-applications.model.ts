export class VolunteerApplication {
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
    public cellPhone: string,
    public homePhone: string,
    public email: string,
    public over18: boolean,
    public gender: string,
    public tshirtSize: string,
    public description: string,
    public emg1_fname: string,
    public emg1_lname: string,
    public emg1_relationship: string,
    public emg1_homePhone: string,
    public emg1_cellPhone: string,
    public emg1_email: string,
    public emg2_fname: string,
    public emg2_lname: string,
    public emg2_relationship: string,
    public emg2_homePhone: string,
    public emg2_cellPhone: string,
    public emg2_email: string,
    public ref1_fname: string,
    public ref1_lname: string,
    public ref1_cellPhone: string,
    public ref1_email: string,
    public ref2_fname: string,
    public ref2_lname: string,
    public ref2_cellPhone: string,
    public ref2_email: string,
    public emailAllowed: boolean,
    public emailPref: string
  ) {
    this.id = 0;
    this.submissiondate = "D";
    this.rejected = false;
    this.rejectionReason = "";
  }
}
