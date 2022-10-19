import { Component, OnInit } from '@angular/core';

import { Withdraw } from '../interfaces/withdrawal.interface';
import { WithdrawalService } from '../services/withdrawal-service.service';

@Component({
  selector: 'app-withdrawal-page',
  templateUrl: './withdrawal-page.component.html',
  styleUrls: ['./withdrawal-page.component.css', '../../app.component.css'],
})
export class WithdrawalPageComponent implements OnInit {
  withdrawInfo: Withdraw[] = [];
  withdrawAmount!: number[];
  userAmount: number = 0;
  customAmount: number = 0;

  count: number = 0;

  /* toggle buttons */
  show: boolean = false;
  /* disable button */
  disableButton: boolean = true;

  /* second goal */
  secondGoalAmount: number = 2000512;

  constructor(private withdrawService: WithdrawalService) {}

  ngOnInit(): void {
    this.withdrawService.getWithdrawals().subscribe((data) => {
      this.withdrawInfo = data;

      this.withdrawAmount = this.withdrawInfo.slice(1, 2).map((item) => {
        return item.saldoDisponible;
      });
    });
  }

  withdrawAll() {
    this.userAmount = this.withdrawAmount[0];
    console.log('monto total', this.userAmount);

    /* detect if user has clicked button from two to two */
    this.count++;
    if (this.count % 2 === 0) {
      this.userAmount = 0;
    }
  }

  showCustomAmountInput() {
    this.show = true;
    console.log(this.show);
  }

  onKey(event: any) {
    this.userAmount = this.customAmount;

    if (this.userAmount > this.withdrawAmount[0]) {
      this.userAmount = this.withdrawAmount[0];
    } else if (this.userAmount < 0) {
      this.userAmount = 0;
    } else if (event.target.value === '' || event.target.value === '0') {
      this.userAmount = 0;
    }

    console.log('monto personalizado', this.userAmount);
  }

  backToButtons() {
    this.show = false;
  }

  nextPage() {
    if (this.userAmount === 0) {
      this.disableButton = true;
      console.log(this.disableButton);
    } else {
      this.disableButton = false;
      console.log(this.disableButton);
    }
  }
}
