import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BaseForm } from '../form-base';
import { FormService } from '../../cat-form/services/form.service';

@Component({
  selector: 'app-new-pet-info',
  templateUrl: './new-pet-info.component.html',
  styleUrls: ['../../cat-form/cat-form-style.css']
})
export class NewPetInfoComponent extends BaseForm implements OnInit {

  constructor(private fb: FormBuilder, formService: FormService) {
    super(formService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      rescueOrExpectation: ['', Validators.required],
      mainPurposeAdopting: ['', Validators.required],
      primaryCaretaker: ['', Validators.required],
      hadCatBefore: ['', Validators.required],

      vacationHome: ['', Validators.required],

      catLeftAloneWeek: ['', Validators.required],
      catLeftAloneWeekend: ['', Validators.required],


      dailyExercise: ['', Validators.required],
      lengthOfTimeAdjustToNewHome: ['', Validators.required],
      foodExpense: ['', Validators.required],
      veterinarianExpense: ['', Validators.required],
      groomingExpense: ['', Validators.required],
      boardingExpense: ['', Validators.required]
    });
    this.formReady.emit(this.formGroup);
  }
  get form() { return this.formGroup.controls; }
}


