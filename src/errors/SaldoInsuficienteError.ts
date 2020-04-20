export default class SaldoInsuficienteError extends Error {

    public static codigoDeRetorno: number = 412; // precondition failed

    constructor(m: string) {
        super(m);
        Object.setPrototypeOf(this, SaldoInsuficienteError.prototype);
    }
}
