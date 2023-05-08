import { Component } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServeisService} from "../../servicios/serveis.service"
import { Users } from "../../modelos/users"
import { Inicisessio } from "../../modelos/inicisessio";
import { modUsers } from "../../modelos/modUsers";

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-inici-usuari',
  templateUrl: './inici-usuari.component.html',
  styleUrls: ['./inici-usuari.component.css']
})
export class IniciUsuariComponent {
  regUsersForm: FormGroup;
  modiUserForm: FormGroup;
  iniUsersForm: FormGroup;
  Users: Users;
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, public _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.regUsersForm = this.fb.group({
      CreaUsuari: ['', Validators.required],
      CreaEmail: ['', Validators.required],
      CreaNom: ['', Validators.required],
      CreaContrasenya: ['', Validators.required],
    });
    this.iniUsersForm = this.fb.group({
      IniciUsuari: ['', Validators.required],
      IniciContrasenya: ['', Validators.required],
    });
    this.modiUserForm=this.fb.group({
      // Aqui hay que inicializar el ModUsuari a el usuario que pille del token!!!!
      ModUsuari: this.getToken(),
      ModEmail: ['', Validators.required],
      ModNom: ['', Validators.required],
      ModContrasenya: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.Users ={
      UserName: "",
      UserMail: "",
      UserNameReal: "",
      UserContrasenya: "",
      LlistaProductes:[],
    };
  }

  ngOnInit(): void{
    this.EditaUsuari();
  }

  AddUsuari() {
    const USUARI: Users = {
      UserName: this.regUsersForm.get('CreaUsuari')?.value,
      UserMail: this.regUsersForm.get('CreaEmail')?.value,
      UserNameReal: this.regUsersForm.get('CreaNom')?.value,
      UserContrasenya: this.regUsersForm.get('CreaContrasenya')?.value,
      LlistaProductes: [],
    }

    console.log(USUARI);
    this._Service.crearUsuari(USUARI).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.token)
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      //this.AddUserForm.reset();
      alert("Datos incorrectos");
    })

  }

  IniciaSessio(){
    const USUARI: Inicisessio = {
      UserName: this.iniUsersForm.get('IniciUsuari')?.value,
      UserContrasenya: this.iniUsersForm.get('IniciContrasenya')?.value,
    }

    console.log(USUARI);
    this._Service.inicisessio(USUARI).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.token)
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      //this.InitSesionForm.reset();
      alert("L'usuari o la contrasenya son incorrectes");
    })
  }

  isLogged(): boolean{
    if (this._Service.loggedIn()){
      return true;
    }else{
      return false;
    }
  }

  modificarUser(){
    const USER: modUsers = {
      ModUsuari: this.modiUserForm.get('ModUsuari')?.value,
      ModEmail: this.modiUserForm.get('ModEmail')?.value,
      ModNom: this.modiUserForm.get('ModNom')?.value,
      ModContrasenya: this.modiUserForm.get('ModContrasenya')?.value,
    }

    this._Service.modificaUsuari(USER).subscribe(data=> {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      //this.AddProductForm.reset();
      alert("No s'ha pogut modificar l'usuari.");
    })

  }

  EditaUsuari(){
    if(this.id !== null){

      this._Service.editarUsuari(this.id).subscribe(data=> {
        this.modiUserForm.setValue({
          UserName: data.ModUsuari,
          UserMail: data.ModEmail,
          UserNameReal: data.ModNom,
          UserContrasenya: data.ModContrasenya,
        })

        console.log(data);
      })
    }
  }

  getToken(){
    var jwt = localStorage.getItem('token');
    if(jwt){
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).UserName;
      return part
    }
  }

  getFavorits(){
    var jwt = localStorage.getItem('token');
    if(jwt){
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo)._id;
      this._Service.getFavorits(part).subscribe(data=> {
        console.log(data);
        this.Users = data;
      }, error => {
        console.log(error);
      })
    }

  }


}
