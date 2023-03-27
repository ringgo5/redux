import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './contador/app.reducers';
//import { decrementar, incrementar } from './contador/contador.actions'; //como esto ira creciendo mucho podemos hacer lo asi :

import * as actions from './contador/contador.actions'; //de esta forma llamaremos actions.incrementar 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contador!: number;

  constructor( private store: Store<AppState> ){  //creaamos la interfaz arriba y simplemente la añadimos.Inyectamos el store aqui
    //this.contador=10;
  /*  this.store.subscribe(state =>{
      console.log(state)
      this.contador = state.contador;
    });*/
    //la parte de arriba es para hacer un subscribe de todo, pero cuando tengamos un componente muy grande y solo queramos un (en este caso)
    //cuadro con el numero,nuestro contador, pondriamos así:
    this.store.select('contador').subscribe(contador =>{ //ya no recibimos un state
      console.log(contador)
      this.contador = contador;
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
  resetear(){


    //this.contador-=1;
    this.store.dispatch(actions.resetear())
  }
  
}
