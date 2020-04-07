import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../form-base';
import { FormService } from '../../cat-form/services/form.service';

@Component({
  selector: 'app-current-previous',
  templateUrl: './current-previous.component.html',
  styleUrls: ['../../cat-form/cat-form-style.css']
})
export class CurrentPreviousComponent extends BaseForm implements OnInit {

  constructor(private fb: FormBuilder, formService: FormService) {
    super(formService);
  }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      anycats: ['', Validators.required],
      catsinfo: ['', Validators.nullValidator],

      FriendlyCat: ['', Validators.nullValidator],
      PlayfulCat: ['', Validators.nullValidator],
      AfraidCat: ['', Validators.nullValidator],
      AggressiveCat: ['', Validators.nullValidator],
      NotSureCat: ['', Validators.nullValidator],

      otherpet: ['', Validators.required],
      otherpetinfo: ['', Validators.nullValidator],

      numberPetSpayed: ['', Validators.nullValidator],
      animalLocation: ['', Validators.nullValidator],
      adoptedBefore: ['', Validators.required],
      adoptedBeforeValue: ['', Validators.nullValidator],
      surrenderedPet: ['', Validators.required],
      circumstancesValue: ['', Validators.nullValidator],

      petInfoPrivious: ['', Validators.nullValidator]

    });
    this.formReady.emit(this.formGroup);



  }
  get form() { return this.formGroup.controls; }



}
