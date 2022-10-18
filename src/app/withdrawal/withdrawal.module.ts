import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WithdrawalPageComponent } from './withdrawal-page/withdrawal-page.component';

@NgModule({
  declarations: [WithdrawalPageComponent],
  imports: [CommonModule, FormsModule],
  exports: [WithdrawalPageComponent],
})
export class WithdrawalModule {}
