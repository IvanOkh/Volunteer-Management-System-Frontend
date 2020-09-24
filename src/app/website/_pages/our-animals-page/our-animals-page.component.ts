import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-our-animals-page",
  templateUrl: "./our-animals-page.component.html",
  styleUrls: ["./our-animals-page.component.css", "../../website-style.css"],
})
export class OurAnimalsPageComponent implements OnInit {

  openTab: string;

  constructor() {}

  ngOnInit() {
    document.body.scrollTop = 0;
    this.openTab = 'ac';
  }


  /**
   * Determines which tab is selected in the component. Default is "ac".
   * 
   * ac = Adult Cat
   * ki = Kittens
   * ad = Adult Dogs
   * pu = Puppies
   */
  tabChange(tab: string) {
    this.openTab = tab;  
  }

}
