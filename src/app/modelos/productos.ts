export class Productos{
  _id?: number;
  ProdID: string;
  ProdNom: string;
  ProdAfegits: number;
  ProdPreu: number;
  ProdTalla: number;
  ProdDescripcio: string;
  ProdImatge: undefined;

  constructor(ProdID: string, ProdNom: string, ProdAfegits: number, ProdPreu: number, ProdTalla: number, ProdDescripcio: string, ProdImatge: undefined) {
    this.ProdID = ProdID;
    this.ProdNom = ProdNom;
    this.ProdAfegits = ProdAfegits;
    this.ProdPreu = ProdPreu;
    this.ProdTalla = ProdTalla;
    this.ProdDescripcio = ProdDescripcio;
    this.ProdImatge = ProdImatge;
  }
}
