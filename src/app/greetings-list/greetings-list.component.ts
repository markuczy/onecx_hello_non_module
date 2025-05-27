import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-greetings-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: 
})
export class GreetingsListComponent {
  greetings = ['Hello', 'Hi', 'Bonjour', 'Hola', 'Ciao'];
}
