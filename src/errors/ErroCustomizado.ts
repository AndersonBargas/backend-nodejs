export default class ErroCustomizado extends Error {

    codigoDeRetorno: number;

    constructor(message: string, codigoDeRetorno: number) {
        super(message);
        this.name = this.constructor.name;
        this.codigoDeRetorno = codigoDeRetorno;
        Error.captureStackTrace(this, this.constructor);
    }

}