import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { EventModel } from "src/app/shared/models/event.model";
import { EventsService } from "../../shared/services/events.service";
import { VolunteerEventsService } from "src/app/shared/services/volunteer-events.service";

@Component({
  selector: "app-view-events",
  templateUrl: "./view-events.component.html",
  styleUrls: ["./view-events.component.css"],
  providers: [EventsService],
})
export class ViewEventsComponent implements OnInit {
  eventList: EventModel[] = []; // list of displayed events
  numberArray = []; // list to iterate "less/more details"
  public currentDate: Date; // current date of active session
  public isLoading = false; // loading status

  constructor(private es: EventsService, private ves: VolunteerEventsService) {}

  ngOnInit(): void {
    this.ves.initializeData;
    this.currentDate = new Date();
    this.loadEvents();
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
        this.isLoading = false;
      }
    );
  }

  private fetchEvent(eventID: number): EventModel {
    let event: EventModel;
    this.es.getEvent(eventID).subscribe(
      (responseEvent: EventModel) => {
        // success
        event = responseEvent;
      },
      (error: any) => {
        // error
        console.log("Events single_fetch HTTP response failed.");
        event = null;
        console.log(error);
      }
    );

    return event;
  }

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
