import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WebsiteContainerComponent } from "./website-container/website-container.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";
import { HomePageComponent } from "./_pages/home-page/home-page.component";
import { OurAnimalsPageComponent } from "./_pages/our-animals-page/our-animals-page.component";
import { VolunteerPageComponent } from "./_pages/volunteer-page/volunteer-page.component";
import { FosterPageComponent } from "./_pages/foster-page/foster-page.component";
import { ContactUsPageComponent } from "./_pages/contact-us-page/contact-us-page.component";
import { UpcomingEventsPageComponent } from "./_pages/upcoming-events-page/upcoming-events-page.component";
import { OurPartnersPageComponent } from "./_pages/our-partners-page/our-partners-page.component";
import { HappyTailsPageComponent } from "./_pages/happy-tails-page/happy-tails-page.component";
import { GoptekPageComponent } from "./_pages/goptek-page/goptek-page.component";
import { DonateFundsPageComponent } from "./_pages/donate-funds-page/donate-funds-page.component";
import { DonateSuppliesPageComponent } from "./_pages/donate-supplies-page/donate-supplies-page.component";
import { RainbowBridgePageComponent } from "./_pages/rainbow-bridge-page/rainbow-bridge-page.component";


const websiteRoutes: Routes = [
  {
    path: "",
    component: WebsiteContainerComponent,
    children: [
      // { path: "", redirectTo: "develop", pathMatch: "full" },
      { path: "home", component: HomePageComponent },
      { path: "our-animals", component: OurAnimalsPageComponent },
      { path: "volunteer", component: VolunteerPageComponent },
      { path: "foster", component: FosterPageComponent },
      { path: "donatefunds", component: DonateFundsPageComponent },
      { path: "donatesupplies", component: DonateSuppliesPageComponent },
      { path: "contact-us", component: ContactUsPageComponent },
      { path: "events", component: UpcomingEventsPageComponent },
      { path: "partners", component: OurPartnersPageComponent },
      { path: "happy-tails", component: HappyTailsPageComponent },
      { path: "rainbow-bridge", component: RainbowBridgePageComponent },
      { path: "goptek", component: GoptekPageComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      //feel free to add child routes below this line

      { path: "**", component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(websiteRoutes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
