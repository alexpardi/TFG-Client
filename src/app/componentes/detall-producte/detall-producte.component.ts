import { Component, OnInit } from '@angular/core';
import { Productos } from "../../modelos/productos";
import { ServeisService} from "../../servicios/serveis.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Favorits } from "../../modelos/favorits";
import {modUsers} from "../../modelos/modUsers";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-detall-producte',
  templateUrl: './detall-producte.component.html',
  styleUrls: ['./detall-producte.component.css']
})
export class DetallProducteComponent implements OnInit{
  Producto: Productos[];
  id: string | null;
  user: string | null

  listFavorits: string[] = [];
  constructor( private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.Producto = [];
    this.user = this.getToken();
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
    this.getFavorits();
    var llista:string[]= [];
    if (this.user != null) {
      if (this.id != null) {
        this.listFavorits.push(this.id);
        llista.push(...this.listFavorits);

        const Favorit: Favorits = {
          UserName: this.user,
          LlistaProductes: llista,
        }
        this._Service.afegirFavorit(Favorit).subscribe(data => {
          console.log(data);
        }, error => {
          console.log(error);
          alert("Has d'iniciar sessió per poder utilitzar aquesta funcionalitat.");
        })
      }
    }
  }

  getFavorits(){
    if (this.user != null) {
      this._Service.getFavorits(this.user).subscribe(data => {
        console.log(data);
        this.listFavorits = data.listFavorits;
        return this.listFavorits;
      }, error => {
        console.log(error);
        alert("Has d'iniciar sessió per poder utilitzar aquesta funcionalitat.");
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
}
