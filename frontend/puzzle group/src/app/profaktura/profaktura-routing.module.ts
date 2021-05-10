import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PaymentSlipComponent} from "../payment-slip/payment-slip.component";
import {ProfakturaComponent} from "./profaktura.component";
import {AddProfakturaComponent} from "./add-profaktura/add-profaktura.component";


const routes: Routes = [
  {
    path: '',
    component: ProfakturaComponent,
  },
  {
    path: 'add',
    component: AddProfakturaComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProfakturaRoutingModule { }
