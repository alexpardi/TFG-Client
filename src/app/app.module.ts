import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciUsuariComponent } from './componentes/inici-usuari/inici-usuari.component';
import { CistellComponent } from './componentes/cistell/cistell.component';
import { DetallProducteComponent } from './componentes/detall-producte/detall-producte.component';

/*import {AuthGuard} from "./auth.guard";
import { TokenInterceptorService } from "./servei/token-interceptor.service";*/

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    IniciUsuariComponent,
    CistellComponent,
    DetallProducteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
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
