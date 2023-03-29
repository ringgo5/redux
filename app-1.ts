//acciones

interface Action{
    type: string; //por la fuerza tiene que ser un string
    payload?:any; //parametros que podemos mandar a la acción,es opcional
}


//como usar la accion:
/*
const incrementadorAction: Action = { lo bajamos abajo

    type:'INCREMENTAR'
};*/



//reducer es una funcion llamada reducer(recibe siempre 2 parámetros):

function reducer2(state=10,action:Action){ //IMPORTANTE, TODO LO QUE HAGA EL REDUCER DEBE HACERLO AQUI, NADA DE PETICIONES O COMUNICACIONES CON
                                            //EL EXTERIOR
    //si quisieramos por ejemplo que al estado le sumaramos uno:

    if(action.type === 'INCREMENTAR'){

        return state += 1;
    }


    return state; //siempre tiene que retornar un ESTADO.SIEMPRE SIEMPRE
}

//usar el reducer:

const incrementadorAction: Action = {

    type:'INCREMENTAR'
};

console.log(reducer2(10,incrementadorAction))