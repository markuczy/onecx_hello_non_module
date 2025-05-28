import { Routes } from '@angular/router';
import { GreetingsListComponent } from './greeting-list/greeting-list.component';
import { GreetingDetailsComponent } from './greeting-details/greeting-details.component';

export const routes: Routes = [
  { path: '', component: GreetingsListComponent },
  { path: 'greeting/:id', component: GreetingDetailsComponent },
];
