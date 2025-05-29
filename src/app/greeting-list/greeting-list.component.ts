import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-greeting-list',
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './greeting-list.component.html',
  styleUrl: './greeting-list.component.scss',
  standalone: true,
})
export class GreetingsListComponent {
  private readonly translateService = inject(TranslateService);
  greetings = [{ id: 'Hello!' }, { id: 'Welcome!' }, { id: 'Hi there!' }];

  changeLang() {
    const currentLang = this.translateService.currentLang;
    this.translateService.use(currentLang === 'en' ? 'de' : 'en');
  }
}
