// ANGULAR IMPORTS
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// ROUTING MODULE IMPORT
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { WebsiteContainerComponent } from "./website-container/website-container.component";
import { WebsiteRoutingModule } from "./website-routing.module";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";
import { VolunteerModule } from "../volunteer/volunteer.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomePageComponent } from "./home-page/home-page.component";
// MODULE DEFINITION
@NgModule({
  declarations: [
    WebsiteContainerComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    WebsiteRoutingModule,
    VolunteerModule,
  ],
  exports: [PageNotFoundComponent],
  providers: [],
  bootstrap: [],
})
export class WebsiteModule {}
