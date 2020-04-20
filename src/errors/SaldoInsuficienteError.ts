import ErroCustomizado from "./ErroCustomizado";

export default class SaldoInsuficienteError extends ErroCustomizado {

    public static codigoDeRetorno: number = 412; // precondition failed

    constructor(m: string) {
        super(m, SaldoInsuficienteError.codigoDeRetorno);
        Object.setPrototypeOf(this, SaldoInsuficienteError.prototype);
    }
}
