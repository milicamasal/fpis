import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentSlipRoutingModule} from "./payment-slip-routing.module";
import {PaymentSlipComponent} from "./payment-slip.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { AddPaymentSlipComponent } from './add-payment-slip/add-payment-slip.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ViewPaymentSlipComponent } from './view-payment-slip/view-payment-slip.component';
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    PaymentSlipComponent,
    AddPaymentSlipComponent,
    ConfirmDialogComponent,
    ViewPaymentSlipComponent,
  ],
  imports: [
    CommonModule,
    PaymentSlipRoutingModule,
    ReactiveFormsModule,
    PanelModule,
    TableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    PaymentSlipComponent
  ],
  entryComponents:[AddPaymentSlipComponent, ConfirmDialogComponent, ViewPaymentSlipComponent]
})
export class PaymentSlipModule {
}
