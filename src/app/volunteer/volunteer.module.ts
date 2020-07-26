// ANGULAR IMPORTS
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatIconModule,
  MatNativeDateModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatProgressSpinnerModule,
} from "@angular/material";

// COMPONENT IMPORTS
import { VolunteerSideEventsComponent } from "./volunteer-side-events/volunteer-side-events.component";
import { VolunteerSideNavbarComponent } from "./volunteer-side-navbar/volunteer-side-navbar.component";
import { VolunteerContainerComponent } from "./volunteer-container/volunteer-container.component";

// ROUTING MODULE IMPORT
import { AppRoutingModule } from "../app-routing.module";
import { ViewVolunteerAccountComponent } from "./view-volunteer-account/view-volunteer-account.component";
import { VolunteerRoutingModule } from "./volunteer-routing.module";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

// MODULE DEFINITION
@NgModule({
  declarations: [
    VolunteerSideEventsComponent,
    VolunteerSideNavbarComponent,
    VolunteerContainerComponent,
    ViewVolunteerAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
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

    VolunteerRoutingModule,
  ],
  exports: [
    VolunteerSideEventsComponent,
    VolunteerSideNavbarComponent,
    VolunteerContainerComponent,
    ViewVolunteerAccountComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class VolunteerModule {}
