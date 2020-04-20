import { tipoContas } from "../enums/tipoContas";


export class Conta {

    private _numero: number;
    private _saldo: number = 0;
    private _tipo: tipoContas;


    constructor (numero: number, tipo: tipoContas) {
        this._numero = numero;
        this._tipo = tipo;
    }

    get numero(): number {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    get tipo(): tipoContas {
        return this._tipo;
    }

}