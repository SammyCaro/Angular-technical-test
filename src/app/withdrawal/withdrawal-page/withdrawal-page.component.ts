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
}
