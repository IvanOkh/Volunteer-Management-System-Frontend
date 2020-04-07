import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormService {
	private runValidateSub: Subject<null> = new Subject<null>();

	get runValidate$(): Observable<null> {
		return this.runValidateSub.asObservable();
	}
	
	notifyRunValidate() {
		this.runValidateSub.next(); 
		//next pass value into stream whenever form is chnged
	}
}