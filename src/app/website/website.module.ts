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
import { VolunteerModule } from "../volunteer/volunteer.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AdoptionPageComponent } from "./adoption-page/adoption-page.component";
import { OurAnimalsPageComponent } from "./our-animals-page/our-animals-page.component";
import { VolunteerPageComponent } from "./volunteer-page/volunteer-page.component";
import { FosterPageComponent } from './foster-page/foster-page.component';
import { DonateFundsPageComponent } from './donate-funds-page/donate-funds-page.component';
import { DonateSuppliesPageComponent } from './donate-supplies-page/donate-supplies-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { UpcomingEventsPageComponent } from './upcoming-events-page/upcoming-events-page.component';
import { OurPartnersPageComponent } from './our-partners-page/our-partners-page.component';
import { HappyTailsPageComponent } from './happy-tails-page/happy-tails-page.component';
import { GoptekPageComponent } from './goptek-page/goptek-page.component';
// MODULE DEFINITION
@NgModule({
  declarations: [
    WebsiteContainerComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomePageComponent,
    AdoptionPageComponent,
    OurAnimalsPageComponent,
    VolunteerPageComponent,
    FosterPageComponent,
    DonateFundsPageComponent,
    DonateSuppliesPageComponent,
    ContactUsPageComponent,
    FaqPageComponent,
    UpcomingEventsPageComponent,
    OurPartnersPageComponent,
    HappyTailsPageComponent,
    GoptekPageComponent,
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
export class WebsiteModule {}
