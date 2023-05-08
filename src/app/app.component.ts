import { Component } from '@angular/core';
import {Productos} from "./modelos/productos";
import {ActivatedRoute, Router} from "@angular/router";
import {ServeisService} from "./servicios/serveis.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TFG-cliente';
  valorTipusRet: string;

  constructor(private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.valorTipusRet="";
  }

  ngOnInit(): void{
  }


  valorTipus(tipus:any) {
    this.valorTipusRet = tipus;
  }

  retValorTipus():string{
    return this.valorTipusRet;
  }

}
