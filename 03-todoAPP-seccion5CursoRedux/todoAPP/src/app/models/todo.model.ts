//siempre un todo recibe un texto

export class Todo {

    public id: number;
    public texto: string;
    public completado: boolean;
    constructor(texto: string) {
        this.texto = texto;

        this.id = new Date().getTime(); //esto lo hace así por hacerlo de alguna manera,podría cogerse de una base de datos o algo así
        this.completado = false;
    }
}