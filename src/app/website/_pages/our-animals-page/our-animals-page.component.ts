import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-our-animals-page",
  templateUrl: "./our-animals-page.component.html",
  styleUrls: ["./our-animals-page.component.css", "../../website-style.css"],
})
export class OurAnimalsPageComponent implements OnInit{
  
  @ViewChild("petIframe", {static: false}) public Iframe;

  openTab: string;

  constructor() {}

  ngOnInit() {
    document.body.scrollTop = 0;
    this.openTab = 'ac';
    // this.Iframe.css("../../website-style.css");
    // this.Iframe.style("background-color: red");
  }

// ngAfterViewInit() {
//   const iframDoc = this.Iframe.nativeElement.contentWindow.document;
//   if(iframDoc)
//   iframDoc.head.appendChild('../../website-style.css');
// }


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
