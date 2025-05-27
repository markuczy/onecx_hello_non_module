import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(null, {
  providers: [provideRouter(routes)],
});
