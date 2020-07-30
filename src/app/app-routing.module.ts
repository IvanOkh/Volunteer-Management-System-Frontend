import { DogApprovedComponent } from "./administrator/manage-dog-application/dog-approved/dog-approved/dog-approved.component";
import { FosterRejectedComponent } from "./administrator/foster-applications/foster-rejected/foster-rejected.component";
import { ManageCatApplicationComponent } from "./administrator/manage-cat-application/manage-cat-application.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminContainerComponent } from "./administrator/admin-container/admin-container.component";
import { ViewEventsComponent } from "./administrator/view-events/view-events.component";
import { VolunteerPendingComponent } from "./administrator/volunteer-applications/volunteer-pending/volunteer-pending.component";
import { VolunteerSideEventsComponent } from "./volunteer/volunteer-side-events/volunteer-side-events.component";
import { VolunteerContainerComponent } from "./volunteer/volunteer-container/volunteer-container.component";
import { ViewVolunteerComponent } from "./administrator/view-volunteer/view-volunteer.component";

import { ViewVolunteerAccountComponent } from "./volunteer/view-volunteer-account/view-volunteer-account.component";
import { ViewFostersComponent } from "./administrator/view-fosters/view-fosters.component";
import { VolunteerFormComponent } from "./forms/volunteer-form/volunteer-form.component";
import { FosterFormComponent } from "./forms/foster-form/foster-form.component";
import { DogFormComponent } from "./forms/dog-form/dog-form.component";
import { FormLayoutComponent } from "./forms/cat-form/form-layout/form-layout.component";
import { AuthGuard } from "./auth/auth.guard";
import { AuthUserGuard } from "./auth/auth-user.guard";
import { ResetPasswordComponent } from "./shared/components/reset-password/reset-password.component";
import { MainPageComponent } from "./shared/components/main-page/main-page.component";
import { ManageDogApplicationComponent } from "./administrator/manage-dog-application/manage-dog-application.component";
import { VolunteerRejectedComponent } from "./administrator/volunteer-applications/volunteer-rejected/volunteer-rejected.component";
import { FosterPendingComponent } from "./administrator/foster-applications/foster-pending/foster-pending.component";
import { DogRejectedComponent } from "./administrator/manage-dog-application/dog-rejected/dog-rejected/dog-rejected.component";
import { CatRejectedComponent } from "./administrator/manage-cat-application/cat-rejected/cat-rejected/cat-rejected.component";
import { CatApprovedComponent } from "./administrator/manage-cat-application/cat-approved/cat-approved/cat-approved.component";
import { ChangePasswordComponent } from "./shared/components/change-password/change-password.component";
import { WebsiteContainerComponent } from "./website/website-container/website-container.component";

const appRoutes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./administrator/administrator.module").then(
        (m) => m.AdministratorModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "volunteer",
    loadChildren: () =>
      import("./volunteer/volunteer.module").then((m) => m.VolunteerModule),
    canActivate: [AuthUserGuard],
  },
  { path: "volunteer-application", component: VolunteerFormComponent },
  { path: "foster-application", component: FosterFormComponent },
  {
    path: "dog-application",
    loadChildren: () =>
      import("./forms/dog-form/dog.module").then((m) => m.DogFormModule),
  },
  {
    path: "cat-application",
    loadChildren: () =>
      import("./forms/cat-form/cat-form.module").then((m) => m.CatFormModule),
  },
  // { path: "reset-password", component: ResetPasswordComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "login", component: MainPageComponent },
  {
    path: "develop",
    loadChildren: () =>
      import("./website/website.module").then((m) => m.WebsiteModule),
  },
  // { path: "develop", component: WebsiteContainerComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: MainPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "top",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
