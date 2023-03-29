import { Component, OnInit } from '@angular/core';
import { toggleAll } from '../todo.actions';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;

  constructor(private store: Store<AppState>) { }


  toggleAll() {

    this.completado= !this.completado; //cambiamos el completado y lo ponemos abajo
    this.store.dispatch(toggleAll({completado: this.completado}))



  }

  ngOnInit(): void {
    ;
  }

}
