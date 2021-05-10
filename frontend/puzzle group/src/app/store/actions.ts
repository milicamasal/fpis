import { createAction, props} from '@ngrx/store';
import {Uplatnica} from "../model/uplatnica.model";
import {Valuta} from "../model/valuta.model";
import {Model} from "../model/model.model";
import {Radnik} from "../model/radnik.model";
import {Profaktura} from "../model/profaktura.model";
import {Drzava} from "../model/drzava.model";
import {Grad} from "../model/grad.model";
import {Korisnik} from "../model/korisnik.model";
import {NacinPlacanja} from "../model/nacin-placanja.model";
import {UgovorOPrevozu} from "../model/ugovor-o-prevozu.model";
import {StavkaProfakture} from "../model/stavka-profakture.model";


export const GetAllUplatnica = '[Uplatnica] Get All Uplatnica ';
export const GetAllUplatnicaSuccess = '[Uplatnica] Get All Uplatnica Success';
export const GetAllUplatnicaError = '[Uplatnica] Get All Uplatnica Error';

export const SaveUplatnica = '[Uplatnica] Save Uplatnica';
export const SaveUplatnicaSuccess = '[Uplatnica] Save Uplatnica Success';
export const SaveUplatnicaError = '[Uplatnica] Save Uplatnica Error';

export const DeleteUplatnica = '[Uplatnica] Delete Uplatnica';
export const DeleteUplatnicaSuccess = '[Uplatnica] Delete Uplatnica Success';
export const DeleteUplatnicaError = '[Uplatnica] Delete Uplatnica Error';

export const UpdateUplatnica = '[Uplatnica] Update Uplatnica';
export const UpdateUplatnicaSuccess = '[Uplatnica] Update Uplatnica Success';
export const UpdateUplatnicaError = '[Uplatnica] Update Uplatnica Error';

export const GetAllValuta = '[Uplatnica] Get All Valuta';
export const GetAllValutaSuccess = '[Uplatnica] Get All Valuta Success';
export const GetAllValutaError = '[Uplatnica] Get All Valuta Error';

export const GetAllGrad = '[Profaktura] Get All Grad';
export const GetAllGradSuccess = '[Profaktura] Get All Grad Success';
export const GetAllGradError = '[Profaktura] Get All Grad Error';

export const GetAllDrzava = '[Profaktura] Get All Drzava';
export const GetAllDrzavaSuccess = '[Profaktura] Get All Drzava Success';
export const GetAllDrzavaError = '[Profaktura] Get All Drzava Error';

export const GetAllGradSaDrzavaID = '[Profaktura] Get All GradSaDrzavaID';
export const GetAllGradSaDrzavaIDSuccess = '[Profaktura] Get All GradSaDrzavaID Success';
export const GetAllGradSaDrzavaIDError = '[Profaktura] Get All GradSaDrzavaID Error';

export const GetAllKorisnik = '[Profaktura] Get All Korisnik';
export const GetAllKorisnikSuccess = '[Profaktura] Get All Korisnik Success';
export const GetAllKorisnikError = '[Profaktura] Get All Korisnik Error';

export const GetAllNacinPlacanja = '[Profaktura] Get All NacinPlacanja';
export const GetAllNacinPlacanjaSuccess = '[Profaktura] Get All NacinPlacanja Success';
export const GetAllNacinPlacanjaError = '[Profaktura] Get All NacinPlacanja Error';

export const GetAllModel = '[Uplatnica] Get All Model';
export const GetAllModelSuccess = '[Uplatnica] Get All Model Success';
export const GetAllModelError = '[Uplatnica] Get All Model Error';

export const GetAllUgovorOPrevozu = '[Uplatnica] Get All UgovorOPrevozu';
export const GetAllUgovorOPrevozuSuccess = '[Uplatnica] Get All UgovorOPrevozu Success';
export const GetAllUgovorOPrevozuError = '[Uplatnica] Get All UgovorOPrevozu Error';

