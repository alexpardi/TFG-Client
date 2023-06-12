import { Component, OnInit} from '@angular/core';
import {Productos} from "./modelos/productos";
import {ActivatedRoute, Router} from "@angular/router";
import {ServeisService} from "./servicios/serveis.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TFG-cliente';
  valorTipusRet: string;
  ProdTCistell: number;

  constructor(private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.valorTipusRet="";
    this.ProdTCistell = 0;
  }

  ngOnInit(): void{
    this.getProdTCistell()
  }


  valorTipus(tipus:any) {
    this.valorTipusRet = tipus;
  }

  retValorTipus():string{
    return this.valorTipusRet;
  }

  getProdTCistell(){
    var jwt = localStorage.getItem('token');
    if (jwt) {
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).id;
      if (part != null) {
        this._Service.getProdTCistell(part).subscribe(data => {
          console.log(data);
          this.ProdTCistell = data;
        }, error => {
          console.log(part);
        })
      }
    }
  }


}
