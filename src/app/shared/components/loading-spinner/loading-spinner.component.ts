import { Component } from "@angular/core";
import {MatProgressSpinnerModule} from '@angular/material'

@Component({
  selector: "app-loading-spinner",
  template: '<mat-spinner></mat-spinner>',
  styleUrls: ["./loading-spinner.component.css"]
})
export class LoadingSpinnerComponent {}
