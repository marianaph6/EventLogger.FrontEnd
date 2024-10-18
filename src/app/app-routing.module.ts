import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventListComponent } from './components/event-list/event-list.component';

const routes: Routes = [
  { path: 'event-form', component: EventFormComponent },
  { path: 'event-list', component: EventListComponent },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
];

export const appRoutes = routes;




