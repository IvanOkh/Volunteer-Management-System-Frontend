import { Component, OnInit, OnDestroy } from "@angular/core";
import { VolunteerEventsService } from "src/app/shared/services/volunteer-events.service";
import { EventModel } from "src/app/shared/models/event.model";
import { EventStaffModel } from "src/app/shared/models/event-staff.model";
import { MatTreeFlatDataSource } from "@angular/material";

@Component({
  selector: "app-volunteer-side-events",
  templateUrl: "./volunteer-side-events.component.html",
  styleUrls: ["./volunteer-side-events.component.css"],
})
export class VolunteerSideEventsComponent implements OnInit {
  numberArray = []; //array to iterate "less/more details"
  activeEvents: EventModel[] = []; //array of active user specific events
  eventArrayHolder: EventStaffModel[] = []; //array of user specific event subscriptions

  constructor(private VES: VolunteerEventsService) {}

  //subscribe to two observables to keep updated events and event-registration arrays
  ngOnInit() {
    //start up service
    this.VES.initializeData();
    //subscribe to keep up to date events
    this.VES.backEndEvents.subscribe((data) => {
      this.activeEvents = data;
    });
    //subscribe to keep up to date event staff
    this.VES.eventStaffData.subscribe((data) => {
      // if (data != null) {
      // this.eventArrayHolder = [];
      this.eventArrayHolder = data;
      // }
    });
  }

  //Method which checks if user is registered for event in a currently displayed event card.
  defineStatus(eventID): boolean {
    // if (this.eventArrayHolder.length == 0) {
    //   return false;
    // }
    //check if events array contains the given eventID
    if (this.eventArrayHolder.find((e) => e.eventid == eventID)) {
      return true;
    }
    return false;
  }

  unregisterForEvent(idEvent: number) {
    //find idEvent in array of events
    // for (let ev of this.eventArrayHolder) {
    //   if (ev.eventid === idEvent) {
    //     this.VES.unregisterExistingEvent(idEvent);
    //   }
    // }
    this.VES.unregisterExistingEvent(idEvent);
  }

  registerForEvent(idEvent: number) {
    //   for (let ev of this.eventArrayHolder) {
    //     if (ev.eventid === idEvent) {
    //       return false;
    //     }
    //   }
    //   this.VES.registerNewEvent(idEvent);
    // }
    this.VES.registerNewEvent(idEvent);
  }
}
