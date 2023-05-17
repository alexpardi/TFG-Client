export class Cistell{
  _id?: number;
  UserName: string;
  LlistaProductes: string;
  TallaProducte:string;

  constructor(UserName: string,  LlistaProductes: string, TallaProducte:string) {
    this.UserName = UserName;
    this.LlistaProductes = LlistaProductes;
    this.TallaProducte = TallaProducte;
  }
}
