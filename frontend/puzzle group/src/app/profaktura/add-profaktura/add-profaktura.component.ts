import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Radnik} from "../../model/radnik.model";
import {Grad} from "../../model/grad.model";
import {Drzava} from "../../model/drzava.model";
import {UgovorOPrevozu} from "../../model/ugovor-o-prevozu.model";
import {NacinPlacanja} from "../../model/nacin-placanja.model";
import {Profaktura} from "../../model/profaktura.model";
import {
  clearSelectedProfaktura,
  clearStavkeProfakture,
  getAllDrzava,
   getAllGradSaDrzavaID,
  getAllNacinPlacanja,
  getAllRadnik,
  getAllUgovorOPrevozu, saveProfaktura
} from "../../store/actions";
import {
  selectDrzave,
  selectGradoviSaDrzavaID,
  selectNaciniPlacanja,
  selectRadnici, selectSelectedProfaktura, selectStavke,
  selectUgovori, selectUkupanIznos
} from "../../store/selectors";
import {takeUntil} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Subject} from "rxjs";
import {StavkaProfakture} from "../../model/stavka-profakture.model";
import {ViewProfakturaComponent} from "../view-profaktura/view-profaktura.component";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-profaktura',
  templateUrl: './add-profaktura.component.html',
  styleUrls: ['./add-profaktura.component.css']
})
export class AddProfakturaComponent implements OnInit {
  form: FormGroup;
  profaktura: Profaktura;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  gradovi: Grad[] = [];
  drzave: Drzava[];
  stavke: StavkaProfakture[];
  ugovori: UgovorOPrevozu[];
  radnici: Radnik[];
  naciniPlacanja: NacinPlacanja[];
  isDrzavaSet: boolean = false;
  selectedDrzava: Drzava;
  iznos: number;

  constructor(private formBuilder: FormBuilder,
              private store$: Store<AppState>,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService
  ) {
  }

  ngOnInit() {

    this.store$.dispatch(getAllDrzava({}));
    this.store$.select(selectDrzave)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((drzave: Drzava[]) => {
          if (drzave) {
            this.drzave = drzave;
          }
        }
      );
    this.store$.dispatch(getAllUgovorOPrevozu({}));
    this.store$.select(selectUgovori)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((ugovori: UgovorOPrevozu[]) => {
          if (ugovori) {
            this.ugovori = ugovori;
          }
        }
      );

    this.store$.dispatch(getAllNacinPlacanja({}));
    this.store$.select(selectNaciniPlacanja)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((nacini: NacinPlacanja[]) => {
          if (nacini) {
            this.naciniPlacanja = nacini;
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

    this.store$.select(selectGradoviSaDrzavaID)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((gradovi: Grad[]) => {
          if (gradovi) {
            this.gradovi = gradovi;
          }
        }
      );

    this.initForm();
    this.store$.select(selectUkupanIznos)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((iznos: number) => {

          this.iznos = iznos;
          this.patchIznos();
        }
      );

    this.store$.select(selectSelectedProfaktura)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((profaktura: Profaktura) => {
          if (profaktura) {
            this.profaktura = profaktura;
          }
        }
      );
    if (this.profaktura != null) {
      this.patchFormValues();
    }

  }

  patchFormValues() {
    this.stavke = this.profaktura.stavke;
    this.form.patchValue({
      brojProfakture: this.profaktura.brojProfakture,
      iznos: this.profaktura.iznos,
      datumPrometa: new Date(this.profaktura.datumPrometa),
      datumIzdavanja: new Date(this.profaktura.datumIzdavanja),
      pozivNaBroj: this.profaktura.pozivNaBroj,
      radnik: this.profaktura.radnik,
      grad: this.profaktura.grad,
      drzava: this.profaktura.drzava,
      ugovor: this.profaktura.ugovor,
      stavke: this.stavke,
      naciniPlacanja: this.profaktura.nacinPlacanja,
    });
    this.setSelectedDrzava(this.profaktura.drzava, true);
  }

  setSelectedDrzava(drzava: Drzava, isSet: boolean) {
    this.isDrzavaSet = isSet;
    this.selectedDrzava = drzava;
    this.store$.dispatch(getAllGradSaDrzavaID({idDrzave: drzava.sifraDrzave}));

  }

  saveProfaktura() {
    let formData = this.form.getRawValue();
    this.store$.select(selectStavke)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((stavke: StavkaProfakture[]) => {
          if (stavke) {
            this.stavke = stavke;
          }
        }
      );
    const profaktura = {
      brojProfakture: this.profaktura != null ? formData.brojProfakture : null,
      iznos: formData.iznos,
      datumPrometa: formData.datumPrometa,
      datumIzdavanja: formData.datumIzdavanja,
      pozivNaBroj: formData.pozivNaBroj,
      radnik: formData.radnik,
      grad: formData.grad,
      drzava: formData.drzava,
      ugovor: formData.ugovor,
      stavke: this.stavke,
      nacinPlacanja: formData.naciniPlacanja,
    } as Profaktura;

    this.store$.dispatch(saveProfaktura({profaktura: profaktura}));

    this.router.navigate(['profaktura'], );

      this.dialog.open(ViewProfakturaComponent, {
        width: '1200px',
        data: profaktura
      })
    this.toastr.success("Uspesno sacuvana profaktura!", "", {timeOut: 2000})

    this.store$.dispatch(clearStavkeProfakture({}));
    this.store$.dispatch(clearSelectedProfaktura({}));

  }

  initForm(): void {
    this.form = this.formBuilder.group({
      brojProfakture: [null],
      iznos: [{value: this.iznos, disabled: true}],
      datumPrometa: [null, [Validators.required]],
      datumIzdavanja: [null, [Validators.required]],
      pozivNaBroj: [null, [Validators.required]],
      radnik: [null, [Validators.required]],
      grad: [null, [Validators.required]],
      drzava: [null, [Validators.required]],
      ugovor: [null, [Validators.required]],
      stavkeProfakture: [null],
      naciniPlacanja: [null, [Validators.required]],
    });

  }

  patchIznos() {
    this.form.patchValue({
      iznos: this.iznos,

    });
  }

  compareFunctionDrzava(o1: Drzava, o2: Drzava) {
    if (o1 != null && o2 != null)
      return o1.sifraDrzave == o2.sifraDrzave;
  }

  compareFunctionGrad(o1: Grad, o2: Grad) {
    if (o1 != null && o2 != null)
      return o1.postanskiBroj == o2.postanskiBroj;
  }

  compareFunctionRadnik(o1: Radnik, o2: Radnik) {
    if (o1 != null && o2 != null)
      return o1.sifraRadnika == o2.sifraRadnika;
  }

  compareFunctionUgovor(o1: UgovorOPrevozu, o2: UgovorOPrevozu) {
    if (o1 != null && o2 != null)
      return o1.brojUgovora == o2.brojUgovora;
  }
  compareFunctionNaciniPlacanja(o1: NacinPlacanja, o2: NacinPlacanja) {
    if (o1 != null && o2 != null)
      return o1.nacinid == o2.nacinid;
  }
}
