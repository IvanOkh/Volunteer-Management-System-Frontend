import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WebsiteContainerComponent } from "./website-container/website-container.component";

const websiteRoutes: Routes = [
  {
    path: "",
    component: WebsiteContainerComponent,
    //feel free to add child routes below
    children: [
      //   { path: "forstroute", component: CompontnName },
      //   { path: "secondroute", component: CompontnName },
      { path: "", redirectTo: "develop", pathMatch: "full" },
      { path: "**", component: WebsiteContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(websiteRoutes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
