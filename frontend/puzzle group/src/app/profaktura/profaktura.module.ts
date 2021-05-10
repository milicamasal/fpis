import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfakturaComponent} from "./profaktura.component";
import {ProfakturaRoutingModule} from "./profaktura-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {TableModule} from "primeng/table";
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { AddProfakturaComponent } from './add-profaktura/add-profaktura.component';
import {MatStepperModule} from "@angular/material/stepper";
import {PaymentSlipModule} from "../payment-slip/payment-slip.module";
import {MatDividerModule} from "@angular/material/divider";
import { StavkaProfaktureComponent } from './stavka-profakture/stavka-profakture.component';
import { AddStavkaProfaktureComponent } from './stavka-profakture/add-stavka-profakture/add-stavka-profakture.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ViewProfakturaComponent } from './view-profaktura/view-profaktura.component';



@NgModule({
  declarations: [ProfakturaComponent, AddProfakturaComponent, StavkaProfaktureComponent, AddStavkaProfaktureComponent, ViewProfakturaComponent],
  imports: [
    CommonModule,
    ProfakturaRoutingModule,
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
    MatStepperModule,
    PaymentSlipModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents:[AddStavkaProfaktureComponent, ViewProfakturaComponent]
})
export class ProfakturaModule { }
