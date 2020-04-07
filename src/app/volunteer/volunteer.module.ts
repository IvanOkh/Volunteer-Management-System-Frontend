// ANGULAR IMPORTS
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatIconModule
} from "@angular/material";

// COMPONENT IMPORTS
import { VolunteerSideEventsComponent } from "./volunteer-side-events/volunteer-side-events.component";
import { VolunteerSideNavbarComponent } from "./volunteer-side-navbar/volunteer-side-navbar.component";
import { VolunteerContainerComponent } from "./volunteer-container/volunteer-container.component";

// ROUTING MODULE IMPORT
import { AppRoutingModule } from "../app-routing.module";
import { ViewVolunteerAccountComponent } from "./view-volunteer-account/view-volunteer-account.component";
import { NaPipe } from '../shared/pipes/na.pipe';
import { MyAccountPageComponent } from './my-account-page/my-account-page.component';
import { ViewVolunteerInfoComponent } from './view-volunteer-info/view-volunteer-info.component';

// MODULE DEFINITION
@NgModule({
  declarations: [
    VolunteerSideEventsComponent,
    MyAccountPageComponent,
    VolunteerSideNavbarComponent,
    VolunteerContainerComponent,
    ViewVolunteerAccountComponent,
    ViewVolunteerInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    AppRoutingModule,
  ],
  exports: [
    VolunteerSideEventsComponent,
    VolunteerContainerComponent
  ],
  providers: []
})
export class VolunteerModule {}
