import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
  ],
};
