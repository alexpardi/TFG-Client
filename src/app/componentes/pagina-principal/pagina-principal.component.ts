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
    this.obtenirProductes();

  }

  obtenirProductes(){
    this._Service.getProductes().subscribe(data=>{
      console.log(data);
      this.listProductes = data;
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
