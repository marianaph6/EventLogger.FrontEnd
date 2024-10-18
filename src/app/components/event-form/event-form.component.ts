import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-form',
  standalone: true,
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
  imports: [FormsModule, CommonModule],
})
export class EventFormComponent {
  description: string = '';
  eventType: string = '';
  dateEvent: Date = new Date;
  errorMessage: string = '';

  constructor(private eventService: EventService) {}

  submitEvent() {
    this.errorMessage = '';
    const event = { description: this.description, eventType: this.eventType, dateEvent: new Date().toISOString() };
    this.eventService.createEvent(event).subscribe(
      response => {
        console.log('Event created successfully', response);
        this.description = '';
        this.eventType = '';
      },
      error => {
        this.errorMessage = error.message || 'Ha ocurrido un error al registrar el evento.';
      }
    );
  }
}
