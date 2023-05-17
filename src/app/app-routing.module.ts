import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {PaginaPrincipalComponent} from "./componentes/pagina-principal/pagina-principal.component";
import {IniciUsuariComponent} from "./componentes/inici-usuari/inici-usuari.component";
import {CistellComponent} from "./componentes/cistell/cistell.component";
import {DetallProducteComponent} from "./componentes/detall-producte/detall-producte.component";
import {FavoritsComponent} from "./componentes/favorits/favorits.component";
import {DesplegablesComponent} from "./componentes/desplegables/desplegables.component";
import {CompresAnteriorsComponent} from "./componentes/compres-anteriors/compres-anteriors.component";

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {path: 'usuari', component: IniciUsuariComponent},
  {path: 'cistell', component: CistellComponent},
  {path: 'detall-producte/:id', component: DetallProducteComponent},
  {path: 'favorits', component: FavoritsComponent},
  {path: 'desplegable/:esport', component: DesplegablesComponent},
  {path: 'desplegableP/:esport/:tipus', component: DesplegablesComponent},
  {path: 'compres-anteriors', component: CompresAnteriorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
