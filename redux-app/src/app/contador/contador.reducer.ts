import { Action, createReducer, on } from "@ngrx/store";
import { decrementar, dividir, incrementar,  multiplicar,  resetear } from "./contador.actions";

/*
export function contadorReducer(state: number = 10, action: Action) {

    switch (action.type) {
        //ponemos incrementar.type ya que cuando lo hemos creado en contador.actions,lo hemos creado como '[contador] incrementar', con lo que type se refiere a incrementar
        case incrementar.type:
            return state + 1;
        case decrementar.type:
            return state - 1;

        default:
            return state; //este lo ponemos SIEMPRE
    }

}*/
//vamos a hacer una simplificacion más, toda la funcion la vamos a editar y la dejaremos así:
export const initialState = 20;
const _contadorReducer = createReducer(initialState,
    on(incrementar, state => state + 1), //asi para cuando no tengamos ningún argumento
    on(decrementar, state => state -1),
    on(resetear,state=>20),
    on(multiplicar,(state,{numero})=>state*numero ), //o tb (state,props)=>state * props.numero. De la manera que lo dejo, aprovecho la desestructuracion
    on(dividir,(state,{numero})=>state/numero ),
    );

export function contadorReducer(state: number | undefined, action: Action){
    return _contadorReducer(state,action);
}
    



