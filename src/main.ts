import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { polyfill } from 'mobile-drag-drop';
import { scrollBehaviourDragImageTranslateOverride } from "mobile-drag-drop/scroll-behaviour";


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  polyfill( {
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
  } );
  
  try {
    window.addEventListener( "touchmove", function() { }, { passive: false } );
  }
  catch(e){}
