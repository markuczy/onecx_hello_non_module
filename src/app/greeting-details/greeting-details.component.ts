import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greeting-details',
  imports: [],
  templateUrl: './greeting-details.component.html',
  styleUrl: './greeting-details.component.scss',
  standalone: true,
})
export class GreetingDetailsComponent implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }
}
