import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Uplatnica} from "../model/uplatnica.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {takeUntil} from "rxjs/operators";
import {
  clearSelectedProfaktura,
  clearStavkeProfakture,
  deleteUplatnica,
  getAllUplatnica,
  saveUplatnica
} from "../store/actions";
import {AppState} from "../store/app.state";
import {selectUplatnice} from "../store/selectors";
import {AddPaymentSlipComponent} from "./add-payment-slip/add-payment-slip.component";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {ViewPaymentSlipComponent} from "./view-payment-slip/view-payment-slip.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-payment-slip',
  templateUrl: './payment-slip.component.html',
  styleUrls: ['./payment-slip.css']
})
export class PaymentSlipComponent implements OnInit, OnChanges, OnDestroy {

  uplatnice: Uplatnica[];
  form: FormGroup;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private toastr: ToastrService
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadUplatnice();
  }

  ngOnInit(): void {

    this.store$.dispatch(clearSelectedProfaktura({}));
    this.store$.dispatch(clearStavkeProfakture({}));
    this.loadUplatnice();

    this.store$.select(selectUplatnice)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((uplatnice: Uplatnica[]) => {
          if (uplatnice) {
            this.uplatnice = uplatnice;
          }
        }
      );
  }


  loadUplatnice() {
    this.store$.dispatch(getAllUplatnica({}));
  }

  addUplatnica() {
    this.dialog.open(AddPaymentSlipComponent, {
      disableClose: true,
      width: '800px',
    }).afterClosed().subscribe(uplatnica => {
      if (uplatnica) {
        this.store$.dispatch(saveUplatnica({uplatnica: uplatnica}));
        this.dialog.open(ViewPaymentSlipComponent, {
          width: '800px',
          data: uplatnica
        })
      }
    });


  }

  editUplatnica(uplatnica: Uplatnica) {
    console.log(uplatnica);
    this.dialog.open(AddPaymentSlipComponent, {
      disableClose: true,
      width: '800px',
      data: uplatnica
    }).afterClosed().subscribe(uplatnica => {
      if (uplatnica) {
        this.store$.dispatch(saveUplatnica({uplatnica: uplatnica}));
        this.viewUplatnica(uplatnica);
      }
    });
  }

  deleteUplatnica(uplatnica: Uplatnica) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Brisanje uplatnice',
        message: 'Da li ste sigurni da zelite da obrisete uplatnicu sa ID: ' + uplatnica.idUplatnice + '?'
      },
      autoFocus: false
    }).afterClosed().subscribe(answer => {
      if (answer) {
        this.store$.dispatch(deleteUplatnica({idUplatnice: uplatnica.idUplatnice}));
        this.toastr.success("Uspesno obrisana uplatnica!", "", {timeOut: 2000})

        this.loadUplatnice();
      }
    });

  }

  viewUplatnica(uplatnica: Uplatnica) {
    this.dialog.open(ViewPaymentSlipComponent, {
      width: '800px',
      data: uplatnica
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
