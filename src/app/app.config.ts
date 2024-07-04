import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appReducers } from './state/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { buscarLivroEffect } from '../livros/state/livros.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(appReducers),
    provideEffects({ buscarLivroEffect })
]
};
