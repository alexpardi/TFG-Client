import { Component, OnInit } from '@angular/core';
import { Productos } from "../../modelos/productos";
import { ServeisService} from "../../servicios/serveis.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Favorits } from "../../modelos/favorits";
import {modUsers} from "../../modelos/modUsers";
import jwt_decode from "jwt-decode";
import { Users } from "../../modelos/users";

@Component({
  selector: 'app-detall-producte',
  templateUrl: './detall-producte.component.html',
  styleUrls: ['./detall-producte.component.css']
})
export class DetallProducteComponent implements OnInit{
  Producto: Productos[];
  id: string | null;
  user: string | null
  Users: Users;
  isVisibleF: boolean;
  isVisibleC: boolean;
  isVisibleFS: boolean;
  isVisibleCS: boolean;
  constructor( private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.Producto = [];
    this.user = this.getToken();
    this.Users ={
      UserName: "",
      UserMail: "",
      UserNameReal: "",
      UserContrasenya: "",
      LlistaProductes:[],
    };
    this.isVisibleF=false;
    this.isVisibleC=false;
    this.isVisibleFS=false;
    this.isVisibleCS=false;
  }

  ngOnInit(): void{
    this.DetallProd();
  }

  DetallProd() {
    if(this.id !== null){
      this._Service.detallProducte(this.id).subscribe(data=> {
        console.log(data);
        this.Producto.push(data);
      }, error => {
        console.log(error);
      })
    }
  }

  afegirFavorits() {
    if (this.user != null) {
      if (this.id != null) {

        const Favorit: Favorits = {
          UserName: this.user,
          LlistaProductes: this.id,
        }
        this._Service.afegirFavorit(Favorit).subscribe(data => {
          console.log(data);
          //alert("Producte afegit correctament");
          this.isVisibleF = true;
          setTimeout(() => {
            this.isVisibleF = false;
          }, 5000);
        }, error => {
          console.log(error);

        })
      }
    }else{
      this.isVisibleFS = true;
      setTimeout(() => {
        this.isVisibleFS = false;
      }, 5000);
    }
  }

  afegirCistell() {
    if (this.user != null) {
      if (this.id != null) {

        const Favorit: Favorits = {
          UserName: this.user,
          LlistaProductes: this.id,
        }
        this._Service.afegirCistell(Favorit).subscribe(data => {
          console.log(data);
          //alert("Producte afegit correctament");
          this.isVisibleC = true;
          setTimeout(() => {
            this.isVisibleC = false;
          }, 5000);
        }, error => {
          console.log(error);

        })
      }
    }else{
      //alert("Has d'iniciar sessió per poder utilitzar aquesta funcionalitat.");
      this.isVisibleCS = true;
      setTimeout(() => {
        this.isVisibleCS = false;
      }, 5000);
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
}
