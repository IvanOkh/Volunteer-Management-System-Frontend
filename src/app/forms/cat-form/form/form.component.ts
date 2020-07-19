import { Component, OnInit, ViewChild, Output, Input, forwardRef } from '@angular/core';
import { FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { BaseForm } from '../form-base';
// import { FormGroup } from '@angular/forms'
import { FormService } from '../../cat-form/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../cat-form/cat-form-style.css']
})
export class FormComponent extends BaseForm implements OnInit {

  constructor(private fb: FormBuilder, formService: FormService) {
    super(formService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      catName: ['', Validators.nullValidator],
      fname: ['', Validators.required,],
      lname: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', Validators.required],
      // homeAreaCode: ['', [Validators.required,Validators.pattern('[0-9]*')]],
      homephone: ['', [Validators.required,Validators.minLength(12), Validators.maxLength(12)]],
      // cellAreaCode: ['', [Validators.pattern('[0-9]*'),Validators.required]],
      cellphone: ['', [Validators.required,Validators.minLength(12), Validators.maxLength(12)]],
      email: ['', [Validators.required,Validators.email]],
      age: ['', [Validators.required]]
    });
    this.formReady.emit(this.formGroup);

  }
  get form() { return this.formGroup.controls; }

}
