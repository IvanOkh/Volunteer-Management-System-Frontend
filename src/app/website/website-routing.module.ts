import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WebsiteContainerComponent } from "./website-container/website-container.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";
import { HomePageComponent } from "./_pages/home-page/home-page.component";
import { OurAnimalsPageComponent } from "./_pages/our-animals-page/our-animals-page.component";

const websiteRoutes: Routes = [
  {
    path: "",
    component: WebsiteContainerComponent,
    children: [
      // { path: "", redirectTo: "develop", pathMatch: "full" },
      { path: "home", component: HomePageComponent },
      { path: "our-animals", component: OurAnimalsPageComponent },

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
