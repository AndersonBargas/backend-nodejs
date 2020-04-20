import { TipoContas } from "../enums/TipoContas";
import ValorInvalidoError from "../errors/ValorInvalidoError";
import ValorExcedeLimiteDeSaqueError from "../errors/ValorExcedeLimiteDeSaqueError";
import SaldoInsuficienteError from "../errors/SaldoInsuficienteError";


export class Conta {

    #numero: number;
    #saldo: number = 0;
    #tipo: TipoContas;

    constructor (numero: number, tipo: TipoContas) {
        this.#numero = numero;
        this.#tipo = tipo;
    }

    get numero(): number {
        return this.#numero;
    }

    get saldo(): number {
        return this.#saldo;
    }

    get tipo(): TipoContas {
        return this.#tipo;
    }

    public depositar(valor: number) {
        if (valor <= 0) {
            throw new ValorInvalidoError(`Valor deve ser maior que zero`);
        }
        this.#saldo += valor;
    }

    public sacar(valor: number) {
        if (valor <= 0) {
            throw new ValorInvalidoError(`Valor deve ser maior que zero`);
        }

        const saqueLimite = process.env.SAQUE_LIMITE || 600;
        if (valor > saqueLimite) {
            throw new ValorExcedeLimiteDeSaqueError(`Valor excedeu o limite de saque: ${process.env.MOEDA_SIMBOLO}${saqueLimite}`);
        }

        const saqueTaxa = (process.env.SAQUE_TAXA) ? parseFloat(process.env.SAQUE_TAXA) : parseFloat('0.30');
        const valorSaqueComTaxa = valor + saqueTaxa;
        if (this.#saldo < valorSaqueComTaxa) {
            throw new SaldoInsuficienteError(`O valor de saque mais taxa excede o saldo da conta`);
        }
        
        this.#saldo -= valorSaqueComTaxa;
    }

}