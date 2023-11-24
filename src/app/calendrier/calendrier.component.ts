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

  constructor() {}

  ngOnInit() {
  }
}
