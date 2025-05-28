import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-greeting-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './greeting-list.component.html',
  styleUrl: './greeting-list.component.scss',
  standalone: true,
})
export class GreetingsListComponent {
  greetings = [{ id: 'Hello!' }, { id: 'Welcome!' }, { id: 'Hi there!' }];
}
