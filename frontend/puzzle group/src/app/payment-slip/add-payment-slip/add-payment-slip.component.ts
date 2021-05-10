import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Uplatnica} from "../../model/uplatnica.model";
import {Valuta} from "../../model/valuta.model";
import {Model} from "../../model/model.model";
import {Radnik} from "../../model/radnik.model";
import {Profaktura} from "../../model/profaktura.model";
import {getAllModel, getAllProfaktura, getAllRadnik, getAllValuta} from "../../store/actions";
import {selectModeli, selectProfakture, selectRadnici, selectUplatnice, selectValute} from "../../store/selectors";
import {takeUntil, timeout} from "rxjs/operators";
import {Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-payment-slip',
  templateUrl: './add-payment-slip.component.html',
  styleUrls: ['./add-payment-slip.component.css']
})
export class AddPaymentSlipComponent implements OnInit {

  form: FormGroup;
  valute: Valuta[];
  modeli: Model[];
  radnici: Radnik[];
  profakture: Profaktura[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(private formBuilder: FormBuilder,
              private store$: Store<AppState>,
              private dialogRef: MatDialogRef<AddPaymentSlipComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Uplatnica,
              private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.store$.dispatch(getAllValuta({}));
    this.store$.select(selectValute)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((valute: Valuta[]) => {
          if (valute) {
            this.valute = valute;
          }
        }
      );

    this.store$.dispatch(getAllModel({}));
    this.store$.select(selectModeli)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((modeli: Model[]) => {
          if (modeli) {
            this.modeli = modeli;
          }
        }
      );
    this.store$.dispatch(getAllRadnik({}));
    this.store$.select(selectRadnici)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((radnici: Radnik[]) => {
          if (radnici) {
            this.radnici = radnici;
          }
        }
      );
    this.store$.dispatch(getAllProfaktura({}));
    this.store$.select(selectProfakture)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((profakture: Profaktura[]) => {
          if (profakture) {
            this.profakture = profakture;
          }
        }
      );
    this.initForm();
    if (this.data
    ) {
      this.patchFormValues();
    }

  }

  initForm() {
    this.form = this.formBuilder.group({
      idUplatnice: [null],
      iznos: [null, [Validators.required]],
      svrhaUplate: [null, [Validators.required]],
      valuta: [null, [Validators.required]],
      model: [null, [Validators.required]],
      radnik: [null, [Validators.required]],
      profaktura: [null, [Validators.required]],
    });
  }

  patchFormValues() {
    this.form.patchValue({
      idUplatnice: this.data.idUplatnice,
      iznos: this.data.iznos,
      svrhaUplate: this.data.svrhaUplate,
      valuta: this.data.valuta,
      model: this.data.model,
      radnik: this.data.radnik,
      profaktura: this.data.profaktura,
    });
  }

  saveUplatnica() {
    let formData = this.form.getRawValue();

    const uplatnica = {
      idUplatnice: this.data ? this.data.idUplatnice : null,
      iznos: formData.iznos,
      svrhaUplate: formData.svrhaUplate,
      valuta: formData.valuta,
      model: formData.model,
      radnik: formData.radnik,
      profaktura: formData.profaktura,
    } as Uplatnica;
    this.dialogRef.close(uplatnica);
    this.toastr.success("Uspesno sacuvana uplatnica!", "", {timeOut: 2000})

  }

  compareFunctionValute(o1:Valuta, o2: Valuta
  ) {
    if (o1 != null && o2 != null)
      return (o1.nazivValute == o2.nazivValute && o1.idValute == o2.idValute);
  }

  compareFunctionModel(o1: Model, o2: Model
  ) {
    if (o1 != null && o2 != null)
      return (o1.idModela == o2.idModela && o1.opisModela == o2.opisModela);
  }

  compareFunctionProfaktura(o1: Profaktura, o2: Profaktura) {
    if (o1 != null && o2 != null)

      return o1.brojProfakture == o2.brojProfakture;
  }

  compareFunctionRadnik(o1:Radnik, o2: Radnik) {
    if (o1 != null && o2 != null)
      return o1.sifraRadnika == o2.sifraRadnika;
  }


}
