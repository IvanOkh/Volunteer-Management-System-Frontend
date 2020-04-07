import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject } from "rxjs";

import { EventModel } from "../models/event.model";
import { AuthService } from "../../auth/auth.service";
import { EventStaffModel } from "../models/event-staff.model";
import { EventsService } from "./events.service";

@Injectable({
  providedIn: "root"
})
export class VolunteerEventsService {
  //this subject will hold array of EventStaff models.
  private EventStaffSource = new BehaviorSubject<EventStaffModel[]>(null);
  //asObservable operator can be used to transform a subject into an observable. This can be useful when you’d like to expose the data from the subject, but at the same time prevent having data inadvertently pushed into the subject
  eventStaffData = this.EventStaffSource.asObservable();
  //this subject holds array of Events
  backEndEvents = new BehaviorSubject<EventModel[]>(null);
  //dynamically updated current user id
  private userid: number;
  allEvents: EventModel[] = [];
  //this array will be loaded with active events
  events: EventModel[] = [];
  //eventStaffArray: EventStaffModel[] = [];
  todayDate = new Date().getTime();

  constructor(
    private ES: EventsService,
    private AS: AuthService,
    private http: HttpClient
  ) {}

  initializeData() {
    //temporary solution - load user ID
    this.userid = 1;
    //temporary solution - load subject with dummy data
    this.EventStaffSource.next(this.eventStaffArray);
    // this.backEndEvents.next(this.activeEvents);
    // this.events = this.loadActiveEvents();
    this.backEndEvents.next(this.loadActiveEvents());
  }

  //Method which loads unexpired events to 'events' array.
  loadActiveEvents(): EventModel[] {
    this.loadEvents();
    return this.events;
  }

  //Method which pushes new event staff subscription to subject array.
  registerNewEvent(neweventid: number) {
    let newEvent = new EventStaffModel(this.userid, neweventid);
    let tempESS = this.EventStaffSource.getValue();
    tempESS.push(newEvent);
    this.EventStaffSource.next(tempESS);
  }

  //Method that pushes modified (unsubscribed from) event to subject array
  updateEventArray(ap: EventStaffModel[]) {
    this.EventStaffSource.next(ap);
  }
  //Method that filters data off expired events and return only active ones.
  loadEvents(): boolean {
    this.events = [];
    this.sendGetLoadEventsRequest().subscribe(response => {
      // this.events.splice(0, this.events.length);  // clear array
      response.body.forEach(e => {
        let eventDate = new Date(e.date).getTime();
        if (eventDate > this.todayDate) {
          this.events.push(e);
        }
      });
    });

    return true;
  }
  //Method that gets array of all events from back end.
  public sendGetLoadEventsRequest() {
    return this.http.get<EventModel[]>(
      "http://68.66.193.100:8080/CARS/events",
      {
        observe: "response"
      }
    );
  }

  //Method which loads event associated with current user id.
  getEventStuff() {
    // retreive list of events from the backend, push them to events[]
    this.sendGetLoadEventStaff().subscribe((data: EventStaffModel[]) => {
      data.forEach(staffEvent => {
        //if event staff id matchesone in response data then add event to eventStaffArray
        if ((staffEvent.staffid = this.userid)) {
          this.eventStaffArray.push(staffEvent);
        }
      });
    });
    return this.eventStaffArray;
  }

  //Method which gets eventStaffModel instances fron DB.
  public sendGetLoadEventStaff() {
    return this.http.get<EventStaffModel[]>("URL" + "eventstaff/");
  }

  //Method which sends user event registration to back end. Returns true if successful.
  registerForEvent(eventid: number, staffid: number) {
    let eventStaff = new EventStaffModel(eventid, staffid);
    if (eventStaff != null) {
      this.sendEventStaff(eventStaff).subscribe((responseData: string) => {
        console.log(responseData);
      });
      return true;
    }
    return false;
  }

  //Method which deletes user event registration from back end. Returns true if successful.
  unregisterFromEvent(eventid: number, staffid: number) {
    if (eventid != null && staffid != null) {
      this.sendDeleteEventStuff(eventid, staffid).subscribe(
        (responseData: string) => {
          console.log(responseData);
        }
      );
      return true;
    }
    return false;
  }

  //Method that posts an eventStaffModel instance to backend.
  public sendEventStaff(_eventStaff: EventStaffModel) {
    return this.http.post("URL" + "eventstaff/", _eventStaff, {
      responseType: "text"
    });
  }

  //Method that deletes backend eventStaffModel instance based on event and staff IDs.
  public sendDeleteEventStuff(eventid: number, staffid: number) {
    return this.http.delete("URL" + "eventstaff/" + eventid + "/" + staffid, {
      responseType: "text"
    });
  }

  //Temporary backend data
  eventStaffArray: EventStaffModel[] = [
    new EventStaffModel(1, 4),
    new EventStaffModel(1, 6)
  ];
  activeEvents: EventModel[] = [
    new EventModel(
      11,
      "Costco Charity",
      "Centro st",
      "very nice",
      "Raymand",
      "May",
      "15:00",
      "18:30"
    ),
    new EventModel(
      13,
      "Walmart Carnival",
      "16 Ave st",
      "very awesome",
      "Mags",
      "June",
      "19:00",
      "23:30"
    ),
    new EventModel(
      19,
      "Games with Max",
      "Cochrane",
      "Amazing party",
      "Ivan",
      "September 2023",
      "10:01",
      "23:59"
    )
  ];
}
