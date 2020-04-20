export default class ContaNaoEncontradaError extends Error {

    public static codigoDeRetorno: number = 404; // not found

    constructor(m: string) {
        super(m);
        Object.setPrototypeOf(this, ContaNaoEncontradaError.prototype);
    }
}
