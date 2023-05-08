export class Favorits{
  _id?: number;
  UserName: string;
  LlistaProductes: string;

  constructor(UserName: string,  LlistaProductes: string) {
    this.UserName = UserName;
    this.LlistaProductes = LlistaProductes;
  }
}
