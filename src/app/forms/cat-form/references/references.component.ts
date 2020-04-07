import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import { NgForm, Validators, FormBuilder } from '@angular/forms';
import { BaseForm } from '../form-base';
import { FormService } from '../../cat-form/services/form.service';

interface Relationship {
  value: string;
  viewValue: string;
}

// const array = [{

// }];



@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['../../cat-form/cat-form-style.css']
})
export class ReferencesComponent extends BaseForm implements OnInit {
  // @ViewChild("formAdd", { static: false }) formAdd: NgForm;
  title = "dog-application";
  relationships: Relationship[] = [
    { value: 'family', viewValue: 'Family' },
    { value: 'friends', viewValue: 'Friends' },
    { value: 'co-worker', viewValue: 'Co-worker' },
    { value: 'manager', viewValue: 'Manager' },
    { value: 'landlord', viewValue: 'Landlord' }
  ];
  //array of subscriptions for dropdown menu
  subscriptions = ["Basic", "Advanced", "Pro"];
  //default value string for dropdown menu
  selectedSubscription = "Advanced";
  array: any;
  //@ViewChild("signupForm", { static: false }) sgnForm: NgForm;
  constructor(private fb: FormBuilder, formService: FormService) {
    super(formService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      firstNameReference: ['', Validators.required],
      lastNameReference: ['', Validators.required],
      relationshipRef: ['', Validators.required],
      phoneNumReference: ['', Validators.required],
      emailReference: ['', Validators.required],

      firstNameReference2: ['', Validators.required],
      lastNameReference2: ['', Validators.required],

      //relationship thieu
      relationshipRef2: ['', Validators.required],
      phoneNumReference2: ['', Validators.required],
      emailReference2: ['', Validators.required],
      howFindOutThisAnimal: ['', Validators.required]

    });
    this.formReady.emit(this.formGroup);
  }
  get form() { return this.formGroup.controls; }
}


