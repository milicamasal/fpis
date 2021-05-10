import {Component, Inject, OnInit} from '@angular/core';
import {Profaktura} from "../../model/profaktura.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-view-profaktura',
  templateUrl: './view-profaktura.component.html',
  styleUrls: ['./view-profaktura.component.css']
})
export class ViewProfakturaComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ViewProfakturaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Profaktura
  ) {
  }

  ngOnInit(): void {
  }

}
