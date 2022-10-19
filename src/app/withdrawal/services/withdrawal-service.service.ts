import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Withdraw } from '../interfaces/withdrawal.interface';

@Injectable({
  providedIn: 'root',
})
export class WithdrawalService {
  constructor(private http: HttpClient) {}

  getWithdrawals(): Observable<Withdraw[]> {
    const url: string = 'http://localhost:3000/metas';
    return this.http.get<Withdraw[]>(url);
  }

  /* get amount from withdraw component */
  public amount: number = 0;
  setWithdrawalAmount(amount: number) {
    this.amount = amount;
    console.log('servicio: ', this.amount);
  }
}
