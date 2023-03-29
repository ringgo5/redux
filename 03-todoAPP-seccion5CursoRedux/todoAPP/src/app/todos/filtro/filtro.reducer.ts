import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';

export const estadoInicial: actions.filtrosValidos='todos'; //aqui solo permitira los que hemos deficinido en acciones

const _filtroReducer = createReducer(estadoInicial,
    on(actions.setFiltro, (state, { filtro }) => estadoInicial),
)




export function filtroReducer(state: any, action: any) {
    return _filtroReducer(state, action);
}