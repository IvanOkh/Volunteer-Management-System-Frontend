import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foster-page',
  templateUrl: './foster-page.component.html',
  styleUrls: ['./foster-page.component.css', '../../website-style.css']
})
export class FosterPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onScroll() {
    document.body.scrollTop = 0;
  }
}
