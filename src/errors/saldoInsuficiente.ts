export default class SaldoInsuficiente extends Error {

    public static codigoDeRetorno: number = 412; // precondition failed

    constructor(m: string) {
        super(m);
        Object.setPrototypeOf(this, SaldoInsuficiente.prototype);
    }
}
