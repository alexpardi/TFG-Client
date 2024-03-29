import { Component, OnInit} from '@angular/core';
import {Productos} from "../../modelos/productos";
import {ActivatedRoute, Router} from "@angular/router";
import {ServeisService} from "../../servicios/serveis.service";
import jwt_decode from "jwt-decode";
import {Favorits} from "../../modelos/favorits";


@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css']
})
export class FavoritsComponent implements OnInit{
  listFavorits: Productos[];
  id: string | null;
  vista: boolean;
  searchText: any;
  constructor(private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.listFavorits=[];
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.vista=false;
  }

  ngOnInit(): void{
    this.getFavorits(0);
  }

  getFavorits(ordenar:any) {
    var jwt = localStorage.getItem('token');
    if (jwt) {
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).id;
      if (part != null) {
        this._Service.getFavorits(part).subscribe(data => {
          console.log(data);
          this.listFavorits = data;
          if (ordenar == 2){
            this.listFavorits.sort(function (a, b) {
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
            this.listFavorits.sort(function (a, b) {
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
            this.listFavorits.sort(function (a, b) {
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
            this.listFavorits.sort(function (a, b) {
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

  eliminarFavorits(id: any){
    const Favorit: Favorits = {
      UserName: this.getToken(),
      LlistaProductes: id,
    }

    if(confirm('Estas segur que vols eliminar aquest producte de favorits?')){
      this._Service.eliminarFavorits(Favorit).subscribe(data => {
        console.log(data)
        this.getFavorits(0);
        this.router.navigate(['/favorits']);
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

}
