import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WithdrawComponent } from './withdraw/withdraw.component';
import { SuccessComponent } from './success/success.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WithdrawComponent, SuccessComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [WithdrawComponent, SuccessComponent],
})
export class WithdrawalModule {}
