import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[contador] incrementar');
export const decrementar = createAction('[nombreComponent] decrementar');
export const resetear = createAction('[nombreComponent] resetear');
export const multiplicar = createAction(
    '[contador] multiplicar',
    props<{ numero: number }>()   //con esto especificamos que tipo de informacion recibimos. Podriamos dejarlo como props() pero mucho mejor asi
);

export const dividir = createAction(
    '[contador] dividir',
    props<{ numero: number }>()   //con esto especificamos que tipo de informacion recibimos. Podriamos dejarlo como props() pero mucho mejor asi
);