import { FosterArchiveComponent } from './administrator/foster-applications/foster-archive/foster-archive.component';
import { ManageCatApplicationComponent } from "./administrator/manage-cat-application/manage-cat-application.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AdminContainerComponent } from "./administrator/admin-container/admin-container.component";
import { ViewEventsComponent } from "./administrator/view-events/view-events.component";
import { VolunteerPendingComponent } from "./administrator/volunteer-applications/volunteer-pending/volunteer-pending.component";
import { MyAccountPageComponent } from "./volunteer/my-account-page/my-account-page.component";
import { ViewVolunteerInfoComponent } from "./volunteer/view-volunteer-info/view-volunteer-info.component";
import { VolunteerSideEventsComponent } from "./volunteer/volunteer-side-events/volunteer-side-events.component";
import { VolunteerContainerComponent } from "./volunteer/volunteer-container/volunteer-container.component";
import { AnimalManagementComponent } from "./administrator/animal-management/animal-management.component";
import { ViewVolunteerComponent } from "./administrator/view-volunteer/view-volunteer.component";
import { ViewAdminProfileComponent } from "./administrator/view-admin-profile/view-admin-profile.component";
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
import { VolunteerArchiveComponent } from "./administrator/volunteer-applications/volunteer-archive/volunteer-archive.component";
import { FosterPendingComponent } from './administrator/foster-applications/foster-pending/foster-pending.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "volunteer-application", component: VolunteerFormComponent },
  { path: "foster-application", component: FosterFormComponent },
  { path: "dog-application", component: DogFormComponent },
  { path: "cat-application", component: FormLayoutComponent },
  { path: "reset-password", component: ResetPasswordComponent },

  {
    path: "login",
    // component: AuthComponent
    component: MainPageComponent,
  },
  {
    path: "admin",
    component: AdminContainerComponent,
    canActivate: [AuthGuard],
    children: [
      // { path: "animals", component: AnimalManagementComponent },
      // { path: "adoptions", component: ManageAdoptionsComponent },
      { path: "cat", component: ManageCatApplicationComponent },
      { path: "dog", component: ManageDogApplicationComponent },
      { path: "volunteerarchive", component: VolunteerArchiveComponent },
      { path: "applications", component: VolunteerPendingComponent },
      { path: "fosterarchive", component: FosterArchiveComponent },
      { path: "fosterapplications", component: FosterPendingComponent },
      { path: "events", component: ViewEventsComponent },
      { path: "fosters", component: ViewFostersComponent },
      { path: "volunteers", component: ViewVolunteerComponent },
      { path: "profile", component: ViewAdminProfileComponent },
      { path: "", component: AdminContainerComponent },
      //   { path: "", component: AdminHeaderComponent }
    ],
  },
  {
    path: "volunteer",
    component: VolunteerContainerComponent,
    canActivate: [AuthUserGuard],
    // component:
    children: [
      { path: "account", component: ViewVolunteerAccountComponent },
      { path: "sideevents", component: VolunteerSideEventsComponent },
      // { path: "volunteerinfo", component: ViewVolunteerInfoComponent },
      { path: "", component: VolunteerContainerComponent },
      //   { path: "applications", component: ManageApplicationsComponent },
      //   { path: "events", component: ViewEventsComponent }
      //   { path: "", component: AdminHeaderComponent }
    ],
  },
  { path: "**", redirectTo: "/login" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
