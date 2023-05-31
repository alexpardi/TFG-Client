import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Productos } from "../modelos/productos"
import { Users } from "../modelos/users";
import {Router, RouterLink} from "@angular/router";
import { Inicisessio } from "../modelos/inicisessio";
import { modUsers } from "../modelos/modUsers";
import { Favorits } from "../modelos/favorits";
import { Cistell } from "../modelos/cistell";
import {Comanda} from "../modelos/comanda";

@Injectable({
  providedIn: 'root'
})
export class ServeisService {

  urlP = 'http://localhost:4000/api/Prodclient/';
  urlU = 'http://localhost:4000/api/client/creaUsuari';
  urlUI = 'http://localhost:4000/api/client/iniciaSessio';
  urlMU = 'http://localhost:4000/api/client/modificaUsuari';
  urlEU = 'http://localhost:4000/api/client/getUsuari';
  urlF = 'http://localhost:4000/api/client/favorits';
  urlEF = 'http://localhost:4000/api/client/eliminafavorits';
  urlC = 'http://localhost:4000/api/client/cistell';
  urlT = 'http://localhost:4000/api/client/talles';
  urlQ = 'http://localhost:4000/api/client/quantitat';
  urlEC = 'http://localhost:4000/api/client/eliminacistell';
  urlDG = 'http://localhost:4000/api/desplegable/';
  urlDP = 'http://localhost:4000/api/desplegable/petit/';
  urlRC = 'http://localhost:4000/api/client/comprar';
  urlCA = 'http://localhost:4000/api/client/compresanteriors';

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

  eliminarFavorits(prod: Favorits): Observable<any>{
    return this.http.put(this.urlEF, prod);
  }

  afegirCistell(prod: Cistell): Observable<any>{
    return this.http.put(this.urlC, prod)
  }

  getCistell(id: string): Observable<any>{
    return this.http.get(this.urlC + id);
  }
  getTalles(id: string): Observable<any>{
    return this.http.get(this.urlT + id);
  }
  getQuantitat(id: string): Observable<any>{
    return this.http.get(this.urlQ + id);
  }

  eliminarCistell(prod: Favorits): Observable<any>{
    return this.http.put(this.urlEC, prod);
  }

  desplegableG(esport: string): Observable<any>{
    return this.http.get(this.urlDG + esport);
  }

  desplegableP(tipus: string, esport: string): Observable<any>{
    return this.http.get(this.urlDP + esport + "/" +tipus);
  }

  realitzaCompra(prod: Comanda): Observable<any>{
    return this.http.put(this.urlRC, prod);
  }

  getCompresAnteriors(id: string): Observable<any>{
    return this.http.get(this.urlCA + id);
  }
}
