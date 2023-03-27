import { Action } from "@ngrx/store";
import { decrementar, incrementar } from "./contador.actions";

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

}