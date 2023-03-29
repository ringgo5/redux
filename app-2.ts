/*
interface Action {
    type: string; //por la fuerza tiene que ser un string
    payload?: any; //parametros que podemos mandar a la acción,es opcional
}
*/

/*function reducer(state = 10, action: Action) {
    //vamos a cambiar la forma anterior por switch. Es esactamente igual, pero podemos poner todos los casos que queramos,eso sí,debemos definir cada caso abajo
    switch (action.type) {

        case 'RESTAR':
            return state -= 1;

        case 'SUMAR':
            return state += 1;

        case 'MULTIPLICAR': //como damos argumentos?---) primero,deben de estar en el payload
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        default:
            return state;
    }
}*/
/*
const restadorAction: Action = {


    type: 'RESTAR' //este es que tiene que coincidir para hacer la llamada
};

const sumadorAction: Action = {


    type: 'SUMAR'
};
const multiplicadorAction: Action = {


    type: 'MULTIPLICAR', //si pusieramos type:divir o cualquier otra cosa no definida, nos daria 10(return state en default)
    payload: 2
};
const dividirAction: Action = {


    type: 'DIVIDIR',
    payload: 2
};

//console.log(reducer(10, multiplicadorAction))
//console.log(reducer(10, sumadorAction))
//console.log(reducer(10, restadorAction))
console.log(reducer(10, dividirAction))*/

//al final solo quedará esto:
import { Action } from "./estructuraReal/ngrx-fake/ngrx";
/*import { sumadorAction } from "./estructuraReal/contador/contador.actions";
import { restadorAction } from "./estructuraReal/contador/contador.actions";
import { multiplicadorAction } from "./estructuraReal/contador/contador.actions";
import { dividirAction } from "./estructuraReal/contador/contador.actions";
import { reset } from "./estructuraReal/contador/contador.actions";*/
//el import de arriba es = a:

import{
    sumadorAction,
    restadorAction,
    multiplicadorAction,
    dividirAction,
    reset
} from "./estructuraReal/contador/contador.actions";

/*
function reducer(state = 10, action: Action) { --) lo pasamos a contador.reducer.ts
    //vamos a cambiar la forma anterior por switch. Es esactamente igual, pero podemos poner todos los casos que queramos,eso sí,debemos definir cada caso abajo
    switch (action.type) {

        case 'RESTAR':
            return state -= 1;

        case 'SUMAR':
            return state += 1;

        case 'MULTIPLICAR': //como damos argumentos?---) primero,deben de estar en el payload
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        case 'RESET':
            state=0;
            return state;

        default:
            return state;
    }
}
*/
//console.log(reducer(10,sumadorAction));
//console.log(reducer(10,sumadorAction));//por muchas veces que llamemos al sumador, siempre nos dará 10,ya que no estamos usando un store donde guardar variables
//usaremos el store en el app-3.es