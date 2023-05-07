import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Productos } from "../modelos/productos"
import { Users } from "../modelos/users";
import {Router, RouterLink} from "@angular/router";
import { Inicisessio } from "../modelos/inicisessio";
import { modUsers } from "../modelos/modUsers";
import { Favorits } from "../modelos/favorits";


@Injectable({
  providedIn: 'root'
})
export class ServeisService {

  urlP = 'http://localhost:4000/api/Prodclient/';
  urlU = 'http://localhost:4000/api/client/creaUsuari';
  urlUI = 'http://localhost:4000/api/client/iniciaSessio';
  urlMU = 'http://localhost:4000/api/client/modificaUsuari';
  urlEU = 'http://localhost:4000/api/client/getUsuari';
  urlF = 'http://localhost:4000/api/favorits';
  constructor(private  http: HttpClient) { }

  getProductes(): Observable<any>{
    return this.http.get(this.urlP);
  }

  detallProducte(id: string): Observable<any>{
    return this.http.get(this.urlP + id);
  }

  crearUsuari(user: Users): Observable<any>{
    return this.http.post(this.urlU, user);
  }

  modificaUsuari(user: modUsers): Observable<any>{
    return this.http.put(this.urlMU, user);
  }

  editarUsuari(id: string): Observable<any>{
    return this.http.get(this.urlEU + id);
  }

  inicisessio(user: Inicisessio): Observable<any>{
    return this.http.post(this.urlUI, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut(){
    if(confirm('Estas segur que vols tancar la sessió?')) {
      localStorage.removeItem('token');
    }
  }

  afegirFavorit(prod: Favorits): Observable<any>{
    return this.http.put(this.urlF, prod)
  }

  getFavorits(id: string): Observable<any>{
    return this.http.get(this.urlF + id);
  }
}
