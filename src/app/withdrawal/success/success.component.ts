import { Component, OnInit } from '@angular/core';
import { WithdrawalService } from '../services/withdrawal-service.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  amount!: number;

  constructor(private withdrawService: WithdrawalService) {}

  ngOnInit(): void {
    this.amount = this.withdrawService.amount;
    console.log('success: ', this.amount);
  }
}
