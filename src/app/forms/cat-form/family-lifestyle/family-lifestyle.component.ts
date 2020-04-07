import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../form-base';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../../cat-form/services/form.service';

@Component({
  selector: 'app-family-lifestyle',
  templateUrl: './family-lifestyle.component.html',
  styleUrls: ['../../cat-form/cat-form-style.css']
})
export class FamilyLifestyleComponent extends BaseForm implements OnInit {

  constructor(private fb: FormBuilder, formService: FormService) {
    super(formService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      personcatisfor: ['', Validators.required],
      householdagreement:['',Validators.required],
      membersintroduced:['',Validators.required],
      catallergies:['',Validators.required],
      howmanyadults:['',Validators.required],
      howmanychild:['',Validators.required],
      childrenages:['',Validators.nullValidator],
      childrenhandling:['',Validators.nullValidator],
      childrenvisit:['',Validators.required],
      visitingfrequency:['',Validators.required],
      childrenprepared:['',Validators.nullValidator],
      familybusy:['',Validators.required],
      activefamily:['',Validators.required],
      scheduleregularity:['',Validators.required],
      familypersonality:['',Validators.required],
      plans:['',Validators.required]
    });
    this.formReady.emit(this.formGroup);
  }
  get form() { return this.formGroup.controls; }
}
