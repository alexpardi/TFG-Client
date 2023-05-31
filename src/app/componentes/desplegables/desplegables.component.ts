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
  vista: boolean;
  searchText: any;
  constructor(private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.listProductos = [];
    this.tipus = this.aRouter.snapshot.paramMap.get('tipus');
    this.esport = this.aRouter.snapshot.paramMap.get('esport');
    this.vista=false;
  }

  ngOnInit(): void {
    this.getProductes(0);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getProductes(ordenar: any) {
    if (this.tipus != null) {
      //Llista de productes al depenent del tipus de producte i esport
      if (this.esport != null) {
        this._Service.desplegableP(this.tipus , this.esport).subscribe(data => {
          console.log(data);
          this.listProductos = data;
          if (ordenar == 2){
            this.listProductos.sort(function (a, b) {
              if (a.ProdNom > b.ProdNom) {
                return 1;
              }
              if (a.ProdNom < b.ProdNom) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
          }else if (ordenar == 3){
            this.listProductos.sort(function (a, b) {
              if (a.ProdMarca > b.ProdMarca) {
                return 1;
              }
              if (a.ProdMarca < b.ProdMarca) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
          }else if (ordenar == 4){
            this.listProductos.sort(function (a, b) {
              if (a.ProdPreu > b.ProdPreu) {
                return 1;
              }
              if (a.ProdPreu < b.ProdPreu) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
          }else if (ordenar == 5){
            this.listProductos.sort(function (a, b) {
              if (a.ProdPreu > b.ProdPreu) {
                return -1;
              }
              if (a.ProdPreu < b.ProdPreu) {
                return 1;
              }
              // a must be equal to b
              return 0;
            });
          }
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
          if (ordenar == 2){
            this.listProductos.sort(function (a, b) {
              if (a.ProdNom > b.ProdNom) {
                return 1;
              }
              if (a.ProdNom < b.ProdNom) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
          }else if (ordenar == 3){
            this.listProductos.sort(function (a, b) {
              if (a.ProdMarca > b.ProdMarca) {
                return 1;
              }
              if (a.ProdMarca < b.ProdMarca) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
          }else if (ordenar == 4){
            this.listProductos.sort(function (a, b) {
              if (a.ProdPreu > b.ProdPreu) {
                return 1;
              }
              if (a.ProdPreu < b.ProdPreu) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
          }else if (ordenar == 5){
            this.listProductos.sort(function (a, b) {
              if (a.ProdPreu > b.ProdPreu) {
                return -1;
              }
              if (a.ProdPreu < b.ProdPreu) {
                return 1;
              }
              // a must be equal to b
              return 0;
            });
          }
        }, error => {
          console.log(error);
        })
      }
    }
  }

  setVista(){
    if(this.vista == false){
      this.vista=true;
    }else{
      this.vista=false;
    }
  }
}
