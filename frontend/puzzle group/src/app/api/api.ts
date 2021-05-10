import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Drzava} from "../model/drzava.model";
import {Grad} from "../model/grad.model";
import {Korisnik} from "../model/korisnik.model";
import {Model} from "../model/model.model";
import {NacinPlacanja} from "../model/nacin-placanja.model";
import {Valuta} from "../model/valuta.model";
import {Profaktura} from "../model/profaktura.model";
import {Radnik} from "../model/radnik.model";
import {Uplatnica} from "../model/uplatnica.model";
import {UgovorOPrevozu} from "../model/ugovor-o-prevozu.model";

@Injectable()
export class Api {
  readonly API = "http://localhost:8080/api/"

  constructor(private http: HttpClient) {
  }

  getAllDrzava(): Observable<Drzava[]> {
    return this.http.get<Drzava[]>(this.API + 'drzava/all');
  }

  getAllGrad(): Observable<Grad[]> {
    return this.http.get<Grad[]>(this.API + 'grad/all');
  }

  getAllGradSaDrzavaID(idDrzave: bigint): Observable<Grad[]> {
    return this.http.get<Grad[]>(this.API + 'grad/' + idDrzave);
  }

  getAllKorisnik(): Observable<Korisnik[]> {
    return this.http.get<Korisnik[]>(this.API + 'korisnik/all');
  }

  getAllModel(): Observable<Model[]> {
    return this.http.get<Model[]>(this.API + 'model/all');
  }

  getAllNacinPlacanja(): Observable<NacinPlacanja[]> {
    return this.http.get<NacinPlacanja[]>(this.API + 'nacinPlacanja/all');
  }

  getAllValuta(): Observable<Valuta[]> {
    return this.http.get<Valuta[]>(this.API + 'valuta/all');
  }

  getAllProfaktura(): Observable<Profaktura[]> {
    return this.http.get<Profaktura[]>(this.API + 'profaktura/all');
  }

  getAllRadnik(): Observable<Radnik[]> {
    return this.http.get<Radnik[]>(this.API + 'radnik/all');
  }

  getAllUplatnica(): Observable<Uplatnica[]> {
    return this.http.get<Uplatnica[]>(this.API + 'uplatnica/all');
  }

  getAllUgovorOPrevozu(): Observable<UgovorOPrevozu[]> {
    return this.http.get<UgovorOPrevozu[]>(this.API + 'ugovorOPrevozu/all');
  }

  getOneProfaktura(brojProfakture: bigint): Observable<Profaktura> {
    return this.http.get<Profaktura>(this.API + 'profaktura/' + brojProfakture);
  }

  getOneUplatnica(id: bigint): Observable<Uplatnica> {
    return this.http.get<Uplatnica>(this.API + 'uplatnica/' + id);
  }


  saveProfaktura(profaktura: Profaktura): Observable<Profaktura> {
    return this.http.post<Profaktura>(this.API + 'profaktura/', profaktura);
  }

  saveUplatnica(uplatnica: Uplatnica): Observable<Uplatnica> {
    return this.http.post<Uplatnica>(this.API + 'uplatnica/', uplatnica);
  }

  deleteProfaktura(id: bigint): Observable<{}> {
    return this.http.delete(this.API + 'profaktura/' + id);
  }

  deleteUplatnica(id: bigint): Observable<{}> {
    return this.http.delete(this.API + 'uplatnica/' + id);
  }

}
