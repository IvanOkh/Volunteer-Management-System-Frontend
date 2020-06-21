// ANGULAR IMPORTS
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import {
  MatTableModule,
  MatFormFieldModule,
  MatIconModule,
  MatDialogModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatProgressSpinnerModule,
} from "@angular/material";

// COMPONENT IMPORTS
import { AdminContainerComponent } from "./admin-container/admin-container.component";
import { ViewEventsComponent } from "./view-events/view-events.component";
import { AdminSideNavbarComponent } from "./admin-side-navbar/admin-side-navbar.component";
import { VolunteerPendingComponent } from "./volunteer-applications/volunteer-pending/volunteer-pending.component";
import { ViewVolunteerComponent } from "./view-volunteer/view-volunteer.component";
import { VolunteerRejectedComponent } from "./volunteer-applications/volunteer-rejected/volunteer-rejected.component";

// ROUTING MODULE IMPORTS
import { AppRoutingModule } from "../app-routing.module";
import { ViewFostersComponent } from "./view-fosters/view-fosters.component";
import { YesNoPipe } from "../shared/pipes/yes-no.pipe";
import { NaPipe } from "../shared/pipes/na.pipe";
import { ManageCatApplicationComponent } from "./manage-cat-application/manage-cat-application.component";
import { ManageDogApplicationComponent } from "./manage-dog-application/manage-dog-application.component";
import { FosterPendingComponent } from "./foster-applications/foster-pending/foster-pending.component";
import { FosterRejectedComponent } from "./foster-applications/foster-rejected/foster-rejected.component";
import { DogRejectedComponent } from './manage-dog-application/dog-rejected/dog-rejected/dog-rejected.component';
import { CatRejectedComponent } from './manage-cat-application/cat-rejected/cat-rejected/cat-rejected.component';


@NgModule({
  declarations: [
    AdminContainerComponent,
    ViewEventsComponent,
    AdminSideNavbarComponent,
    VolunteerPendingComponent,
    ViewVolunteerComponent,
    ViewFostersComponent,
    VolunteerRejectedComponent,
    YesNoPipe,
    NaPipe,

    //manage cat and dog application components
    ManageCatApplicationComponent,
    ManageDogApplicationComponent,
    FosterPendingComponent,
    FosterRejectedComponent,
    DogRejectedComponent,
    CatRejectedComponent,
    // CatRejectedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,

    AppRoutingModule,
  ],
  exports: [
    AdminContainerComponent,
    ViewEventsComponent,
    AdminSideNavbarComponent,
    VolunteerPendingComponent,
    NaPipe,
    FosterPendingComponent,
    FosterRejectedComponent,
    //manage dog and cat applications
    ManageCatApplicationComponent,
    ManageDogApplicationComponent,
    FosterPendingComponent,
    FosterRejectedComponent,
    DogRejectedComponent
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdministratorModule {}
