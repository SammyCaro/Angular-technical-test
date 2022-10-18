import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawalPageComponent } from './withdrawal-page/withdrawal-page.component';

@NgModule({
  declarations: [WithdrawalPageComponent],
  imports: [CommonModule],
  exports: [WithdrawalPageComponent],
})
export class WithdrawalModule {}
