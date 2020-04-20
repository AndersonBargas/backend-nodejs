import ErroCustomizado from "./ErroCustomizado";

export default class ContaNaoEncontradaError extends ErroCustomizado {

    public static codigoDeRetorno: number = 404; // not found

    constructor(m: string) {
        super(m, ContaNaoEncontradaError.codigoDeRetorno);
        Object.setPrototypeOf(this, ContaNaoEncontradaError.prototype);
    }
}
