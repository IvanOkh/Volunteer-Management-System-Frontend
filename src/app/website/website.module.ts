// ANGULAR IMPORTS
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// ROUTING MODULE IMPORT
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { WebsiteContainerComponent } from "./website-container/website-container.component";
import { WebsiteRoutingModule } from "./website-routing.module";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";

import { NavbarComponent } from "./_reusables/navbar/navbar.component";
import { HomePageComponent } from "./_pages/home-page/home-page.component";
import { OurAnimalsPageComponent } from "./_pages/our-animals-page/our-animals-page.component";
import { VolunteerPageComponent } from "./_pages/volunteer-page/volunteer-page.component";
import { FosterPageComponent } from "./_pages/foster-page/foster-page.component";
import { DonateFundsPageComponent } from "./_pages/donate-funds-page/donate-funds-page.component";
import { DonateSuppliesPageComponent } from "./_pages/donate-supplies-page/donate-supplies-page.component";
import { ContactUsPageComponent } from "./_pages/contact-us-page/contact-us-page.component";
import { UpcomingEventsPageComponent } from "./_pages/upcoming-events-page/upcoming-events-page.component";
import { OurPartnersPageComponent } from "./_pages/our-partners-page/our-partners-page.component";
import { HappyTailsPageComponent } from "./_pages/happy-tails-page/happy-tails-page.component";
import { GoptekPageComponent } from "./_pages/goptek-page/goptek-page.component";
import { VolunteerModule } from "../volunteer/volunteer.module";
import { CarouselComponent } from './_reusables/carousel/carousel.component';
import { FosterHomeSectionComponent } from './_reusables/foster-home-section/foster-home-section.component';
import { RainbowBridgePageComponent } from './_pages/rainbow-bridge-page/rainbow-bridge-page.component';
// MODULE DEFINITION
@NgModule({
  declarations: [
    WebsiteContainerComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomePageComponent,
    OurAnimalsPageComponent,
    VolunteerPageComponent,
    FosterPageComponent,
    DonateFundsPageComponent,
    DonateSuppliesPageComponent,
    ContactUsPageComponent,
    UpcomingEventsPageComponent,
    OurPartnersPageComponent,
    HappyTailsPageComponent,
    GoptekPageComponent,
    CarouselComponent,
    FosterHomeSectionComponent,
    RainbowBridgePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    WebsiteRoutingModule,
    VolunteerModule,
  ],
  exports: [PageNotFoundComponent],
  providers: [],
  bootstrap: [],
})
export class WebsiteModule { }
