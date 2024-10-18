import { Component } from '@angular/core';
import { EventFormComponent } from './components/event-form/event-form.component'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl : './app.component.css',
  imports: [RouterModule]
})
export class AppComponent {
  title = 'Event Logger';
}