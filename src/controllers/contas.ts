import { Conta } from '../models/conta';
import { Banco } from '../mock/banco';
import { tipoContas } from '../enums/tipoContas';

/**
 * Mock do Banco
 */
const banco = new Banco();
banco.adicionarConta(new Conta(1, tipoContas.Corrente));
banco.adicionarConta(new Conta(2, tipoContas.Corrente));

async function depositarValorEmContaPorNumero (valorDeposito: number, numeroDaConta: number) : Promise<Conta> {
    return new Promise<Conta>((res, rej) => {
        try {
            const conta = banco.getContaPorNumero(numeroDaConta);
            conta.depositar(valorDeposito);
            res(conta);
        } catch (err) {
            rej(err);
        }
    });

};

async function sacarValorDeContaPorNumero (valorSaque: number, numeroDaConta: number) : Promise<Conta> {
    return new Promise<Conta>((res, rej) => {
        try {
            const conta = banco.getContaPorNumero(numeroDaConta);
            conta.sacar(valorSaque);
            res(conta);
        } catch (err) {
            rej(err);
        }
    });
}

export default {
    "depositar": depositarValorEmContaPorNumero,
    "sacar": sacarValorDeContaPorNumero,
}