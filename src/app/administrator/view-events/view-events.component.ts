import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { EventModel } from "src/app/shared/models/event.model";
import { EventsService } from "../../shared/services/events.service";
import { VolunteerEventsService } from "src/app/shared/services/volunteer-events.service";
import { EventStaffModel } from "src/app/shared/models/event-staff.model";
import { VolunteerService } from "src/app/shared/services/new-volunteer.service";
import { VolunteerForm } from "src/app/shared/models/volunteer-form.model";
import { FosterModel } from "src/app/shared/models/foster.model";
import { FostersService } from "src/app/shared/services/new-fosters.service";

@Component({
  selector: "app-view-events",
  templateUrl: "./view-events.component.html",
  styleUrls: ["./view-events.component.css", "../responsive-modal-style.css"],
  providers: [EventsService],
})
export class ViewEventsComponent implements OnInit {
  eventList: EventModel[] = []; // list of displayed events
  numberArray = []; // list to iterate "less/more details"
  public currentDate: Date; // current date of active session
  public isLoading = false; // loading status
  eventArrayHolder: EventStaffModel[] = []; //array of user event subscriptions
  numContainer: number;
  volunteerArray: VolunteerForm[] = [];
  fosterArray: FosterModel[] = [];

  constructor(
    private es: EventsService,
    private ves: VolunteerEventsService,
    private vs: VolunteerService,
    private fs: FostersService
  ) {}

  async ngOnInit() {
    // this.isLoading = true;
    //this.ves.initializeData;
    this.ves.getSubscriptionData();

    //subscribe to keep up to date event staff
    this.ves.eventStaffData.subscribe((data) => {
      this.eventArrayHolder = data;
      this.loadEvents();
    });
    //load active volunteers
    this.vs.loadVolunteers().subscribe(
      (responseData) => {
        this.volunteerArray = responseData;
        // console.log(this.volunteerArray);
      },
      (error: any) => {
        // console.log(error);
      }
    );

    //load active fosters
    this.fs.loadFosters().subscribe((responseData) => {
      this.fosterArray = responseData;
      // console.log(this.fosterArray);
    });

    this.currentDate = new Date();
    // this.isLoading = false;
    document.body.scrollTop = 0;
  }

  //Method that returns array of registered event specific volunteers
  getRegisteredUsers(eventID): VolunteerForm[] {
    let cont: VolunteerForm[] = [];
    for (let staffevents of this.eventArrayHolder) {
      if (staffevents.eventid === eventID) {
        for (let vols of this.volunteerArray) {
          // console.log("listong" + vols.id);
          if (vols.id === staffevents.staffid) {
            //console.log("id:" + eventID + " volunteer:" + vols.id);
            cont.push(vols);
          }
        }
      }
    }
    return cont;
  }
  //WORKING
  getRegisteredFosters(eventID): FosterModel[] {
    let cont: FosterModel[] = [];
    for (let staffevents of this.eventArrayHolder) {
      if (staffevents.eventid === eventID) {
        for (let fosts of this.fosterArray) {
          // console.log("listong" + vols.id);
          if (fosts.id === staffevents.staffid) {
            //console.log("id:" + eventID + " volunteer:" + vols.id);
            cont.push(fosts);
          }
        }
      }
    }
    return cont;
  }

  //Method that returns number of event specific user subscriptions
  defineNumberOfSubs(eventID): number {
    let bum: number = 0;
    for (let events of this.eventArrayHolder) {
      if (events.eventid == eventID) {
        bum++;
      }
    }
    return bum;
  }

  //Method that check if anybody has signed for an event
  defineSubscribers(eventID): boolean {
    if (this.eventArrayHolder.find((e) => e.eventid == eventID)) {
      return true;
    }
    return false;
  }

  onAdd(newEvent: EventModel): void {
    newEvent.id = 0;
    this.addEvent(newEvent);
  }

  onEdit(editsForm: NgForm): void {
    this.updateEvent(editsForm.value);
  }

  onDelete(eventID: number): void {
    this.deleteEvent(eventID);
  }

  isOpen(strDate: string): boolean {
    const eventDate: number = Date.parse(strDate);
    const cDate: number = Date.parse(this.currentDate.toDateString());
    return eventDate > cDate ? true : false;
  }

  /**
   * When a new modal is added, this will hide the addEvent modal while keeping the "Success" pop-up visible
   */
  hideModal() {
    var modal = document.getElementById("modalDia");
    modal.style.visibility = "hidden";
  }

  /**
   * Turns addEvent modal visible
   */
  resetModal() {
    var modal = document.getElementById("modalDia");
    modal.style.visibility = "visible";
  }

  private loadEvents(): void {
    this.isLoading = true;
    this.es.loadEvents().subscribe(
      (events: EventModel[]) => {
        // success
        this.eventList = [];
        events.forEach((event: EventModel) => {
          this.eventList.push(event);
        });
        this.isLoading = false;
      },
      () => {
        // error
        console.log("Events add HTTP response failed.");
        this.loadEvents();
        this.isLoading = false;
      }
    );
  }

  // private fetchEvent(eventID: number): EventModel {
  //   let event: EventModel;
  //   this.es.getEvent(eventID).subscribe(
  //     (responseEvent: EventModel) => {
  //       // success
  //       event = responseEvent;
  //     },
  //     (error: any) => {
  //       // error
  //       console.log("Events single_fetch HTTP response failed.");
  //       event = null;
  //       console.log(error);
  //     }
  //   );

  //   return event;
  // }

  private addEvent(newEvent: EventModel): void {
    this.es.addEvent(newEvent).subscribe(
      () => {
        // success
        this.loadEvents();
      },
      (error: any) => {
        // error
        console.log("Events add HTTP response failed.");
        console.log(error);
      }
    );
  }

  private updateEvent(changes: EventModel): void {
    this.es.updateEvent(changes).subscribe(
      () => {
        // success
        this.loadEvents();
      },
      () => {
        // error
        console.log("Events update HTTP response failed.");
      }
    );
  }

  private deleteEvent(id: number): void {
    this.es.removeEvent(id).subscribe(
      () => {
        this.loadEvents();
      },
      () => {
        console.log("Events delete HTTP response failed.");
      }
    );
  }
}
