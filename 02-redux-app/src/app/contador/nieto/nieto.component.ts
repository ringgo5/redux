import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

 
  contador!: number;
  

  constructor(private store:Store<AppState>) {

  }
  ngOnInit() { 
    this.store.select('contador')
        .subscribe(contador=>this.contador=contador);
  }
  resetear(){

    this.store.dispatch(actions.resetear());
    
  }
  poner0(){

    this.store.dispatch(actions.poner0());
    
  }
  

}





