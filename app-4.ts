
import {legacy_createStore, Store} from 'redux';
import { sumadorAction } from './estructuraReal/contador/contador.actions';
import { reducer } from './estructuraReal/contador/contador.reducer';



const store: Store=legacy_createStore(reducer); //con esto creamos,ponemos el nombre del reducer(reducer en mi caso)


store.subscribe(()=>{

    console.log('hola,numero,lo qu quieras:', store.getState()) //esto ocurrirá cada vez que el estado cambie, con lo que no tendremos que poner console
    //en hola podemos poner lo que queramos
})

store.dispatch(sumadorAction);
//console.log(store.getState())  ----) la forma correcta será como esta arriba, con el suscribed,que hace que cada vez que el estado cambie,ocurrla la funcion
store.dispatch(sumadorAction);
//console.log(store.getState())