import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BaseForm } from '../form-base';
import { FormService } from '../../cat-form/services/form.service';

@Component({
  selector: 'app-physical-characteristics',
  templateUrl: './physical-characteristics.component.html',
  styleUrls: ['../../cat-form/cat-form-style.css']
})
export class PhysicalCharacteristicsComponent extends BaseForm implements OnInit {

  constructor(private fb: FormBuilder, formService: FormService) {
    super(formService);
  }


  ngOnInit(): void {
    this.formGroup = this.fb.group({
      desiredGender: ['', Validators.nullValidator],
      desiredCoat: ['', Validators.nullValidator],
      desiredAge: ['', Validators.nullValidator],
      breedTypeColor: ['', Validators.nullValidator]
    });
    this.formReady.emit(this.formGroup);
  }
  }


