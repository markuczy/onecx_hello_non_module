import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-greeting-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: 
})
export class GreetingDetailComponent {
  greetings = ['Hello', 'Hi', 'Bonjour', 'Hola', 'Ciao'];
  greeting: string | undefined;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.greeting = this.greetings[id];
  }
}
