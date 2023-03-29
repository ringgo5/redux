import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit{

  txtinput: FormControl;
  constructor( private store: Store<AppState>){

    this.txtinput = new FormControl('', Validators.required);//añadimos esto a la caja de texto que sera donde vayamos añadiendo todos
  }

    ngOnInit(): void {
        
    }
    agregar(){

     //   console.log(this.txtinput.value)
     //   console.log(this.txtinput.valid) //vemos que si apretamos sin añadir nada nos da falso

     if(this.txtinput.invalid){return;}
     this.store.dispatch(actions.crearTodo({texto: this.txtinput.value}))
     this.txtinput.reset();//para que cuando agregue un nuevo input ,se borre la caja de texto
    }
}
