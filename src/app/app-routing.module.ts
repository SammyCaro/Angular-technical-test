import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WithdrawComponent } from './withdrawal/withdraw/withdraw.component';
import { SuccessComponent } from './withdrawal/success/success.component';

const routes: Routes = [
  {
    path: '',
    component: WithdrawComponent,
    pathMatch: 'full',
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