export const GetOneProfaktura = '[Uplatnica] Get OneProfaktura';
export const GetOneProfakturaSuccess = '[Uplatnica] Get OneProfaktura Success';
export const GetOneProfakturaError = '[Uplatnica] Get OneProfaktura Error';

export const GetAllRadnik = '[Uplatnica] Get All Radnik';
export const GetAllRadnikSuccess = '[Uplatnica] Get All Radnik Success';
export const GetAllRadnikError = '[Uplatnica] Get All Radnik Error';

export const GetAllProfaktura = '[Profaktura] Get All Radnik';
export const GetAllProfakturaSuccess = '[Profaktura] Get All Radnik Success';
export const GetAllProfakturaError = '[Profaktura] Get All Radnik Error';

export const SaveProfaktura = '[Profaktura] Save Profaktura';
export const SaveProfakturaSuccess = '[Profaktura] Save Profaktura Success';
export const SaveProfakturaError = '[Profaktura] Save Profaktura Error';

export const AddStavka = '[Profaktura] Add Stavka Profakture';
export const DeleteStavka = '[Profaktura] Delete Stavka Profakture';

export const DeleteProfaktura = '[Profaktura] Delete Profaktura';
export const DeleteProfakturaSuccess = '[Profaktura] Delete Profaktura Success';
export const DeleteProfakturaError = '[Profaktura] Delete Profaktura Error';

export const SetUkupanIznos = '[Profaktura] Set ukupan iznos';
export const ClearStavkeProfakture = '[Profaktura] Clear stavke profakture';
export const ClearSelectedProfaktura = '[Profaktura] Clear selected profaktura';
export const SetSelectedProfaktura = '[Profaktura] Set selected profaktura';

export const getAllUplatnica = createAction(GetAllUplatnica, props<{}>());
export const getAllUplatnicaSuccess = createAction(GetAllUplatnicaSuccess, props<{ uplatnice: Uplatnica[] }>());
export const getAllUplatnicaError = createAction(GetAllUplatnicaError, props<{ error: string }>());

export const saveUplatnica = createAction(SaveUplatnica, props<{ uplatnica: Uplatnica }>());
export const saveUplatnicaSuccess = createAction(SaveUplatnicaSuccess, props<{ uplatnica: Uplatnica }>());
export const saveUplatnicaError = createAction(SaveUplatnicaError, props<{ error: string }>());

export const updateUplatnica = createAction(UpdateUplatnica, props<{ uplatnica: Uplatnica }>());
export const updateUplatnicaSuccess = createAction(UpdateUplatnicaSuccess, props<{ uplatnica: Uplatnica }>());
export const updateUplatnicaError = createAction(UpdateUplatnicaError, props<{ error: string }>());

export const deleteUplatnica = createAction(DeleteUplatnica, props<{ idUplatnice: bigint }>());
export const deleteUplatnicaSuccess = createAction(DeleteUplatnicaSuccess, props<{ idUplatnice: bigint }>());
export const deleteUplatnicaError = createAction(DeleteUplatnicaError, props<{ error: string }>());

export const getAllValuta = createAction(GetAllValuta, props<{}>());
export const getAllValutaSuccess = createAction(GetAllValutaSuccess, props<{ valute: Valuta[] }>());
export const getAllValutaError = createAction(GetAllValutaError, props<{ error: string }>());

export const getAllModel = createAction(GetAllModel, props<{}>());
export const getAllModelSuccess = createAction(GetAllModelSuccess, props<{ modeli: Model[] }>());
export const getAllModelError = createAction(GetAllModelError, props<{ error: string }>());

export const getAllRadnik = createAction(GetAllRadnik, props<{}>());
export const getAllRadnikSuccess = createAction(GetAllRadnikSuccess, props<{ radnici: Radnik[] }>());
export const getAllRadnikError = createAction(GetAllRadnikError, props<{ error: string }>());

