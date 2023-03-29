
//store es una clase

import { reducer } from "./estructuraReal/contador/contador.reducer";
import { Action, Reducer } from "./estructuraReal/ngrx-fake/ngrx";
import{
    sumadorAction,
    restadorAction,
    multiplicadorAction,
    dividirAction,
    reset
} from "./estructuraReal/contador/contador.actions";

class Store<I>{

    //private state:I;

    constructor(private reducer: Reducer<I>,
                private state: I)  {  //I es generico,lo que ponga aquim obliga a ser el mismo dato despues,si pongo uih numero, sera un numero e string lo mismo
    }
    getState(){
        return this.state; //el tipico getter 
    }
    dispatch(action:Action){

        this.state=this.reducer(this.state,action);

    }
}

const store = new Store(reducer,10);
console.log(store.getState());

//console.log(reducer(10,sumadorAction)) al poner el dispatch,funciona así:

console.log(store.dispatch(sumadorAction)); //esto imprime indefinido, solo hace la acción,para comprobarlo,vemos el estado de nuevo
console.log(store.getState());
console.log(store.dispatch(sumadorAction))
console.log(store.dispatch(sumadorAction))
console.log(store.getState());