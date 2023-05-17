import {Component, OnInit} from '@angular/core';
import jwt_decode from "jwt-decode";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServeisService} from "../../servicios/serveis.service";
import { Users } from "../../modelos/users"
import { Favorits } from "../../modelos/favorits";
import {Productos} from "../../modelos/productos";

@Component({
  selector: 'app-cistell',
  templateUrl: './cistell.component.html',
  styleUrls: ['./cistell.component.css']
})
export class CistellComponent implements OnInit{
  listCistell: Productos[];
  id: string | null;
  vista: boolean;
  searchText: any;
  constructor(private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.listCistell=[];
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.vista=false;
  }

  ngOnInit(): void{
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
        }, error => {
          console.log(part);
        })
      }
    }
  }

  eliminarCistell(id: any){
    const Favorit: Favorits = {
      UserName: this.getToken(),
      LlistaProductes: id,
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

  realitzaCompra() {
    const Favorit: Favorits = {
      UserName: this.getToken(),
      LlistaProductes: "",
    }

    this._Service.realitzaCompra(Favorit).subscribe(data => {
      console.log(data);
      //this.router.navigate(['/']);
    }, error => {
      console.log(Favorit);
    })
  }

}
