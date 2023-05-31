import {Component, OnInit} from '@angular/core';
import jwt_decode from "jwt-decode";
import {Productos} from "../../modelos/productos";
import {ActivatedRoute, Router} from "@angular/router";
import {ServeisService} from "../../servicios/serveis.service";

@Component({
  selector: 'app-compres-anteriors',
  templateUrl: './compres-anteriors.component.html',
  styleUrls: ['./compres-anteriors.component.css']
})
export class CompresAnteriorsComponent implements OnInit{
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
    this.getCompresAnteriors(0);
  }
  getCompresAnteriors(ordenar: any) {
    var jwt = localStorage.getItem('token');
    if (jwt) {
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).id;
      if (part != null) {
        this._Service.getCompresAnteriors(part).subscribe(data => {
          console.log(data);
          this.listCistell = data;
          if (ordenar == 2){
            this.listCistell.sort(function (a, b) {
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
            this.listCistell.sort(function (a, b) {
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
            this.listCistell.sort(function (a, b) {
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
            this.listCistell.sort(function (a, b) {
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
          console.log(part);
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
