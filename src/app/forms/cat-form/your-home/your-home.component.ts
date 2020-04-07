import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, CheckboxRequiredValidator } from '@angular/forms';
import { BaseForm } from '../form-base';
import { MatCheckboxRequiredValidator } from '@angular/material/checkbox';
import { FormService } from '../../cat-form/services/form.service';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-your-home',
  templateUrl: './your-home.component.html',
  styleUrls: ['../../cat-form/cat-form-style.css']
})
export class YourHomeComponent extends BaseForm implements OnInit {

  constructor(private fb: FormBuilder, formService: FormService) {
    super(formService);
  }
  // typeOfHome: boolean[] =['House','Apartment','Condo','Trailer','Inner City', 'Suburban',
  // 'Acreage','Rural'];
  checked: boolean;
  ngOnInit(): void {
    this.formGroup = this.fb.group({

      typeofresidence: ['', Validators.required],
      own: ['', Validators.required],
      landlordcontact: ['', Validators.nullValidator],
      catsallowed: ['', Validators.nullValidator],

      numberOfPetRestrict: ['', Validators.nullValidator],
      sizeWeightRestrict: ['', Validators.nullValidator],
      breedRestrict: ['', Validators.nullValidator],

       outdoorareas: ['', Validators.nullValidator],
       busystreet: ['', Validators.required],


      ExclusivelyIndoorCatPlace: ['', Validators.nullValidator],
      CombinationCatPlace: ['', Validators.nullValidator],
      OneRoomCatPlace: ['', Validators.nullValidator],
      CondoCatPlace: ['', Validators.nullValidator],
      BarnCatPlace: ['', Validators.nullValidator],
      ExclusivelyOutdoorCatPlace: ['', Validators.nullValidator],
      FreeCatPlace: ['', Validators.nullValidator],
      OutdoorCatPlace: ['', Validators.nullValidator],
      GarageCatPlace: ['', Validators.nullValidator],
      OtherCatPlace: ['', Validators.nullValidator],

      livingsituationchanges: ['', Validators.nullValidator]
    });
    this.formReady.emit(this.formGroup);


  }
  get form() { return this.formGroup.controls; }

  // onSelectionChanged(changes: MatSelectionListChange) {
  //   console.log(changes);
  // }
}
