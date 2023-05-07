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

  constructor(private _Service: ServeisService) {
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



}
