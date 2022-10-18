import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localEsCl from '@angular/common/locales/es-CL';

import { WithdrawalModule } from './withdrawal/withdrawal.module';

import { AppComponent } from './app.component';

registerLocaleData(localEsCl);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, WithdrawalModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
