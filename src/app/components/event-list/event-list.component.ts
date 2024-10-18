import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: true,
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  imports: [FormsModule, CommonModule, RouterModule], 
})
export class EventListComponent implements OnInit {
  events: any[] = [];
  eventType: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    const filters = {
      eventType: this.eventType,
      startDate: this.startDate,
      endDate: this.endDate
    };

    this.eventService.getEvents(filters).subscribe(
      data => this.events = data,
      error => console.error('Error fetching events', error)
    );
  }

  applyFilters() {
    this.getEvents();
  }
}
