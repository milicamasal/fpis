import {Model} from "./model.model";
import {Valuta} from "./valuta.model";
import {Radnik} from "./radnik.model";
import {Profaktura} from "./profaktura.model";

export class Uplatnica {
  public idUplatnice: bigint;
  public iznos: number;
  public svrhaUplate: string;
  public valuta: Valuta;
  public model: Model;
  public radnik: Radnik;
  public profaktura: Profaktura;


}
