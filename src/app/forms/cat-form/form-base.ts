import { Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormService } from '../../forms/cat-form/services/form.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export abstract class BaseForm {
	@Output() public formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
	public formGroup: FormGroup;

	private destroy$: Subject<null> = new Subject<null>();

// this.httpClient.get(), this.httpClient.post() // complete after emit once

	constructor(formService: FormService) {
		formService.runValidate$ // long-live observable
			.pipe(takeUntil(this.destroy$)) // unsubscribe when component is destroyed
			.subscribe(() => { // subscribe runs -> notifyRunValidate() runs -> runValidateSub.next()
				this.runValidate();
			});
	}

	public runValidate() {
		this.formGroup.markAllAsTouched(); // mark all controls as "touched"
		this.formGroup.updateValueAndValidity(); // runs validations
	}

	public formHasError(): boolean {
		return (this.formGroup.touched || this.formGroup.dirty) && this.formGroup.invalid;
	}

	public controlInvalid(controlName: string): boolean {
		const control = this.formGroup.get(controlName);
		return (control.touched || control.dirty) && control.invalid;
	}

	public controlHasError(controlName: string, errorName: string): boolean {
		const control = this.control(controlName);
		return control.hasError(errorName);
	}

	public control(controlName: string): FormControl {
		return <FormControl>this.formGroup.get(controlName);
	}

	ngOnDestroy() {
		this.destroy$.next();
	}
}
