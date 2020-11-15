import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { EventModel } from "src/app/shared/models/event.model";
import { EventsService } from "src/app/shared/services/events.service";
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css", "../../website-style.css"],
})
export class HomePageComponent implements OnInit {

  public webSiteEvents$: Observable<EventModel[]>;
  public events: EventModel[] = [];

  constructor(
    private eventService: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    this.webSiteEvents$ = this.eventService.loadPublicEvents();
    this.webSiteEvents$.subscribe(events => {
      this.events = events;
    })
  }

  onDonateClick() {
    this.onScroll();
    this.router.navigate(["/public/donatefunds"]);
  }

  onVolunteerClick() {
    this.onScroll();
    this.router.navigate(["/public/volunteer"]);
  }

  onMoreAnimalsClick() {
    this.onScroll();
    this.router.navigate(["/public/our-animals"]);
  }

  onMoreEventsClick() {
    this.onScroll();
    this.router.navigate(["/public/events"]);
  }

  onScroll() {
    document.body.scrollTop = 0;
  }

}
