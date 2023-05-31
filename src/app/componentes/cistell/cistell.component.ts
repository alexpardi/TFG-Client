import {Component, OnInit} from '@angular/core';
import jwt_decode from "jwt-decode";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServeisService} from "../../servicios/serveis.service";
import { Users } from "../../modelos/users"
import { Favorits } from "../../modelos/favorits";
import {Productos} from "../../modelos/productos";
import { prodTalla } from "../../modelos/prodTalla";
import {Cistell} from "../../modelos/cistell";

@Component({
  selector: 'app-cistell',
  templateUrl: './cistell.component.html',
  styleUrls: ['./cistell.component.css']
})
export class CistellComponent implements OnInit{
  listCistell: prodTalla[];
  listTalles: string[];
  listQuantitat: string[];
  id: string | null;
  vista: boolean;
  searchText: any;
  constructor(private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.listCistell=[];
    this.listTalles = [];
    this.listQuantitat=[];
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.vista=false;
  }

  ngOnInit(): void{
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getTalles();
    this.getQuantitat();
    this.getCistell();
  }


  getCistell() {
    var jwt = localStorage.getItem('token');
    if (jwt) {
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).id;
      if (part != null) {
        this._Service.getCistell(part).subscribe(data => {
          console.log(data);
          this.listCistell = data;
          this.joingetter();
        }, error => {
          console.log(part);
        })
      }
    }
  }

  joingetter(){
    for(let i=0; i< this.listCistell.length; i++)
    {
      this.listCistell[i].talla = this.listTalles[i];
      this.listCistell[i].quantitat = this.listQuantitat[i];
    }
  }

  getTalles(){
    var jwt = localStorage.getItem('token');
    if (jwt) {
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).id;
      if (part != null) {
        this._Service.getTalles(part).subscribe(data => {
          console.log(data);
          this.listTalles = data;
        }, error => {
          console.log(part);
        })
      }
    }
  }

  getQuantitat(){
    var jwt = localStorage.getItem('token');
    if (jwt) {
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).id;
      if (part != null) {
        this._Service.getQuantitat(part).subscribe(data => {
          console.log(data);
          this.listQuantitat = data;
        }, error => {
          console.log(part);
        })
      }
    }
  }

  reload(){
    window.location.reload();
  }

  eliminarCistell(id: any, talla: any){
    const Favorit: Cistell = {
      UserName: this.getToken(),
      LlistaProductes: id,
      TallaProducte: talla,
    }

    if(window.confirm('Estas segur que vols eliminar aquest producte del cistell?')){
      this._Service.eliminarCistell(Favorit).subscribe(data => {
        console.log(data)
        this.getCistell();
        this.router.navigate(['/cistell']);
      }, error => {
        console.log(error);
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

  setVista(){
    if(this.vista == false){
      this.vista=true;
    }else{
      this.vista=false;
    }
  }

  /* Això aquí ja no cal.
  realitzaCompra() {
    const Favorit: Favorits = {
      UserName: this.getToken(),
      LlistaProductes: "",
    }

    this._Service.realitzaCompra(Favorit).subscribe(data => {
      console.log(data);
      this.reload();
      this.router.navigate(['/cistell']);
    }, error => {
      console.log(error);
      //this.InitSesionForm.reset();
      //PROVISIONAL
      alert("L'usuari o la contrasenya son incorrectes");
      //this.router.navigate(['/cistell']);
    })
    this.reload();
  }*/

}
