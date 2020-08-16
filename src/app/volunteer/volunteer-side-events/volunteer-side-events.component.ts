import { Component, OnInit, OnDestroy } from "@angular/core";
import { VolunteerEventsService } from "src/app/shared/services/volunteer-events.service";
import { EventModel } from "src/app/shared/models/event.model";
import { EventStaffModel } from "src/app/shared/models/event-staff.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-volunteer-side-events",
  templateUrl: "./volunteer-side-events.component.html",
  styleUrls: ["./volunteer-side-events.component.css"],
})
export class VolunteerSideEventsComponent implements OnInit {
  numberArray = []; //array to iterate "less/more details"
  activeEvents$: Observable<EventModel[]>; //array of active user specific events
  eventArrayHolder: EventStaffModel[] = []; //array of user specific event subscriptions
  // isLoading: boolean = false; // loading status
  // isLoading2: boolean = false;

  constructor(private VES: VolunteerEventsService) {}

  ngOnInit() {
    document.body.scrollTop = 0;
    this.VES.initializeData();
    this.activeEvents$ = this.VES.backEndEvents$;
    this.initData();
  }

  private initData() {
    // this.isLoading = true;
    // this.isLoading2 = true;
    //start up service

    //subscribe to two observables to keep updated events and event-registration arrays
    this.VES.eventStaffData.subscribe((data) => {
      if (data != null) {
        this.eventArrayHolder = data;
        // this.isLoading = false;
      }
    });

    // this.activeEvents = this.VES.backEndEvents$;
    //subscribe to keep up to date events
    // this.VES.backEndEvents$.subscribe((idata) => {
    //   if (idata != null) {
    //     this.activeEvents = idata;
    //     this.isLoading2 = false;
    //   }
    // });
  }

  //Method that checks if user is registered for event in a currently displayed event card.
  defineStatus(eventID): boolean {
    if (this.eventArrayHolder.find((e) => e.eventid === eventID)) {
      // setTimeout(() => {
      //   return true;
      // }, 2000);
      return true;
    }
    // setTimeout(() => {
    //   return false;
    // }, 2000);
    return false;
  }

  unregisterForEvent(idEvent: number) {
    this.VES.unregisterExistingEvent(idEvent);
  }

  registerForEvent(idEvent: number) {
    this.VES.registerNewEvent(idEvent);
  }
}
