import { Action } from "../ngrx-fake/ngrx";


export function reducer(state = 10, action: Action) {
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
            state = 0;
            return state;

        default:
            return state;
    }
}
