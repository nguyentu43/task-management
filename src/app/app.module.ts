import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { NgHttpCachingConfig, NgHttpCachingModule } from 'ng-http-caching';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile/profile.effects';
import { NuMarkdownModule } from '@ng-util/markdown';

registerLocaleData(en);

const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 1000 * 20,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig),
    BrowserAnimationsModule,
    ApiModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([ProfileEffects]),
    NuMarkdownModule.forRoot(),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
