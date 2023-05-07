export class Users{
  _id?: number;
  UserName: string;
  UserMail: string;
  UserNameReal: string;
  UserContrasenya: string;
  LlistaProductes: string[];

  constructor(UserName: string, UserMail: string, UserNameReal: string, UserContrasenya: string, LlistaProductes: string[]) {
    this.UserName = UserName;
    this.UserMail = UserMail;
    this.UserNameReal = UserNameReal;
    this.UserContrasenya = UserContrasenya;
    this.LlistaProductes = LlistaProductes;
  }
}
