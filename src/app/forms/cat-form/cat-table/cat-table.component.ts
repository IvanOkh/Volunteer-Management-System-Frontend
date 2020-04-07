import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BaseForm } from '../form-base';
import { FormService } from '../../cat-form/services/form.service';

@Component({
  selector: 'app-cat-table',
  templateUrl: './cat-table.component.html',
  styleUrls: ['../../cat-form/cat-form-style.css']
})
export class CatTableComponent extends BaseForm implements OnInit {
  formGroup: any;
  formReady: any;

  constructor(private fb: FormBuilder, formService: FormService) {
    super(formService);
  }

  ngOnInit() {
    // console.log(this.formGroup.valueChanges);
   // this.formReady.emit(this.formGroup);
    this.formGroup = this.fb.group({
      friendlyWithChildren: ['', Validators.nullValidator],
      friendlyWithDogs: ['', Validators.nullValidator],
      friendlyWithCats: ['', Validators.nullValidator],
      friendlyWithMe: ['', Validators.nullValidator],
      friendlyWithVisitors: ['', Validators.nullValidator],
      enjoyBeingGroomed: ['', Validators.nullValidator],
      enjoyBeingHeld: ['', Validators.nullValidator],
      enjoyBeingPetted: ['', Validators.nullValidator],
      beCalm: ['', Validators.nullValidator],
      beActive: ['', Validators.nullValidator],
      bePlayful: ['', Validators.nullValidator],
      beQuiet: ['', Validators.nullValidator],
      beIndependent: ['', Validators.nullValidator],
      wakeMeUpAtNight: ['', Validators.nullValidator],
      aggressiveBehaviour: ['', Validators.nullValidator],
      beProtective: ['', Validators.nullValidator],

    });
    this.formReady.emit(this.formGroup);
  }

}

