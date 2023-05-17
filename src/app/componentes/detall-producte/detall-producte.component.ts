import { Component, OnInit } from '@angular/core';
import { Productos } from "../../modelos/productos";
import { ServeisService} from "../../servicios/serveis.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Favorits } from "../../modelos/favorits";
import {modUsers} from "../../modelos/modUsers";
import jwt_decode from "jwt-decode";
import { Users } from "../../modelos/users";
import { Cistell } from "../../modelos/cistell";

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
  isVisibleT: boolean;

  TU: boolean;
  TS: boolean;
  TM: boolean;
  TL: boolean;
  TXL: boolean;
  T37: boolean;
  T38: boolean;
  T39: boolean;
  T40: boolean;
  T41: boolean;
  T42: boolean;
  T43: boolean;
  T44: boolean;
  T45: boolean;




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
    this.isVisibleT=false;

    this.TU = false;
    this.TS = false;
    this.TM = false;
    this.TL = false;
    this.TXL = false;
    this.T37 = false;
    this.T38 = false;
    this.T39 = false;
    this.T40 = false;
    this.T41 = false;
    this.T42 = false;
    this.T43 = false;
    this.T44 = false;
    this.T45 = false;
  }

  ngOnInit(): void{
    this.DetallProd();
    this.setTalla(this.getTalla());
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
        if (this.getTalla() != '') {
          const Cistell: Cistell = {
            UserName: this.user,
            LlistaProductes: this.id,
            TallaProducte: this.getTalla(),
          }
          this._Service.afegirCistell(Cistell).subscribe(data => {
            console.log(data);
            //alert("Producte afegit correctament");
            this.isVisibleC = true;
            setTimeout(() => {
              this.isVisibleC = false;
            }, 5000);
          }, error => {
            console.log(error);

          })
        }else{
          this.isVisibleT = true;
          setTimeout(() => {
            this.isVisibleT = false;
          }, 5000);
        }
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

  setTalla(talla:any){
    if(talla=='U'){
      this.TU = true;
    }
    if (talla=='S'){
      this.TS = true;
      this.TM = false;
      this.TL = false;
      this.TXL = false;
    }
    if (talla=='M'){
      this.TS = false;
      this.TM = true;
      this.TL = false;
      this.TXL = false;
    }
    if (talla=='L'){
      this.TS = false;
      this.TM = false;
      this.TL = true;
      this.TXL = false;
    }
    if (talla=='XL'){
      this.TS = false;
      this.TM = false;
      this.TL = false;
      this.TXL = true;
    }

    if(talla == '37'){
      this.T37 = true;
      this.T38 = false;
      this.T39 = false;
      this.T40 = false;
      this.T41 = false;
      this.T42 = false;
      this.T43 = false;
      this.T44 = false;
      this.T45 = false;
    }
    if(talla == '38'){
      this.T37 = false;
      this.T38 = true;
      this.T39 = false;
      this.T40 = false;
      this.T41 = false;
      this.T42 = false;
      this.T43 = false;
      this.T44 = false;
      this.T45 = false;
    }
    if(talla == '39'){
      this.T37 = false;
      this.T38 = false;
      this.T39 = true;
      this.T40 = false;
      this.T41 = false;
      this.T42 = false;
      this.T43 = false;
      this.T44 = false;
      this.T45 = false;
    }
    if(talla == '40'){
      this.T37 = false;
      this.T38 = false;
      this.T39 = false;
      this.T40 = true;
      this.T41 = false;
      this.T42 = false;
      this.T43 = false;
      this.T44 = false;
      this.T45 = false;
    }
    if(talla == '41'){
      this.T37 = false;
      this.T38 = false;
      this.T39 = false;
      this.T40 = false;
      this.T41 = true;
      this.T42 = false;
      this.T43 = false;
      this.T44 = false;
      this.T45 = false;
    }
    if(talla == '42'){
      this.T37 = false;
      this.T38 = false;
      this.T39 = false;
      this.T40 = false;
      this.T41 = false;
      this.T42 = true;
      this.T43 = false;
      this.T44 = false;
      this.T45 = false;
    }
    if(talla == '43'){
      this.T37 = false;
      this.T38 = false;
      this.T39 = false;
      this.T40 = false;
      this.T41 = false;
      this.T42 = false;
      this.T43 = true;
      this.T44 = false;
      this.T45 = false;
    }
    if(talla == '44'){
      this.T37 = false;
      this.T38 = false;
      this.T39 = false;
      this.T40 = false;
      this.T41 = false;
      this.T42 = false;
      this.T43 = false;
      this.T44 = true;
      this.T45 = false;
    }
    if(talla == '45'){
      this.T37 = false;
      this.T38 = false;
      this.T39 = false;
      this.T40 = false;
      this.T41 = false;
      this.T42 = false;
      this.T43 = false;
      this.T44 = false;
      this.T45 = true;
    }
  }

  getTalla(){
    if(this.TU){
      return 'TU';
    }
    if (this.TS){
      return 'S';
    }
    if (this.TM){
      return 'M';
    }
    if (this.TL){
      return 'L';
    }
    if (this.TXL){
      return 'XL';
    }

    if(this.T37){
      return '37';
    }
    if(this.T38){
      return '38';
    }
    if(this.T39){
      return '39';
    }
    if(this.T40){
      return '40';
    }
    if(this.T41){
      return '41';
    }
    if(this.T42){
      return '42';
    }
    if(this.T43){
      return '43';
    }
    if(this.T44){
      return '44';
    }
    if(this.T45){
      return '45';
    }
    return '';
  }

}
