import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CatTableComponent } from "./cat-table/cat-table.component";
import { CatTable2Component } from "./cat-table2/cat-table2.component";
import { CurrentPreviousComponent } from "./current-previous/current-previous.component";
import { FamilyLifestyleComponent } from "./family-lifestyle/family-lifestyle.component";
import { FormComponent } from "./form/form.component";
import { FormLayoutComponent } from "./form-layout/form-layout.component";
import { HeaderComponent } from "./header/header.component";
import { NewPetInfoComponent } from "./new-pet-info/new-pet-info.component";
import { PhysicalCharacteristicsComponent } from "./physical-characteristics/physical-characteristics.component";
import { ReferencesComponent } from "./references/references.component";
import { YourHomeComponent } from "./your-home/your-home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { CatRoutingModule } from "./cat-routing.module";

@NgModule({
  declarations: [
    CatTableComponent,
    CatTable2Component,
    CurrentPreviousComponent,
    FamilyLifestyleComponent,
    FormComponent,
    FormLayoutComponent,
    HeaderComponent,
    NewPetInfoComponent,
    PhysicalCharacteristicsComponent,
    ReferencesComponent,
    YourHomeComponent,
  ],
  imports: [
    CatRoutingModule,
    CommonModule,
    // BrowserAnimationsModule,
    MatRadioModule,
    MatCheckboxModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
  ],
  exports: [
    FormLayoutComponent,
    FormComponent,
    FormLayoutComponent,
    FamilyLifestyleComponent,
    NewPetInfoComponent,
    PhysicalCharacteristicsComponent,
    CatTable2Component,
    ReferencesComponent,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: "accent" },
    },
  ],
})
export class CatFormModule {}
