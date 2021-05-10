import {Component, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {MatDialog} from "@angular/material/dialog";
import {addStavkaProfakture, deleteStavkaProfakture, saveUplatnica, setUkupanIznos} from "../../store/actions";
import {ConfirmDialogComponent} from "../../payment-slip/confirm-dialog/confirm-dialog.component";
import {AddStavkaProfaktureComponent} from "./add-stavka-profakture/add-stavka-profakture.component";
import {selectStavke, selectUplatnice} from "../../store/selectors";
import {takeUntil} from "rxjs/operators";
import {StavkaProfakture} from "../../model/stavka-profakture.model";

@Component({
  selector: 'app-stavka-profakture',
  templateUrl: './stavka-profakture.component.html',
  styleUrls: ['./stavka-profakture.component.css']
})
export class StavkaProfaktureComponent implements OnInit, OnDestroy {

  stavke: StavkaProfakture[];
  form: FormGroup;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  ukupanIznos: number = 0;

  constructor(private store$: Store<AppState>,
              private formBuilder: FormBuilder,
              private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.stavke = [];
    this.loadStavke()
  }


  addStavka() {
    this.dialog.open(AddStavkaProfaktureComponent, {
      disableClose: true,
      width: '700px',
    }).afterClosed().subscribe(stavka => {
      if (stavka) {
        this.store$.dispatch(addStavkaProfakture({stavka: stavka}));
        this.saberiStavke(this.stavke);
        this.store$.dispatch(setUkupanIznos({ukupanIznos: this.ukupanIznos}));
      }
    });
  }

  loadStavke() {
    this.store$.select(selectStavke)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((stavke: StavkaProfakture[]) => {
          if (stavke) {
            this.stavke = stavke;
          }
        }
      );
    ;
  }

  saberiStavke(stavke: StavkaProfakture[]) {
    this.ukupanIznos = 0;
    stavke.forEach(stavka => {
      this.ukupanIznos += +stavka.cena;

    })

  }

  editStavka(stavka: StavkaProfakture, i: number) {
    this.dialog.open(AddStavkaProfaktureComponent, {
      disableClose: true,
      width: '700px',
      data: stavka
    }).afterClosed().subscribe(stavka => {
      if (stavka) {
        this.stavke.splice(i, 1);
        this.stavke.push(stavka);

        this.saberiStavke(this.stavke);
        this.store$.dispatch(deleteStavkaProfakture({stavke: this.stavke, ukupanIznos: this.ukupanIznos}));
      }
    });
  }

  deleteStavka(stavka: StavkaProfakture, i: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Brisanje stavke',
        message: 'Da li ste sigurni da zelite da obrisete stavku sa opisom: ' + stavka.opis + '?'
      },
      autoFocus: false
    }).afterClosed().subscribe(answer => {
      if (answer) {
        this.stavke.splice(i, 1);
        this.saberiStavke(this.stavke);
        this.store$.dispatch(deleteStavkaProfakture({stavke: this.stavke, ukupanIznos: this.ukupanIznos}));
      }
    });

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
