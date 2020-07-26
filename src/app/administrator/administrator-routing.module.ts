import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminContainerComponent } from "./admin-container/admin-container.component";
import { ManageCatApplicationComponent } from "./manage-cat-application/manage-cat-application.component";
import { CatRejectedComponent } from "./manage-cat-application/cat-rejected/cat-rejected/cat-rejected.component";
import { CatApprovedComponent } from "./manage-cat-application/cat-approved/cat-approved/cat-approved.component";
import { ManageDogApplicationComponent } from "./manage-dog-application/manage-dog-application.component";
import { DogRejectedComponent } from "./manage-dog-application/dog-rejected/dog-rejected/dog-rejected.component";
import { DogApprovedComponent } from "./manage-dog-application/dog-approved/dog-approved/dog-approved.component";
import { VolunteerRejectedComponent } from "./volunteer-applications/volunteer-rejected/volunteer-rejected.component";
import { VolunteerPendingComponent } from "./volunteer-applications/volunteer-pending/volunteer-pending.component";
import { FosterRejectedComponent } from "./foster-applications/foster-rejected/foster-rejected.component";
import { FosterPendingComponent } from "./foster-applications/foster-pending/foster-pending.component";
import { ViewEventsComponent } from "./view-events/view-events.component";
import { ViewFostersComponent } from "./view-fosters/view-fosters.component";
import { ViewVolunteerComponent } from "./view-volunteer/view-volunteer.component";

const adminRoutes: Routes = [
  {
    path: "",
    component: AdminContainerComponent,

    children: [
      { path: "cat", component: ManageCatApplicationComponent },
      { path: "rejectedCat", component: CatRejectedComponent },
      { path: "acceptedCat", component: CatApprovedComponent },

      { path: "dog", component: ManageDogApplicationComponent },
      { path: "rejectedDog", component: DogRejectedComponent },
      { path: "acceptedDog", component: DogApprovedComponent },

      { path: "volunteerarchive", component: VolunteerRejectedComponent },
      { path: "applications", component: VolunteerPendingComponent },
      { path: "fosterarchive", component: FosterRejectedComponent },
      { path: "fosterapplications", component: FosterPendingComponent },
      { path: "events", component: ViewEventsComponent },
      { path: "fosters", component: ViewFostersComponent },
      { path: "volunteers", component: ViewVolunteerComponent },
      { path: "", redirectTo: "events", pathMatch: "full" },
      { path: "**", component: ViewEventsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
