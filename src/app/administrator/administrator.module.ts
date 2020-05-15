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
  MatProgressSpinnerModule
} from "@angular/material";


// COMPONENT IMPORTS
import { AdminContainerComponent } from "./admin-container/admin-container.component";
import { ViewEventsComponent } from "./view-events/view-events.component";
import { AdminSideNavbarComponent } from "./admin-side-navbar/admin-side-navbar.component";
import { VolunteerPendingComponent } from "./volunteer-applications/volunteer-pending/volunteer-pending.component";
import { AnimalManagementComponent } from "./animal-management/animal-management.component";
import { ViewVolunteerComponent } from "./view-volunteer/view-volunteer.component";
import { VolunteerArchiveComponent } from './volunteer-applications/volunteer-archive/volunteer-archive.component';

// ROUTING MODULE IMPORTS
import { AppRoutingModule } from "../app-routing.module";
import { ViewAdminProfileComponent } from "./view-admin-profile/view-admin-profile.component";
import { ViewFostersComponent } from "./view-fosters/view-fosters.component";
import { YesNoPipe } from '../shared/pipes/yes-no.pipe';
import { NaPipe } from '../shared/pipes/na.pipe';
import { ManageCatApplicationComponent } from './manage-cat-application/manage-cat-application.component';
import { ManageDogApplicationComponent } from './manage-dog-application/manage-dog-application.component';


@NgModule({
  declarations: [
    AdminContainerComponent,
    ViewEventsComponent,
    AdminSideNavbarComponent,
    VolunteerPendingComponent,
    AnimalManagementComponent,
    ViewAdminProfileComponent,
    ViewVolunteerComponent,
    ViewFostersComponent,
    VolunteerArchiveComponent,
    YesNoPipe,
    NaPipe,

    //manage cat and dog application components
    ManageCatApplicationComponent,
    ManageDogApplicationComponent
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

    AppRoutingModule
  ],
  exports: [
    AdminContainerComponent,
    ViewEventsComponent,
    AdminSideNavbarComponent,
    VolunteerPendingComponent,
    AnimalManagementComponent,
    ViewAdminProfileComponent,
    NaPipe,

    //manage dog and cat applications
    ManageCatApplicationComponent,
    ManageDogApplicationComponent
    ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdministratorModule {}
