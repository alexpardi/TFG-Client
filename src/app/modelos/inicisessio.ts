export class Inicisessio{
  _id?: number;
  UserName: string;
  UserContrasenya: string;

  constructor(UserName: string,  UserContrasenya: string) {
    this.UserName = UserName;
    this.UserContrasenya = UserContrasenya;
  }
}
