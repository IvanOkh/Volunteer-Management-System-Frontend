import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DogFormComponent } from "./dog-form.component";
import { DogRoutingModule } from "./dog-routing.module";
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [CommonModule, DogRoutingModule, FormsModule],
  declarations: [DogFormComponent],
})
export class DogFormModule {}
