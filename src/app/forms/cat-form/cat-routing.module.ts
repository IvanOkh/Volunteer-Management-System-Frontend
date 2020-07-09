import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormLayoutComponent } from "./form-layout/form-layout.component";

const catRoutes: Routes = [
  {
    path: "",
    component: FormLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(catRoutes)],
  exports: [RouterModule],
})
export class CatRoutingModule {}
