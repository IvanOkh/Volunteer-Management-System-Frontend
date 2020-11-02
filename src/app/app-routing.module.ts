import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { VolunteerFormComponent } from "./forms/volunteer-form/volunteer-form.component";
import { FosterFormComponent } from "./forms/foster-form/foster-form.component";
import { AuthGuard } from "./auth/auth.guard";
import { AuthUserGuard } from "./auth/auth-user.guard";
import { MainPageComponent } from "./shared/components/main-page/main-page.component";
import { ChangePasswordComponent } from "./shared/components/change-password/change-password.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

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
    path: "public",
    loadChildren: () =>
      import("./website/website.module").then((m) => m.WebsiteModule),
  },
  // { path: "develop", component: WebsiteContainerComponent },
  { path: "", redirectTo: "public", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
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
