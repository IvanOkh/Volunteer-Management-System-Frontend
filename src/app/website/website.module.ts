// ANGULAR IMPORTS
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// ROUTING MODULE IMPORT
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { WebsiteContainerComponent } from "./website-container/website-container.component";
import { WebsiteRoutingModule } from "./website-routing.module";
// MODULE DEFINITION
@NgModule({
  declarations: [WebsiteContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    WebsiteRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class WebsiteModule {}
