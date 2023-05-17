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
    this.getCompresAnteriors();
  }
  getCompresAnteriors() {
    var jwt = localStorage.getItem('token');
    if (jwt) {
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).id;
      if (part != null) {
        this._Service.getCompresAnteriors(part).subscribe(data => {
          console.log(data);
          this.listCistell = data;
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
