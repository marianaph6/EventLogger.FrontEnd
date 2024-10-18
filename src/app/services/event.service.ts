import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://localhost:7041/Events';

  constructor(private http: HttpClient) {}

  createEvent(event: { description: string; eventType: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-event`, event);
  }

   getEvents(filters: { eventType?: string; startDate?: string; endDate?: string }): Observable<any[]> {
     return this.http.get<any[]>(`${this.apiUrl}/get-events`, { params: filters });
  }
}
