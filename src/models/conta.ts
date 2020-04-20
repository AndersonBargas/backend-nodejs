import { tipoContas } from "../enums/tipoContas";
import ValorInvalido from "../errors/valorInvalido";
import ValorExcedeLimiteDeSaque from "../errors/valorExcedeLimiteDeSaque";
import SaldoInsuficiente from "../errors/saldoInsuficiente";


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

    public depositar(valor: number) {
        if (valor <= 0) {
            throw new ValorInvalido(`Valor deve ser maior que zero`);
        }
        this._saldo += valor;
    }

    public sacar(valor: number) {
        if (valor <= 0) {
            throw new ValorInvalido(`Valor deve ser maior que zero`);
        }

        const saqueLimite = process.env.SAQUE_LIMITE || 600;
        if (valor > saqueLimite) {
            throw new ValorExcedeLimiteDeSaque(`Valor excedeu o limite de saque: ${saqueLimite}`);
        }

        const saqueTaxa = (process.env.SAQUE_TAXA) ? parseFloat(process.env.SAQUE_TAXA) : parseFloat('0.30');
        const valorSaqueComTaxa = valor + saqueTaxa;
        if (this._saldo < valorSaqueComTaxa) {
            throw new SaldoInsuficiente(`O valor de saque mais taxa excede o saldo da conta`);
        }
        
        this._saldo -= valorSaqueComTaxa;
    }

}