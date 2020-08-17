import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventModel } from "src/app/shared/models/event.model";
import { EventsService } from "src/app/shared/services/events.service";

@Component({
  selector: "app-upcoming-events-page",
  templateUrl: "./upcoming-events-page.component.html",
  styleUrls: [
    "./upcoming-events-page.component.css",
    "../../website-style.css",
  ],
})
export class UpcomingEventsPageComponent implements OnInit {
  webSiteEvents$: Observable<EventModel[]>;

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    // http://68.66.193.100:8080/CARS/events-readonly GET
    this.webSiteEvents$ = this.eventService.loadPublicEvents();
  }
}
