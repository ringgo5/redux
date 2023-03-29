import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';//creo uno por cada botón,así sólo permitiremos estas 3 palabras a la hora de filtrar

export const setFiltro = createAction('[filtro], Set  Filtro',
    props<{ filtro: filtrosValidos }>() //necesitamos un dato,ya que queremos saber donde estamos en los botones de abajo
    ) ;


