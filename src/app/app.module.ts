import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciUsuariComponent } from './componentes/inici-usuari/inici-usuari.component';
import { CistellComponent } from './componentes/cistell/cistell.component';
import { DetallProducteComponent } from './componentes/detall-producte/detall-producte.component';
import { FavoritsComponent } from './componentes/favorits/favorits.component';
import { DesplegablesComponent } from './componentes/desplegables/desplegables.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CompresAnteriorsComponent } from './componentes/compres-anteriors/compres-anteriors.component';
/*import {AuthGuard} from "./auth.guard";
import { TokenInterceptorService } from "./servei/token-interceptor.service";*/

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    IniciUsuariComponent,
    CistellComponent,
    DetallProducteComponent,
    FavoritsComponent,
    DesplegablesComponent,
    CompresAnteriorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [/*AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
