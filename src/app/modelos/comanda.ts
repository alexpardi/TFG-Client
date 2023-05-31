export class Comanda{
  _id?: number;
  UserName: string;
  Pais: string;
  Ciutat:string;
  CodiPostal: string;
  CarrerNum: string;
  NumeroTelf: string;

  constructor(UserName: string, Pais: string, Ciutat:string, CodiPostal: string, CarrerNum: string, NumeroTelf: string) {
    this.UserName = UserName;
    this.Pais = Pais;
    this.Ciutat = Ciutat;
    this.CodiPostal = CodiPostal;
    this.CarrerNum = CarrerNum;
    this.NumeroTelf = NumeroTelf;
  }
}
