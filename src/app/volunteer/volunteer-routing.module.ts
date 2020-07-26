import { VolunteerContainerComponent } from "./volunteer-container/volunteer-container.component";
import { Routes, RouterModule } from "@angular/router";
import { ViewVolunteerAccountComponent } from "./view-volunteer-account/view-volunteer-account.component";
import { VolunteerSideEventsComponent } from "./volunteer-side-events/volunteer-side-events.component";
import { NgModule } from "@angular/core";

const volunteerRoutes: Routes = [
  {
    path: "",
    component: VolunteerContainerComponent,
    children: [
      { path: "account", component: ViewVolunteerAccountComponent },
      { path: "events", component: VolunteerSideEventsComponent },
      { path: "", redirectTo: "events", pathMatch: "full" },
      { path: "**", component: VolunteerSideEventsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(volunteerRoutes)],
  exports: [RouterModule],
})
export class VolunteerRoutingModule {}
