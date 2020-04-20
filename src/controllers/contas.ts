import { Conta } from '../models/conta';
import { Banco } from '../mock/banco';
import { tipoContas } from '../enums/tipoContas';

/**
 * Mock do Banco
 */
const banco = new Banco();
banco.adicionarConta(new Conta(1, tipoContas.Corrente));
banco.adicionarConta(new Conta(2, tipoContas.Corrente));

async function depositarValorEmContaPorNumero (valorDeposito: number, numeroDaConta: number) : Promise<void> {
    return new Promise<void>((res, rej) => {
        try {
            const conta = banco.getContaPorNumero(numeroDaConta);
            conta.depositar(valorDeposito);
            res();
        } catch (err) {
            rej();
        }
    });

};

async function sacarValorDeContaPorNumero (valorSaque: number, numeroDaConta: number) : Promise<void> {
    return new Promise<void>((res, rej) => {
        try {
            const conta = banco.getContaPorNumero(numeroDaConta);
            conta.sacar(valorSaque);
            res();
        } catch (err) {
            rej();
        }
    });
}

export default {
    "depositar": depositarValorEmContaPorNumero,
    "sacar": sacarValorDeContaPorNumero,
}