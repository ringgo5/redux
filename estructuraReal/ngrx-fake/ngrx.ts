//ponemos la interfaz mas export para poder usarla.Esto será la librería

 export interface Action {
    type: string; 
    payload?: any; 
}

export interface Reducer <I>{
    (state: I,action:Action): I  //esto indica que siempre va a devolver el mismo tipo de dato que le demos como parametro
} //esto es lo mismo que la funcion,pero así evitamos escribir sobre el original. La I indica que sera el mismo valor el que le demos que el
//devuelto