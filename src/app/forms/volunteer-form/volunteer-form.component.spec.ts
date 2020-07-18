import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFormComponent } from './volunteer-form.component';

import { NgForm } from "@angular/forms";

describe('VolunteerFormComponent', () => {
    let component: VolunteerFormComponent;
    let fixture: ComponentFixture<VolunteerFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VolunteerFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VolunteerFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('form invalid when empty', () => {
        expect(component.validForm).toBeFalsy();
    });

    it('fname validity', () => {
        
        const testForm = <NgForm>{
            value: {
                agreementCheck: true,
                cellPhone: "506-214-4022",
                city: "Vancouver",
                eNewsLetters: true,
                ec1Cphone: "549-744-8763",
                ec1Email: "qixytik@mailinator.com",
                ec1Fname: "Tarik",
                ec1Hphone: "847-685-6481",
                ec1Lname: "Curry",
                ec1Relationship: "Father",
                ec2Cphone: "962-647-4765",
                ec2Email: "wekopov@mailinator.com",
                ec2Fname: "Octavia",
                ec2Hphone: "748-462-2741",
                ec2Lname: "Cardenas",
                ec2Relationship: "Supervisor",
                email: "xoheneket@mailinator.com",
                firstname: "Nell",
                gender: "Female",
                homePhone: "904-749-1721",
                lastname: "Gross",
                over18: false,
                paragraph: "Neque magni dol",
                postalCode: "G5G 5G5",
                province: "NB",
                r1Cphone: "756-873-7885",
                r1Email: "zyvojon@mailinator.com",
                r1Fname: "Plato",
                r1Lname: "Stevens",
                r2Cphone: "951-941-7085",
                r2Email: "zumymup@mailinator.com",
                r2Fname: "Joan",
                r2Lname: "Peterson",
                recAppeals: true,
                schedReminders: false,
                shirtSize: "M",
                street1: "Quae ut lorem e",
                weekLetter: false
            }
        };
        
        component.onSubmit(testForm);
        expect(component.validForm).toBeTruthy();
    });
});