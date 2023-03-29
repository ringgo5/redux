import { createAction,props} from "@ngrx/store";


export const crearTodo= createAction(
    '[TODO] Crea todo',
    props<{texto: string}>()
);


export const toggle= createAction(
    '[TODO] toggle todo',
    props<{id:number}>()
);

export const editar= createAction(
    '[TODO] editar todo',
    props<{id:number, texto:string}>() //para editar necesitaremos el id, y el texto
);

export const borrar= createAction(
    '[TODO] borrar todo',
    props<{id:number}>()
);

export const toggleAll= createAction(
    '[TODO] marcarTodos todo',
    props<{completado:boolean}>()
);