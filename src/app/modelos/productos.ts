export class Productos{
  _id?: number;
  ProdID: string;
  ProdNom: string;
  ProdAfegits: number;
  ProdPreu: number;
  ProdTalla: number;
  ProdDescripcio: string;
  ProdTipus: string;
  ProdEsport: string[];
  ProdImatge: string;

  constructor(ProdID: string, ProdNom: string, ProdAfegits: number, ProdPreu: number, ProdTalla: number, ProdDescripcio: string, ProdTipus: string, ProdEsport: string[], ProdImatge: string) {
    this.ProdID = ProdID;
    this.ProdNom = ProdNom;
    this.ProdAfegits = ProdAfegits;
    this.ProdPreu = ProdPreu;
    this.ProdTalla = ProdTalla;
    this.ProdDescripcio = ProdDescripcio;
    this.ProdTipus= ProdTipus;
    this.ProdEsport= ProdEsport;
    this.ProdImatge = ProdImatge;
  }
}
