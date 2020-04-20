export default class ValorInvalidoError extends Error {

    public static codigoDeRetorno: number = 400; // bad request

    constructor(m: string) {
        super(m);
        Object.setPrototypeOf(this, ValorInvalidoError.prototype);
    }
}
