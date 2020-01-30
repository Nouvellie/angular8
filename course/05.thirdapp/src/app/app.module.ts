import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// To import es.
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { CapitalizedPipe } from './pipes/capitalized.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }], // To change text. (es)
  bootstrap: [AppComponent]
})
export class AppModule { }
