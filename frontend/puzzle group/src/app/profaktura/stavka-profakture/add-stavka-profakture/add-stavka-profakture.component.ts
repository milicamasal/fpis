import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StavkaProfakture} from "../../../model/stavka-profakture.model";

@Component({
  selector: 'app-add-stavka-profakture',
  templateUrl: './add-stavka-profakture.component.html',
  styleUrls: ['./add-stavka-profakture.component.css']
})
export class AddStavkaProfaktureComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store$: Store<AppState>,
              private dialogRef: MatDialogRef<AddStavkaProfaktureComponent>,
              @Inject(MAT_DIALOG_DATA) public data: StavkaProfakture) {
  }

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.patchFormValues();
    }

  }

  initForm() {
    this.form = this.formBuilder.group({
      cena: [null, [Validators.required]],
      opis: [null, [Validators.required]],
      napomena: [null, [Validators.required]],
    });
  }

  patchFormValues() {
    this.form.patchValue({
      cena: this.data.cena,
      opis: this.data.opis,
      napomena: this.data.napomena,
    });
  }

  saveStavka() {
    let formData = this.form.getRawValue();
console.log(formData)
    const stavka = {
      cena: formData.cena,
      opis: formData.opis,
      napomena: formData.napomena,
    } as StavkaProfakture;
    this.dialogRef.close(stavka);
  }
}
