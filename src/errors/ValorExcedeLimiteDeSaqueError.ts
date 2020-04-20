import ErroCustomizado from "./ErroCustomizado";

export default class ValorExcedeLimiteDeSaqueError extends ErroCustomizado {

    public static codigoDeRetorno: number = 412; // precondition failed

    constructor(m: string) {
        super(m, ValorExcedeLimiteDeSaqueError.codigoDeRetorno);
        Object.setPrototypeOf(this, ValorExcedeLimiteDeSaqueError.prototype);
    }
    
}
