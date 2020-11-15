import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-page',
  templateUrl: './volunteer-page.component.html',
  styleUrls: ['./volunteer-page.component.css', '../../website-style.css']
})
export class VolunteerPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onScroll() {
    document.body.scrollTop = 0;
  }
}
