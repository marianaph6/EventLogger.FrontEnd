import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://localhost:7041/Events/create-event';

  constructor(private http: HttpClient) {}

  createEvent(event: { description: string; eventType: string }): Observable<any> {
    return this.http.post(this.apiUrl, event);
  }

   getEvents(filters: { eventType?: string; startDate?: string; endDate?: string }): Observable<any[]> {
     return this.http.get<any[]>(this.apiUrl, { params: filters });
  }
}
