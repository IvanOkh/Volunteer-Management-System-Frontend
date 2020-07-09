import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DogFormComponent } from "./dog-form.component";

const dogRoutes: Routes = [
  {
    path: "",
    component: DogFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(dogRoutes)],
  exports: [RouterModule],
})
export class DogRoutingModule {}
