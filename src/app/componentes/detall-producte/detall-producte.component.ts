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
          alert("Producte afegit correctament");
        }, error => {
          console.log(error);

        })
      }
    }else{
      alert("Has d'iniciar sessió per poder utilitzar aquesta funcionalitat.");
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
          alert("Producte afegit correctament");
        }, error => {
          console.log(error);

        })
      }
    }else{
      alert("Has d'iniciar sessió per poder utilitzar aquesta funcionalitat.");
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
