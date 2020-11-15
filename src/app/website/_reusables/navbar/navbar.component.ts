import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ElementRef,
} from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css", "../../website-style.css"],
})
export class NavbarComponent implements OnInit {
  moreTurn$ = new BehaviorSubject<boolean>(false);
  involvedTurn$ = new BehaviorSubject<boolean>(false);
  adoptionTurn$ = new BehaviorSubject<boolean>(false);
  dochangeText;
  changeText2;
  changeText3;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  onScroll() {
    document.body.scrollTop = 0;
  }

  onDonateClick() {
    this.onScroll();
    this.router.navigate(["/public/donatefunds"]);
  }

  //directives for up/down arrows
  onMoreTurn() {
    this.moreTurn$.value === false
      ? this.moreTurn$.next(true)
      : this.moreTurn$.next(false);
  }

  onInvolvedTurn() {
    this.involvedTurn$.value === false
      ? this.involvedTurn$.next(true)
      : this.involvedTurn$.next(false);
  }

  onAdoptionTurn() {
    this.adoptionTurn$.value === false
      ? this.adoptionTurn$.next(true)
      : this.adoptionTurn$.next(false);
  }
}
