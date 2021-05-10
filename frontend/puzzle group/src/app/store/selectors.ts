import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {Uplatnica} from "../model/uplatnica.model";
import {Valuta} from "../model/valuta.model";
import {Model} from "../model/model.model";
import {Radnik} from "../model/radnik.model";
import {Profaktura} from "../model/profaktura.model";
import {Drzava} from "../model/drzava.model";
import {Grad} from "../model/grad.model";
import {UgovorOPrevozu} from "../model/ugovor-o-prevozu.model";
import {NacinPlacanja} from "../model/nacin-placanja.model";
import {Korisnik} from "../model/korisnik.model";
import {StavkaProfakture} from "../model/stavka-profakture.model";

export interface State {
  uplatnice: Uplatnica[];
  valute: Valuta[];
  modeli: Model[];
  radnici: Radnik[];
  profakture: Profaktura[];
  drzave: Drzava[];
  gradovi: Grad[];
  gradoviSaDrzavaID: Grad[];
  ugovori: UgovorOPrevozu[];
  naciniPlacanja: NacinPlacanja[];
  korisnici: Korisnik[];
  selectedProfaktura: Profaktura;
  stavke: StavkaProfakture[];
  ukupanIznos: number;

  // selectedUplatnica: Uplatnica;
}

export const INIT_STATE: State = {
  uplatnice: [],
  valute: [],
  modeli: [],
  radnici: [],
  profakture: [],
  drzave: [],
  gradovi: [],
  gradoviSaDrzavaID: [],
  ugovori: [],
  naciniPlacanja: [],
  korisnici: [],
  selectedProfaktura: null,
  stavke: [],
  ukupanIznos: 0

  // selectedUplatnica: null
};
export const selectUplatnicaState = createFeatureSelector<State>('uplatnice');
export const getUplatnice = (state: State) => state.uplatnice;
export const getValute = (state: State) => state.valute;
export const getModeli = (state: State) => state.modeli;
export const getRadnici = (state: State) => state.radnici;
export const getProfakture = (state: State) => state.profakture;
export const getDrzave = (state: State) => state.drzave;
export const getGradovi = (state: State) => state.gradovi;
export const getGradoviSaDrzavaID = (state: State) => state.gradoviSaDrzavaID;
export const getUgovori = (state: State) => state.ugovori;
export const getNaciniPlacanja = (state: State) => state.naciniPlacanja;
export const getKorisnici = (state: State) => state.korisnici;
export const getSelectedProfaktura = (state: State) => state.selectedProfaktura;
export const getStavke = (state: State) => state.stavke;
export const getUkupanIznos = (state: State) => state.ukupanIznos;

// export const getSelectedUplatnica = (state: State) => state.selectedUplatnica;

export const selectUplatnice: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getUplatnice);
export const selectValute: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getValute);
export const selectModeli: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getModeli);
export const selectRadnici: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getRadnici);
export const selectProfakture: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getProfakture);
export const selectDrzave: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getDrzave);
export const selectGradovi: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getGradovi);
export const selectGradoviSaDrzavaID: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getGradoviSaDrzavaID);
export const selectUgovori: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getUgovori);
export const selectNaciniPlacanja: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getNaciniPlacanja);
export const selectKorisnici: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getKorisnici);
export const selectSelectedProfaktura: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getSelectedProfaktura);
export const selectStavke: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getStavke);
export const selectUkupanIznos: MemoizedSelector<object, any> = createSelector(selectUplatnicaState, getUkupanIznos);
