import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import * as actions from "./todo.actions";


export const estadoInicial: Todo[] = [
    new Todo("salvar al mundo")
]; //como voy recibir texto, le digo que es un array vacio


const _todoReducer = createReducer(estadoInicial,
    on(actions.crearTodo, (state, { texto }) => [...state, new Todo(texto)]), //con esto, separo cada estado que me den ( todo) y creo uno nuevo con el texto dado
    //importante para prevenir la no mutacion. NUNCA USAR UN PUSH, ya que podriamos joder el estado original.SI fuese numerico si,
    //pero los objetos se pasan por referencia
    on(actions.toggle, (state, { id }) => {

        return state.map(todo => {

            if (todo.id === id) {
                return {
                    ...todo,   //con esto le indicamos, que haga un mapeo(cree un nuevo array), coja todas las propiedades y se quede solo con completado
                    completado: !todo.completado //lo cambie a los contrario de como esté
                }

            } else {
                return todo;
            } //la parte de arriba,desde if(todo.id===id) se podría hacer de otra forma mas sencilla, directamente poniendo :
            // todo.completado = !todo.completado
            //return todo; pero así estaríamos mutando el nuevo objeto;si por ejmplo hacemos la prueba en el navegador, creamos un input, lo editamos y
            //deseditamos varias veces, si volvemos atras en la pestaña redux, veremos que no cambia el estado, y eso es porque lo estamos editando. No 
            //debemos editarlo. Por eso,aunque sea mas lioso,mejor hacerlo como está. El ...todo extrae todo y solo nos quedamos con completado:
            //Ademas, esto CREA OTRO OBJETO EXACTAMENTE IGUAL,que es lo principal que queremos
        });
    }),
    on(actions.editar, (state, { id, texto }) => {

        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            }else{
                return todo;
            }
        })
    }),
    on(actions.borrar,(state, {id})=> state.filter(todo=>todo.id !==id)),
    on(actions.toggleAll,(state, {completado})=>
    //state.filter(todo=>todo.completado=!completado  esto es lo que yo hice, queria seleecionar todos y cambiar el estado de completado:
        state.map(todo=>{
            return{
                ...todo,
                completado: completado //aqui solo ponemos lo que queremos quedarnos
            }

        })
        
        )
/* on(actions.toggleAll,(state, {completado})=>state.map(todo=>{return{...todo,completado: completado}})));*/

);
export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}