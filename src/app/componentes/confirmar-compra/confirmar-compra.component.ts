import { Component, OnInit } from '@angular/core';
import {Favorits} from "../../modelos/favorits";
import jwt_decode from "jwt-decode";
import {ActivatedRoute, Router} from "@angular/router";
import {ServeisService} from "../../servicios/serveis.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Users} from "../../modelos/users";
import {Comanda} from "../../modelos/comanda";

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.css']
})
export class ConfirmarCompraComponent implements OnInit{

  confT: boolean;
  confF: boolean;
  dadesCompra: FormGroup;
  id: string|null;
  nomreal: Users;


  constructor(private fb: FormBuilder, private router: Router, private _Service: ServeisService, private aRouter: ActivatedRoute) {
    this.dadesCompra = this.fb.group({
      Pais: ['', Validators.required],
      Ciutat: ['', Validators.required],
      CodiPostal: ['', Validators.required],
      CarrerNum: ['', Validators.required],
      NumeroTelf: ['', Validators.required],
    });
    this.confT =false;
    this.confF =false;
    this.nomreal ={
      UserName: "",
      UserMail: "",
      UserNameReal: "",
      UserContrasenya: "",
      LlistaProductes:[],
    };
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }


  ngOnInit(): void{
    this.getTokenNom();
  }

  getToken(){
    var jwt = localStorage.getItem('token');
    if(jwt){
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).id;
      return part;
    }
  }

  getTokenNom(){
    this._Service.editarUsuari(this.getToken()).subscribe(data=> {
      this.nomreal = data ;
    })

  }

  reload(){
    window.location.reload();
  }

  setVista(){
    if(this.confT == false){
      this.confT=true;
    }else{
      this.confT=false;
    }
  }

  realitzaCompra() {
    const Comanda: Comanda = {
      UserName: this.nomreal.UserName,
      Pais : this.dadesCompra.get('Pais')?.value,
      Ciutat : this.dadesCompra.get('Ciutat')?.value,
      CodiPostal : this.dadesCompra.get('CodiPostal')?.value,
      CarrerNum : this.dadesCompra.get('CarrerNum')?.value,
      NumeroTelf : this.dadesCompra.get('NumeroTelf')?.value,
    }

    this._Service.realitzaCompra(Comanda).subscribe(data => {
      //this.confT=true;
      console.log(data);
      //this.setVista();
      this.router.navigate(['/cistell']);
      //this.reload();
    }, error => {
      console.log(error);
      this.confF = true;
    })
  }
}
