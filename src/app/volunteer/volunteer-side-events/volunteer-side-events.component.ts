import { Component, OnInit, OnDestroy } from "@angular/core";
import { VolunteerEventsService } from "src/app/shared/services/volunteer-events.service";
import { EventModel } from "src/app/shared/models/event.model";
import { EventStaffModel } from "src/app/shared/models/event-staff.model";

@Component({
  selector: "app-volunteer-side-events",
  templateUrl: "./volunteer-side-events.component.html",
  styleUrls: ["./volunteer-side-events.component.css"]
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
    this.VES.backEndEvents.subscribe(data => {
      this.activeEvents = data;
    });
    //subscribe to keep up to date event staff
    this.VES.eventStaffData.subscribe(data => {
      this.eventArrayHolder = data;
    });
  }

  //Method which checks if user is registered for event in a currently displayed event card.
  defineStatus(eventID): boolean {
    //check if events array contains the given eventID
    if (this.eventArrayHolder.find(e => e.eventid == eventID)) {
      return true;
    }
    return false;
  }

  //testing REMOVE subscribe for event
  unregisterForEvent(idEvent: number) {
    //find idEvent in array of events
    for (let ev of this.eventArrayHolder) {
      if (ev.eventid === idEvent) {
        //set eventid to zero
        ev.eventid = 0;
        //push to subject
        this.VES.updateEventArray(this.eventArrayHolder);
      }
    }
  }

  //testing REGISTER subscribe for event
  registerForEvent(idEvent: number) {
    //error check
    // console.log(idEvent);
    for (let ev of this.eventArrayHolder) {
      if (ev.eventid === idEvent) {
        return false;
      }
    }
    this.VES.registerNewEvent(idEvent);
  }
}
