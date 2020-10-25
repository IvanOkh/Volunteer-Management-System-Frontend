import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject } from "rxjs";

import { EventModel } from "../models/event.model";
import { AuthService } from "../../auth/auth.service";
import { EventStaffModel } from "../models/event-staff.model";
import { EventsService } from "./events.service";

@Injectable({
  providedIn: "root",
})
export class VolunteerEventsService {
  //this subject will hold array of EventStaff models.
  private EventStaffSource = new BehaviorSubject<EventStaffModel[]>(null);
  //asObservable operator can be used to transform a subject into an observable. This can be useful when you’d like to expose the data from the subject, but at the same time prevent having data inadvertently pushed into the subject
  eventStaffData = this.EventStaffSource.asObservable();
  //this subject holds array of Events
  backEndEvents = new BehaviorSubject<EventModel[]>(null);
  backEndEvents$ = this.backEndEvents.asObservable();
  //dynamically updated current user id
  private userid: number;
  allEvents: EventModel[] = [];
  //this array will be loaded with active events
  events: EventModel[] = [];
  //eventStaffArray: EventStaffModel[] = [];
  todayDate = new Date().getTime();
  //container
  eventStaffArray: EventStaffModel[] = [];

  constructor(
    private ES: EventsService,
    private AS: AuthService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  initializeData() {
    //load user ID
    this.userid = +this.authService.user.getValue().id;
    //load list of user specific events
    if (this.loadActiveEvents != null) {
      this.backEndEvents.next(this.loadActiveEvents());
    }
    //push into subject
    if (this.getEventStaff() != null) {
      this.EventStaffSource.next(this.getEventStaff());
    }
  }

  //Method which loads all event staff data
  getSubscriptionData() {
    this.userid = +this.authService.user.getValue().id;
    this.EventStaffSource.next(this.loadSubscriptionData());
  }

  //Method which loads event associated with current user id.
  loadSubscriptionData() {
    this.eventStaffArray = [];
    // retreive list of events from the backend, push them to events[]
    this.sendGetLoadEventStaff().subscribe((data: EventStaffModel[]) => {
      if (data == null) {
        return this.eventStaffArray;
      }
      data.forEach((staffEvent) => {
        //if event staff id matchesone in response data then add event to eventStaffArray
        if (staffEvent != null) {
          this.eventStaffArray.push(staffEvent);
        }
      });
    });
    // console.log(this.eventStaffArray);
    return this.eventStaffArray;
  }

  //Method which loads unexpired events to 'events' array.
  loadActiveEvents(): EventModel[] {
    this.loadEvents();
    return this.events;
  }

  //Method which pushes new event staff subscription to subject array.
  registerNewEvent(neweventid: number) {
    this.registerForEvent(this.userid, neweventid);
  }

  //Method which pushes new event staff subscription to subject array.
  unregisterExistingEvent(eventid: number) {
    this.unregisterFromEvent(eventid);
  }

  //Method that filters data off expired events and return only active ones.
  loadEvents(): boolean {
    this.events = [];
    this.sendGetLoadEventsRequest().subscribe((response) => {
      // this.events.splice(0, this.events.length);  // clear array
      if (response.body != null) {
        response.body.forEach((e) => {
          let eventDate = new Date(e.date).getTime();
          if (eventDate > this.todayDate) {
            this.events.push(e);
          }
          this.events.sort((a: EventModel, b: EventModel) => {
            return +new Date(a.date) - +new Date(b.date);
          });
          return true;
        });
      }
    });
    return false;
  }
  //Method that gets array of all events from back end.
  public sendGetLoadEventsRequest() {
    return this.http.get<EventModel[]>(
      "http://199.195.116.225:8080/CARS/events",
      {
        observe: "response",
      }
    );
  }

  //Method which loads event associated with current user id.
  getEventStaff() {
    this.eventStaffArray = [];
    // retreive list of events from the backend, push them to events[]
    this.sendGetLoadEventStaff().subscribe((data: EventStaffModel[]) => {
      if (data == null) {
        return this.eventStaffArray;
      }
      data.forEach((staffEvent) => {
        //if event staff id matchesone in response data then add event to eventStaffArray
        if (staffEvent.staffid == this.userid) {
          this.eventStaffArray.push(staffEvent);
        }
      });
    });
    return this.eventStaffArray;
  }

  //Method which gets eventStaffModel instances fron DB.
  public sendGetLoadEventStaff() {
    return this.http.get<EventStaffModel[]>(
      "http://199.195.116.225:8080/CARS/" + "event-info/"
    );
  }

  //Method which sends user event registration to back end. Returns true if successful.
  registerForEvent(eventid: number, staffid: number) {
    let eventStaff = new EventStaffModel(eventid, staffid);
    if (eventStaff != null) {
      this.sendEventStaff(eventStaff).subscribe((responseData: string) => {
        console.log(responseData);
        this.EventStaffSource.next(this.getEventStaff());
        return true;
      });
    }
    return false;
  }

  //Method which deletes user event registration from back end. Returns true if successful.
  unregisterFromEvent(eventid: number) {
    if (eventid != null) {
      this.sendDeleteEventStuff(eventid, this.userid).subscribe(
        (responseData: string) => {
          console.log(responseData);
          this.EventStaffSource.next(this.getEventStaff());
          return true;
        }
      );
    }
    return false;
  }

  //Method that posts an eventStaffModel instance to backend.
  public sendEventStaff(_eventStaff: EventStaffModel) {
    return this.http.post(
      "http://199.195.116.225:8080/CARS/" + "/event-info/",
      _eventStaff,
      {
        responseType: "text",
      }
    );
  }

  //Method that deletes backend eventStaffModel instance based on event and staff IDs.
  public sendDeleteEventStuff(eventid: number, staffid: number) {
    return this.http.delete(
      "http://199.195.116.225:8080/CARS/" +
        "event-info/" +
        eventid +
        "/" +
        staffid,
      {
        responseType: "text",
      }
    );
  }
}