export const getAllProfaktura = createAction(GetAllProfaktura, props<{}>());
export const getAllProfakturaSuccess = createAction(GetAllProfakturaSuccess, props<{ profakture: Profaktura[] }>());
export const getAllProfakturaError = createAction(GetAllProfakturaError, props<{ error: string }>());

export const getAllDrzava = createAction(GetAllDrzava, props<{}>());
export const getAllDrzavaSuccess = createAction(GetAllDrzavaSuccess, props<{ drzave: Drzava[] }>());
export const getAllDrzavaError = createAction(GetAllDrzavaError, props<{ error: string }>());

export const getAllGrad = createAction(GetAllGrad, props<{}>());
export const getAllGradSuccess = createAction(GetAllGradSuccess, props<{ gradovi: Grad[] }>());
export const getAllGradError = createAction(GetAllGradError, props<{ error: string }>());


export const getAllGradSaDrzavaID = createAction(GetAllGradSaDrzavaID, props<{idDrzave: bigint}>());
export const getAllGradSaDrzavaIDSuccess = createAction(GetAllGradSaDrzavaIDSuccess, props<{ gradoviSaDrzavaID: Grad[] }>());
export const getAllGradSaDrzavaIDError = createAction(GetAllGradSaDrzavaIDError, props<{ error: string }>());

export const getAllKorisnik = createAction(GetAllKorisnik, props<{}>());
export const getAllKorisnikSuccess = createAction(GetAllKorisnikSuccess, props<{ korisnici: Korisnik[] }>());
export const getAllKorisnikError = createAction(GetAllKorisnikError, props<{ error: string }>());

export const getAllNacinPlacanja = createAction(GetAllNacinPlacanja, props<{}>());
export const getAllNacinPlacanjaSuccess = createAction(GetAllNacinPlacanjaSuccess, props<{ naciniPlacanja: NacinPlacanja[] }>());
export const getAllNacinPlacanjaError = createAction(GetAllNacinPlacanjaError, props<{ error: string }>());

export const getAllUgovorOPrevozu = createAction(GetAllUgovorOPrevozu, props<{}>());
export const getAllUgovorOPrevozuSuccess = createAction(GetAllUgovorOPrevozuSuccess, props<{ ugovori: UgovorOPrevozu[] }>());
export const getAllUgovorOPrevozuError = createAction(GetAllUgovorOPrevozuError, props<{ error: string }>());

export const getOneProfaktura = createAction(GetOneProfaktura, props<{brojProfakture: bigint}>());
export const getOneProfakturaSuccess = createAction(GetOneProfakturaSuccess, props<{ selectedProfaktura: Profaktura }>());
export const getOneProfakturaError = createAction(GetOneProfakturaError, props<{ error: string }>());


export const saveProfaktura = createAction(SaveProfaktura, props<{ profaktura: Profaktura }>());
export const saveProfakturaSuccess = createAction(SaveProfakturaSuccess, props<{ profaktura: Profaktura }>());
export const saveProfakturaError = createAction(SaveProfakturaError, props<{ error: string }>());

export const deleteProfaktura = createAction(DeleteProfaktura, props<{ brojProfakture: bigint }>());
export const deleteProfakturaSuccess = createAction(DeleteUplatnicaSuccess, props<{ brojProfakture: bigint }>());
export const deleteProfakturaError = createAction(DeleteUplatnicaError, props<{ error: string }>());

export const addStavkaProfakture = createAction(AddStavka, props<{ stavka: StavkaProfakture }>());
export const deleteStavkaProfakture = createAction(DeleteStavka, props<{ stavke: StavkaProfakture[], ukupanIznos: number }>());

export const setUkupanIznos = createAction(SetUkupanIznos, props<{ ukupanIznos: number }>());
export const clearStavkeProfakture = createAction(ClearStavkeProfakture, props<{ }>());
export const clearSelectedProfaktura = createAction(ClearSelectedProfaktura, props<{ }>());
export const setSelectedProfaktura = createAction(SetSelectedProfaktura, props<{ profaktura: Profaktura}>());

