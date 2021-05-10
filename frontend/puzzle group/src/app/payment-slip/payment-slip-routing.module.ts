import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PaymentSlipComponent} from "./payment-slip.component";


const routes: Routes = [
  {
    path: '',
    component: PaymentSlipComponent,

  }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class PaymentSlipRoutingModule {
}
