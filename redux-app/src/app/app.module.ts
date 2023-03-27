import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ngrx y reducer(todo lo que sea NGRX lo ponemos aqui junto)

import { StoreModule } from '@ngrx/store'; //IMPORTANTE SI IMPORTAMOS AQUI, IMPORTARLO ABAJO EN IMPORTS.


import { contadorReducer } from './contador/contador.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer }),//ojo cxon el nombre,tenia puesto count y no iba(el nombre es contador)
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })], 
    //esto me costó, pero al final, cierro server, instalo con ng add @ngrx/store-devtools@latest y una vez lo instalas te añade directamente esta linea:
    //StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })], . y ya va. Ahora ya tenemos el tools instalado(extensión) y encendido
    //ahora vemos ,cada vez que hacemos una accion, lo que ocurre desde el navegador. parecido a un debuger. Si pincho en cualquiera de los que haya 
    //apretado, veremos como estaba el eestado en ese momento
  
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
