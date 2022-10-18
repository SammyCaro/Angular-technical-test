import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WithdrawalModule } from './withdrawal/withdrawal.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WithdrawalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
