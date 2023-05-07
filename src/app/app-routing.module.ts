import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaPrincipalComponent} from "./componentes/pagina-principal/pagina-principal.component";
import {IniciUsuariComponent} from "./componentes/inici-usuari/inici-usuari.component";
import {CistellComponent} from "./componentes/cistell/cistell.component";
import {DetallProducteComponent} from "./componentes/detall-producte/detall-producte.component";

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {path: 'usuari', component: IniciUsuariComponent},
  {path: 'cistell', component: CistellComponent},
  {path: 'detall-producte/:id', component: DetallProducteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
