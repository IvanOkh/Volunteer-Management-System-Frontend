export class VolunteerInfoViewModel {
  volid: string;
  fname: string;
  lname: string;
  age: number;
  gender: string;

  street: string;
  city: string;
  prov: string;
  postal: string;

  flags: string;

  cphone: string;
  wphone: string;
  hphone: string;
  email: string;
  description: string;
  notes: string;

  constructor(
    volid: string,
    fname: string,
    lname: string,
    age: number,
    gender: string,
    street: string,
    city: string,
    prov: string,
    postal: string,
    cphone: string,
    wphone: string,
    hphone: string,
    email: string,
    description: string,
    notes: string
  ) {}
}
