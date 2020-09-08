import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventModel } from "src/app/shared/models/event.model";
import { EventsService } from "src/app/shared/services/events.service";
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css", "../../website-style.css"],
})
export class HomePageComponent implements OnInit {

  webSiteEvents$: Observable<EventModel[]>;

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    document.body.scrollTop = 0;
    this.webSiteEvents$ = this.eventService.loadPublicEvents();
  }
}
