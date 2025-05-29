import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  private readonly translateService = inject(TranslateService);

  title = 'hello_non_module';

  constructor() {
    this.translateService.addLangs(['de', 'en']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }
}
