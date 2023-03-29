import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { AppState } from '../app.reducer';
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  @Input() todo!: Todo;
  @ViewChild('inputFisico')
  txtInputFisico!: ElementRef;
  
  chkCompletado!: FormControl; //lo usamos para controlar el click verde, hacemos uno para el click y otro para el input(el que el usuario ingresa,
        //por eso le ponemos una validacion,para asegurarnos que al menos introduce algun dato)
  txtInput!: FormControl;
  editando = false; //lo añadimos a doble click  en el label
  

  constructor(private store: Store<AppState>){
    
  }

  ngOnInit(): void {

    
    this.chkCompletado= new FormControl( this.todo.completado); 
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    //this.todo.completado=true;
    this.chkCompletado.valueChanges.subscribe(valor=>{
      console.log(valor); //cada vez que el valor cambie nos lo envia por consola
      this.store.dispatch(actions.toggle({id: this.todo.id})) //queremos disparar la accion toggle cxada vez que cambia el estado. Para ello (como siempre)
                                                      //hacemos un dispatch al store(meterlo en constructor siempre) y como hemos creado la accion toggle
                                                      //pidiendonos un parametro, se lo ponemos. Será el id,que en este caso será el id que estemos apretando
    })
    
    
    
  }
  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }

  editar(){

      this.editando=true;
      this.txtInput.setValue(this.todo.texto);//con esto, cuando editamos un input,seguimos viendo los datos, por eso lo pongo una vez entramos en editar
      

      setTimeout(()=>{
        this.txtInputFisico.nativeElement.select(); //podemos jugar con select o focus,según lo que queramos
      },2);
  }
  terminarEdicion(){

    this.editando=false;

    //ponemos un par de validaciones antes de editar el texto:

    if(this.txtInput.invalid){return;}  //como arriba pusimosel validator, aqui decimos que si no es valido no siga
    if(this.txtInput.value===this.todo.texto){return;} //aqui decimos que si no hicimos ningun cambio(ei el valor introducido es exactamente igual al que había), no disparamos la accion
    
    
    this.store.dispatch(actions.editar({   //activamos la accion editar y asignamos al id el id del todo y al texto, el texto del todo
      id: this.todo.id,
      texto: this.txtInput.value, //esto al fin y al cabo es crear un objeto exactamente igual al original con dos atributos, id y texto, que seran los que haya recibido(hecho click)
    
    }))
    console.log(this.store)
  }

}
