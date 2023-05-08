import { Component, OnInit} from '@angular/core';
//import {AppComponent} from '../../app.component';
import {Productos} from "../../modelos/productos";
import {ActivatedRoute, Router} from "@angular/router";
import {ServeisService} from "../../servicios/serveis.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-desplegables',
  templateUrl: './desplegables.component.html',
  styleUrls: ['./desplegables.component.css']
})
export class DesplegablesComponent implements OnInit{
  listProductos: Productos[];
  tipus: string | null;
  esport: string | null;
  constructor(private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.listProductos = [];
    this.tipus = this.aRouter.snapshot.paramMap.get('tipus');
    this.esport = this.aRouter.snapshot.paramMap.get('esport');
  }

  ngOnInit(): void {
    this.getProductes();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getProductes() {
    if (this.tipus != null) {
      //Llista de productes al depenent del tipus de producte i esport
      if (this.esport != null) {
        this._Service.desplegableP(this.tipus , this.esport).subscribe(data => {
          console.log(data);
          this.listProductos = data;
        }, error => {
          console.log(error);
        })
      }
    }else{
      //Llista de productes depenent del esport
      if (this.esport != null) {
        this._Service.desplegableG(this.esport).subscribe(data => {
          console.log(data);
          this.listProductos = data;
        }, error => {
          console.log(error);
        })
      }
    }
  }

}
