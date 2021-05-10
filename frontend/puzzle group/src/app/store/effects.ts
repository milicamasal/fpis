import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';

import {
  deleteProfaktura, deleteProfakturaError, deleteProfakturaSuccess,
  deleteUplatnica,
  deleteUplatnicaError,
  deleteUplatnicaSuccess,
  getAllDrzava,
  getAllDrzavaError,
  getAllDrzavaSuccess,
  getAllGrad,
  getAllGradError,
  getAllGradSaDrzavaID,
  getAllGradSaDrzavaIDError,
  getAllGradSaDrzavaIDSuccess,
  getAllGradSuccess,
  getAllKorisnik,
  getAllKorisnikError,
  getAllKorisnikSuccess,
  getAllModel,
  getAllModelError,
  getAllModelSuccess,
  getAllNacinPlacanja,
  getAllNacinPlacanjaError,
  getAllNacinPlacanjaSuccess,
  getAllProfaktura,
  getAllProfakturaError,
  getAllProfakturaSuccess,
  getAllRadnik,
  getAllRadnikError,
  getAllRadnikSuccess,
  getAllUgovorOPrevozu,
  getAllUgovorOPrevozuError,
  getAllUgovorOPrevozuSuccess,
  getAllUplatnica,
  GetAllUplatnica,
  getAllUplatnicaError,
  getAllUplatnicaSuccess,
  getAllValuta,
  getAllValutaError,
  getAllValutaSuccess,
  getOneProfaktura,
  getOneProfakturaError,
  getOneProfakturaSuccess,
  saveProfaktura, saveProfakturaError,
  saveProfakturaSuccess,
  saveUplatnica,
  saveUplatnicaError,
  saveUplatnicaSuccess
} from "./actions";
import {Api} from "../api/api";
import {of} from "rxjs";

@Injectable()
export class EffectsUplatnica {
  constructor(
    private action$: Actions,
    private api: Api,
  ) {
  }

  getAllUplatnicaEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllUplatnica),
    switchMap(() => this.api.getAllUplatnica().pipe(
      switchMap(uplatnice => of(
        getAllUplatnicaSuccess({uplatnice: uplatnice}),
      )),
      catchError(error => of(
        getAllUplatnicaError({error}),
      ))
    ))
  ));
  getAllValutaEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllValuta),
    switchMap(() => this.api.getAllValuta().pipe(
      switchMap(valute => of(
        getAllValutaSuccess({valute: valute}),
      )),
      catchError(error => of(
        getAllValutaError({error}),
      ))
    ))
  ));
  getAllGradEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllGrad),
    switchMap(() => this.api.getAllGrad().pipe(
      switchMap(gradovi => of(
        getAllGradSuccess({gradovi: gradovi}),
      )),
      catchError(error => of(
        getAllGradError({error}),
      ))
    ))
  ));
  getAllDrzavaEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllDrzava),
    switchMap(() => this.api.getAllDrzava().pipe(
      switchMap(drzave => of(
        getAllDrzavaSuccess({drzave: drzave}),

      )),
      catchError(error => of(
        getAllDrzavaError({error}),
      ))
    ))
  ));
  getAllGradsaDrzavaIDEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllGradSaDrzavaID),
    switchMap((action) => this.api.getAllGradSaDrzavaID(action.idDrzave).pipe(
      switchMap(gradovi => of(
        getAllGradSaDrzavaIDSuccess({gradoviSaDrzavaID: gradovi}),
      )),
      catchError(error => of(
        getAllGradSaDrzavaIDError({error}),
      ))
    ))
  ));
  getAllModelEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllModel),
    switchMap(() => this.api.getAllModel().pipe(
      switchMap(modeli => of(
        getAllModelSuccess({modeli: modeli}),
      )),
      catchError(error => of(
        getAllModelError({error}),
      ))
    ))
  ));
  getAllKorisnikEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllKorisnik),
    switchMap(() => this.api.getAllKorisnik().pipe(
      switchMap(modeli => of(
        getAllKorisnikSuccess({korisnici: modeli}),
      )),
      catchError(error => of(
        getAllKorisnikError({error}),
      ))
    ))
  ));
  getAllNaciniPlacanjaEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllNacinPlacanja),
    switchMap(() => this.api.getAllNacinPlacanja().pipe(
      switchMap(modeli => of(
        getAllNacinPlacanjaSuccess({naciniPlacanja: modeli}),
      )),
      catchError(error => of(
        getAllNacinPlacanjaError({error}),
      ))
    ))
  ));
  getAllUgovoriEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllUgovorOPrevozu),
    switchMap(() => this.api.getAllUgovorOPrevozu().pipe(
      switchMap(ugovori => of(
        getAllUgovorOPrevozuSuccess({ugovori:ugovori}),
      )),
      catchError(error => of(
        getAllUgovorOPrevozuError({error}),
      ))
    ))
  ));
  getAllProfakturaEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllProfaktura),
    switchMap(() => this.api.getAllProfaktura().pipe(
      switchMap(profakture => of(
        getAllProfakturaSuccess({profakture: profakture}),
      )),
      catchError(error => of(
        getAllProfakturaError({error}),
      ))
    ))
  ));
  getOneProfakturaEffect$ = createEffect(() => this.action$.pipe(
    ofType(getOneProfaktura),
    switchMap((action) => this.api.getOneProfaktura(action.brojProfakture).pipe(
      switchMap(profaktura => of(
        getOneProfakturaSuccess({selectedProfaktura: profaktura}),
      )),
      catchError(error => of(
        getOneProfakturaError({error}),
      ))
    ))
  ));
  getAllRadnikEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllRadnik),
    switchMap(() => this.api.getAllRadnik().pipe(
      switchMap(radnici => of(
        getAllRadnikSuccess({radnici: radnici}),
      )),
      catchError(error => of(
        getAllRadnikError({error}),
      ))
    ))
  ));
  saveUplatnicaEffect$ = createEffect(() => this.action$.pipe(
    ofType(saveUplatnica),
    switchMap((action) => this.api.saveUplatnica(action.uplatnica).pipe(
      switchMap(uplatnica => of(
        saveUplatnicaSuccess({uplatnica: uplatnica}),
        getAllUplatnica({})
      )),
      catchError(error => of(
        saveUplatnicaError({error}),
      ))
    ))
  ));

  deleteUplatnicaEffect$ = createEffect(() => this.action$.pipe(
    ofType(deleteUplatnica),
    switchMap((action) => this.api.deleteUplatnica(action.idUplatnice).pipe(
      switchMap(() => of(
        // deleteUplatnicaSuccess({uplatnica: null}),
        deleteUplatnicaSuccess({idUplatnice: action.idUplatnice}),
        getAllUplatnica({})
      )),
      catchError(error => of(
        deleteUplatnicaError({error}),
      ))
    ))
  ));
  saveProfakturaEffect$ = createEffect(() => this.action$.pipe(
    ofType(saveProfaktura),
    switchMap((action) => this.api.saveProfaktura(action.profaktura).pipe(
      switchMap(uplatnica => of(
        saveProfakturaSuccess({profaktura: uplatnica}),
        getAllProfaktura({})
      )),
      catchError(error => of(
        saveProfakturaError({error}),
      ))
    ))
  ));

  deleteProfakturaEffect$ = createEffect(() => this.action$.pipe(
    ofType(deleteProfaktura),
    switchMap((action) => this.api.deleteProfaktura(action.brojProfakture).pipe(
      switchMap(() => of(
        deleteProfakturaSuccess({brojProfakture: action.brojProfakture}),
        getAllProfaktura({})
      )),
      catchError(error => of(
        deleteProfakturaError({error}),
      ))
    ))
  ));


}
