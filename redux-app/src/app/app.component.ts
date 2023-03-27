import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//import { decrementar, incrementar } from './contador/contador.actions'; //como esto ira creciendo mucho podemos hacer lo asi :

import * as actions from './contador/contador.actions'; //de esta forma llamaremos actions.incrementar 

interface AppState {
  contador:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contador: number | undefined;

  constructor( private store: Store<AppState> ){  //creaamos la interfaz arriba y simplemente la añadimos.Inyectamos el store aqui
    //this.contador=10;
    this.store.subscribe(state =>{
      console.log(state)
      this.contador = state.contador;
    });
  }
  

  incrementar(){


    //this.contador+=1;--) esto lo haremos a traves de acciones
    this.store.dispatch(actions.incrementar())
  }
  decrementar(){


    //this.contador-=1;
    this.store.dispatch(actions.decrementar())
  }
}
