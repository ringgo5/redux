
import { Action } from "../ngrx-fake/ngrx"; //importante importar Action,nos dará error si no

//importante exportar todas las acciones:

export const restadorAction: Action = {
    type: 'RESTAR'
};

export const sumadorAction: Action = {


    type: 'SUMAR'
};
export const multiplicadorAction: Action = {


    type: 'MULTIPLICAR',
    payload: 2
};
export const dividirAction: Action = {

    type: 'DIVIDIR',
    payload: 2
};
export const reset: Action = {

    type: 'RESET',
    
};