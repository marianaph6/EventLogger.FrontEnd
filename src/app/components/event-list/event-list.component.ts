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
  EventType: string = '';
  StartDate: string = '';
  EndDate: string = '';
  errorMessage: string = '';  // Variable para manejar errores

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    const filters = {
      EventType: this.EventType,
      StartDate: this.StartDate,
      EndDate: this.EndDate
    };

    this.errorMessage = '';  // Limpiar mensaje de error antes de hacer la solicitud

    this.eventService.getEvents(filters).subscribe(
      (data) => {
        this.events = data;
        if (this.events.length === 0) {
          this.errorMessage = 'No se encontraron eventos que coincidan con los filtros aplicados.'; // Mensaje para lista vacía
        }
      },
      (error) => {
        this.events = [];  // Asegurar que no haya eventos visibles en caso de error
        this.errorMessage = error.message || 'Ha ocurrido un error al obtener los eventos.';  // Capturar y mostrar el error
        console.error('Error fetching events', error);
      }
    );
  }

  applyFilters() {
    this.getEvents();
  }
}
