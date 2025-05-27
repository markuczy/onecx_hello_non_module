import { Routes } from '@angular/router';
import { GreetingsListComponent } from './greetings-list/greetings-list.component';
import { GreetingDetailComponent } from './greeting-detail/greeting-detail.component';

export const routes: Routes = [
  { path: '', component: GreetingsListComponent },
  { path: 'greeting/:id', component: GreetingDetailComponent },
];
