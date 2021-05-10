import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Uplatnica} from "../model/uplatnica.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import {MatDialog} from "@angular/material/dialog";
import {selectProfakture} from "../store/selectors";
import {takeUntil} from "rxjs/operators";
import {
  clearSelectedProfaktura,
  clearStavkeProfakture,
  deleteProfaktura,
  deleteStavkaProfakture,
  getAllProfaktura,
  setSelectedProfaktura
} from "../store/actions";
import {ConfirmDialogComponent} from "../payment-slip/confirm-dialog/confirm-dialog.component";
import {Profaktura} from "../model/profaktura.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ViewProfakturaComponent} from "./view-profaktura/view-profaktura.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profaktura',
  templateUrl: './profaktura.component.html',
  styleUrls: ['./profaktura.component.css']
})
export class ProfakturaComponent implements OnInit, OnChanges, OnDestroy {


  profakture: Profaktura[];
  form: FormGroup;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService

  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadProfakture();
  }

  ngOnInit(): void {
    this.store$.dispatch(clearSelectedProfaktura({}));
    this.store$.dispatch(clearStavkeProfakture({}));
    this.loadProfakture();

    this.store$.select(selectProfakture)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((profakture: Profaktura[]) => {
          if (profakture) {
            this.profakture = profakture;
          }
        }
      );
  }


  loadProfakture() {
    this.store$.dispatch(getAllProfaktura({}));
  }

  addProfaktura() {
    this.router.navigate(['add'], {relativeTo: this.route});

  }

  editProfaktura(profaktura: Profaktura) {
    this.store$.dispatch(setSelectedProfaktura({profaktura: profaktura}))
    this.store$.dispatch(deleteStavkaProfakture({stavke: profaktura.stavke, ukupanIznos: profaktura.iznos}))
    this.router.navigate(['add/'], {relativeTo: this.route});

  }
  viewProfaktura(profaktura: Profaktura){
    this.dialog.open(ViewProfakturaComponent, {
      width: '1200px',
      data: profaktura
    })
  }
  deleteProfaktura(profaktura: Profaktura) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Brisanje profakture',
        message: 'Da li ste sigurni da zelite da obrisete profakturu sa brojem: ' + profaktura.brojProfakture +'?'
      },
      autoFocus: false
    }).afterClosed().subscribe(answer => {
      if (answer) {
        this.store$.dispatch(deleteProfaktura({brojProfakture: profaktura.brojProfakture}));
        this.toastr.success("Uspesno obrisana profaktura!", "", {timeOut: 2000})

        this.loadProfakture();
      }
    });

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}
