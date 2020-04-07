// ANGULAR IMPORTS
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material";
import {MatProgressSpinnerModule} from '@angular/material'

// COMPONENT IMPORTS
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AuthComponent } from "./auth/auth.component";

import { LoadingSpinnerComponent } from "./shared/components/loading-spinner/loading-spinner.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ResetPasswordComponent } from "./shared/components/reset-password/reset-password.component";
import { MainPageComponent } from "./shared/components/main-page/main-page.component";

import { FosterFormComponent } from "./forms/foster-form/foster-form.component";
import { FamilyMembersComponent } from "./forms/foster-form/family-members/family-members.component";
import { DogFormComponent } from "./forms/dog-form/dog-form.component";
import { VolunteerFormComponent } from "./forms/volunteer-form/volunteer-form.component";
import { CatFormModule } from "./forms/cat-form/cat-form.module";

import { VolunteerModule } from "./volunteer/volunteer.module";
import { AdministratorModule } from "./administrator/administrator.module";
import { NaPipe } from './shared/pipes/na.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,

    FosterFormComponent,
    DogFormComponent,
    VolunteerFormComponent,
    FamilyMembersComponent,

    LoadingSpinnerComponent,
    FooterComponent,
    ResetPasswordComponent,
    MainPageComponent
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
    CatFormModule,
    VolunteerModule,
    AdministratorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
