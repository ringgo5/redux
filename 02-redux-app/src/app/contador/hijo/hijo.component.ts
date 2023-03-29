import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as actions from '../contador.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{ //estamos importando contador para poder usarlo del padre. Queremos que salga en el htmnl del hijo
          //implemenetado debaajo de contador, otro contador pero trayendo la variable del padre, por eso ponemos {{contador}} en e html del hijo
  
  //  @Input()  
  contador!: number;  //esto es necesario si queremos usar una variable del padre,varia un poco, pero me lo hace el visual par aque funcione.
              //hasta aqui funciona pero para que cuando multiplique o divia y se actualice el marcador de arriba:
 //   @Output() cambioContador = new EventEmitter<number>;  //esto es para que cuando apretemos los botones del hijo,se emite el dato y se actualice
    constructor( private store:Store<AppState>){} //necesario.Ahora sabemos el estado, lo enviamos con el store y el APPstore que lo tenemos en app.reducers.ts
      ngOnInit(){ //esto es como en window.onload, la funcion que haciamos en DOM para cargar esto antes que nada.
          //importane que en el html del padre,el de la vista,donde implementamos todos, ponemos la variable como []=""

        this.store.select('contador')
        .subscribe(contador=>this.contador=contador); // con esto, al igual que hicimos en app.component.ts, hacemos que se vea nuestro contador


      }
      multiplicar(){
        /*
            this.contador = this.contador*2;
            this.cambioContador.emit(this.contador);
            */
           this.store.dispatch(actions.multiplicar({numero: 3}))
      }

      dividir(){
        /*
        this.contador= this.contador / 2;
        this.cambioContador.emit(this.contador);
        */
        this.store.dispatch(actions.dividir({numero: 4}))

      }
      

      
    

}
