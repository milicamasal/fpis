import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Profaktura} from "../../model/profaktura.model";
import {Uplatnica} from "../../model/uplatnica.model";

@Component({
  selector: 'app-view-payment-slip',
  templateUrl: './view-payment-slip.component.html',
  styleUrls: ['./view-payment-slip.component.css']
})
export class ViewPaymentSlipComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ViewPaymentSlipComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Uplatnica
  ) {
  }

  ngOnInit(): void {
  }

}
