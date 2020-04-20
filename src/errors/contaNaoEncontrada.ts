export default class ContaNaoEncontrada extends Error {

    public static codigoDeRetorno: number = 404; // not found

    constructor(m: string) {
        super(m);
        Object.setPrototypeOf(this, ContaNaoEncontrada.prototype);
    }
}
