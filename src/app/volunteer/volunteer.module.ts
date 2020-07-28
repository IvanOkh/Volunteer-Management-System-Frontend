// ANGULAR IMPORTS
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
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
import { ViewVolunteerAccountComponent } from "./view-volunteer-account/view-volunteer-account.component";
import { VolunteerRoutingModule } from "./volunteer-routing.module";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { AuthInterceptorService } from "../auth/auth-interceptor.service";

// MODULE DEFINITION
@NgModule({
  declarations: [
    VolunteerSideEventsComponent,
    VolunteerSideNavbarComponent,
    VolunteerContainerComponent,
    ViewVolunteerAccountComponent,
    FooterComponent,
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
    FooterComponent,
    VolunteerSideEventsComponent,
    VolunteerSideNavbarComponent,
    VolunteerContainerComponent,
    ViewVolunteerAccountComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VolunteerModule {}
