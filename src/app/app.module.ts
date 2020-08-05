// ANGULAR IMPORTS
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material";
import { MatProgressSpinnerModule } from "@angular/material";

// COMPONENT IMPORTS
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AuthComponent } from "./auth/auth.component";

import { LoadingSpinnerComponent } from "./shared/components/loading-spinner/loading-spinner.component";
import { ResetPasswordComponent } from "./shared/components/reset-password/reset-password.component";
import { MainPageComponent } from "./shared/components/main-page/main-page.component";

import { FosterFormComponent } from "./forms/foster-form/foster-form.component";
import { VolunteerFormComponent } from "./forms/volunteer-form/volunteer-form.component";
import { FamilyMembersComponent } from "./forms/foster-form/family-members/family-members.component";
import { VolunteerModule } from "./volunteer/volunteer.module";
import { AdministratorModule } from "./administrator/administrator.module";
import { ChangePasswordComponent } from "./shared/components/change-password/change-password.component";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { WebsiteModule } from "./website/website.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FosterFormComponent,
    VolunteerFormComponent,
    FamilyMembersComponent,
    LoadingSpinnerComponent,

    ResetPasswordComponent,
    MainPageComponent,
    ChangePasswordComponent,
    // PageNotFoundComponent,
  ],
  imports: [
    // ANGULAR IMPORTS
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    // CUSTOM MODULES
    AppRoutingModule,
    VolunteerModule,
    AdministratorModule,
    WebsiteModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
