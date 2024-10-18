import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-form',
  standalone: true,
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
  imports: [FormsModule,CommonModule, RouterModule], 
})
export class EventFormComponent {
  description: string = '';
  eventType: string = '';

  constructor(private eventService: EventService) {}

  submitEvent() {
    const event = { description: this.description, eventType: this.eventType };
    this.eventService.createEvent(event).subscribe(
      response => {
        console.log('Event created successfully', response);
        this.description = '';
        this.eventType = '';
      },
      error => console.error('Error creating event', error)
    );
  }
}
