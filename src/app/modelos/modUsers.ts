export class modUsers{
  _id?: number;
  ModUsuari: string;
  ModEmail: string;
  ModNom: string;
  ModContrasenya: string;

  constructor(ModUsuari: string, ModEmail: string, ModNom: string, ModContrasenya: string) {
    this.ModUsuari = ModUsuari;
    this.ModEmail = ModEmail;
    this.ModNom = ModNom;
    this.ModContrasenya = ModContrasenya;
  }
}
