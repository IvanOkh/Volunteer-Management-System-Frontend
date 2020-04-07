import { Component, OnInit, Output } from '@angular/core';
import { FamilyMember } from './familymember.model';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.css']
})
export class FamilyMembersComponent implements OnInit {
  // fields
  @Output('familyList')
  familyMembers: FamilyMember[] = [];

  // required functions
  constructor() { }
  ngOnInit() { }

  // helper functions
  addFamilyMember(member: FamilyMember) {
    this.familyMembers.push(member);
  }

  removeFamilyMember(member: FamilyMember) {
    this.familyMembers.forEach((item, index) => {
      if (item === member) {
        this.familyMembers.splice(index, 1);
      }
    });
  }

}
