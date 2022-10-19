import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Withdraw } from '../interfaces/withdrawal.interface';
import { WithdrawalService } from '../services/withdrawal-service.service';

import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-withdrawal-page',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css', '../../app.component.css'],
})
export class WithdrawComponent implements OnInit {
  withdrawInfo: Withdraw[] = [];
  withdrawAmount!: number[];
  userAmount: number = 0;
  userSecondAmount: number = 0;
  /* second goal */
  secondGoalAmount: number = 2000512;

  customAmount: number = 0;
  customAmount2: number = 0;

  count: number = 0;

  /* toggle buttons */
  show: boolean = false;
  showSecondGoal: boolean = false;
  /* disable button */
  disableButton: boolean = false;

  loading: boolean = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(
    private withdrawService: WithdrawalService,
    private _router: Router
  ) {}

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

    this.count++;
    if (this.count % 2 === 0) {
      this.userAmount = 0;
    }
  }

  withdrawSecondGoal() {
    this.userSecondAmount = this.secondGoalAmount;
    this.count++;
    if (this.count % 2 === 0) {
      this.userSecondAmount = 0;
    }
  }

  showCustomAmountInput() {
    this.show = true;
  }

  showCustomAmountInput2() {
    this.showSecondGoal = true;
  }

  onKey(event: any) {
    this.userAmount = this.customAmount + this.customAmount2;

    if (
      this.userAmount > this.withdrawAmount[0] &&
      this.userSecondAmount > this.secondGoalAmount
    ) {
      this.userAmount = this.withdrawAmount[0];
      this.userSecondAmount = this.secondGoalAmount;
    } else if (this.userAmount < 0 && this.userSecondAmount < 0) {
      this.userAmount = 0;
      this.secondGoalAmount = 0;
    } else if (event.target.value === '' && event.target.value === '0') {
      this.userAmount = 0;
      this.secondGoalAmount = 0;
    }

    console.log('monto personalizado', this.userAmount);
  }

  backToButtons() {
    this.show = false;
  }

  backToButtons2() {
    this.showSecondGoal = false;
  }

  nextPage() {
    setTimeout(() => {
      if (this.userAmount > 0) {
        this._router.navigateByUrl('/success');
      } else if (this.userAmount <= 0) {
        this.disableButton = true;
      }
      this.disableButton = false;

      /* send user amount to a service */
      this.withdrawService.setWithdrawalAmount(
        this.userAmount + this.userSecondAmount
      );
    }, 3000);

    this.loading = true;
    console.log(this.loading);
  }
}
