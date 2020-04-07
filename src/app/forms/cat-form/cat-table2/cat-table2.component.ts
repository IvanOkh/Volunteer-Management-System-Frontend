import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../form-base';
import { FormService } from '../../cat-form/services/form.service';

@Component({
  selector: 'app-cat-table2',
  templateUrl: './cat-table2.component.html',
  styleUrls: ['../../cat-form/cat-form-style.css']
})
export class CatTable2Component  extends BaseForm implements OnInit {

  constructor(private fb: FormBuilder, formService: FormService) {
    super(formService);
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      litterTrained: ['', Validators.nullValidator],
      declawed: ['', Validators.nullValidator],
      firstTimeOwner: ['', Validators.nullValidator],
      handleDifficultCat: ['', Validators.nullValidator],
      medical: ['', Validators.required],
      kittenHandling: ['', Validators.nullValidator],
      nailCare: ['', Validators.required],
      behaviouralIssue: ['', Validators.required],
      declaw: ['', Validators.required],
      catPast: ['', Validators.required],
      insurance: ['', Validators.required],
      giveUpCircumstances: ['', Validators.required],
      explainGiveUp: ['', Validators.required],
      additionalInfo: ['', Validators.nullValidator]


  });
  this.formReady.emit(this.formGroup);
  }
   get form() { return this.formGroup.controls; }
}
