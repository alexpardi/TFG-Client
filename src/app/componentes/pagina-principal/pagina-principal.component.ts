import { Component } from '@angular/core';
import { ServeisService } from "../../servicios/serveis.service";
import { Productos } from "../../modelos/productos";

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {

  listProductes: Productos[] = [];

  vista: boolean;
  searchText: any;
  constructor(private _Service: ServeisService) {
    this.vista=false;
  }

  ngOnInit(): void{
    this.obtenirProductes(0);

  }

  obtenirProductes(ordenar:any){
    this._Service.getProductes().subscribe(data=>{
      console.log(data);
      this.listProductes = data;
      if (ordenar == 2){
        this.listProductes.sort(function (a, b) {
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
        this.listProductes.sort(function (a, b) {
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
        this.listProductes.sort(function (a, b) {
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
        this.listProductes.sort(function (a, b) {
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

  setVista(){
    if(this.vista == false){
      this.vista=true;
    }else{
      this.vista=false;
    }
  }



}
