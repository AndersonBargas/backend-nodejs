import ErroCustomizado from "./ErroCustomizado";

export default class ValorInvalidoError extends ErroCustomizado {

    public static codigoDeRetorno: number = 400; // bad request

    constructor(m: string) {
        super(m, ValorInvalidoError.codigoDeRetorno);
        Object.setPrototypeOf(this, ValorInvalidoError.prototype);
    }
}
