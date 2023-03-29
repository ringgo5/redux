import { Todo } from "../models/todo.model";

export interface AppState{
    todos: Todo[],
   // usuario:{}
   //id: {} aqui pondremos de la forma en la que queramos verlo. En este caso solo vamos a ver el arreglo con los todos
}