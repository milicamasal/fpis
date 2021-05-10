import {Radnik} from "./radnik.model";
import {NacinPlacanja} from "./nacin-placanja.model";
import {Grad} from "./grad.model";
import {Drzava} from "./drzava.model";
import {UgovorOPrevozu} from "./ugovor-o-prevozu.model";
import {StavkaProfakture} from "./stavka-profakture.model";


export class Profaktura {
  public brojProfakture: bigint;
  public iznos: number;
  public datumPrometa: Date;
  public datumIzdavanja: Date;
  public pozivNaBroj: string;
  public radnik: Radnik;
  public grad: Grad;
  public drzava: Drzava;
  public ugovor: UgovorOPrevozu;
  public stavke: StavkaProfakture[];
  public nacinPlacanja: NacinPlacanja[];

}
