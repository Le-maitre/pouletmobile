import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { format } from 'date-fns';


@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss'],
})
export class CalendrierComponent  implements OnInit {
  viewDate: Date = new Date(); // Current date

  // Example events data
  events: CalendarEvent[] = [
    {
      start: new Date(), // Event start date
      title: 'Example Event',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      }
    }
  ];
  currentMonth: string | undefined; // Variable to hold the current month

  constructor() {}

  ngOnInit() {
    this.currentMonth = this.getCurrentMonth(); // Get and set the current month
  }

  getCurrentMonth(): string {
    return format(this.viewDate, 'MMMM yyyy'); // Format the current date to display month and year
  }
}
