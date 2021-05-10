import {Action, createReducer, on} from "@ngrx/store";
import {
  addStavkaProfakture, clearSelectedProfaktura, clearStavkeProfakture, deleteStavkaProfakture,
  getAllDrzavaSuccess, getAllGradSaDrzavaIDSuccess,
  getAllGradSuccess, getAllKorisnikSuccess,
  getAllModelSuccess, getAllNacinPlacanja, getAllNacinPlacanjaSuccess, getAllProfakturaSuccess,
  getAllRadnikSuccess, getAllUgovorOPrevozuSuccess,
  getAllUplatnicaSuccess,
  getAllValutaSuccess, getOneProfakturaSuccess, setSelectedProfaktura, setUkupanIznos
} from "./actions";
import {INIT_STATE, State} from "./selectors";

export function reducer(state: State, action: Action) {
  const uplatnicaReducer = createReducer(
    INIT_STATE,
    on(getAllUplatnicaSuccess, (state, {uplatnice}) => ({...state, uplatnice: uplatnice})),
    on(getAllValutaSuccess, (state, {valute}) => ({...state, valute: valute})),
    on(getAllModelSuccess, (state, {modeli}) => ({...state, modeli: modeli})),
    on(getAllRadnikSuccess, (state, {radnici}) => ({...state, radnici: radnici})),
    on(getAllProfakturaSuccess, (state, {profakture}) => ({...state, profakture: profakture})),
    on(getAllGradSuccess, (state, {gradovi}) => ({...state, gradovi: gradovi})),
    on(getAllDrzavaSuccess, (state, {drzave}) => ({...state, drzave: drzave})),
    on(getAllGradSaDrzavaIDSuccess, (state, {gradoviSaDrzavaID}) => ({...state, gradoviSaDrzavaID: gradoviSaDrzavaID})),
    on(getAllUgovorOPrevozuSuccess, (state, {ugovori}) => ({...state, ugovori: ugovori})),
    on(getAllNacinPlacanjaSuccess, (state, {naciniPlacanja}) => ({...state, naciniPlacanja: naciniPlacanja})),
    on(getAllKorisnikSuccess, (state, {korisnici}) => ({...state, korisnici: korisnici})),
    on(getOneProfakturaSuccess, (state, {selectedProfaktura}) => ({...state, selectedProfaktura: selectedProfaktura})),
    on(addStavkaProfakture, (state, {stavka}) => ({...state, stavke: [...state.stavke, stavka]})),
    on(deleteStavkaProfakture, (state, {stavke, ukupanIznos}) => ({
      ...state,
      stavke: stavke,
      ukupanIznos: ukupanIznos
    })),
    on(setUkupanIznos, (state, {ukupanIznos}) => ({...state, ukupanIznos: ukupanIznos})),
    on(setSelectedProfaktura, (state, {profaktura}) => ({...state, selectedProfaktura: profaktura})),
    on(clearSelectedProfaktura, (state, {}) => ({...state, selectedProfaktura: null})),

    on(clearStavkeProfakture, (state) => ({...state, stavke: [], ukupanIznos: 0}))
  );
  return uplatnicaReducer(state, action);
}
