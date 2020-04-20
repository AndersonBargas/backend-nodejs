import { Conta } from '../models/Conta';
import { Banco } from '../mock/Banco';
import { TipoContas } from '../enums/TipoContas';

/**
 * Mock do Banco
 */
const banco = new Banco();
banco.adicionarConta(new Conta(1, TipoContas.Corrente));
banco.adicionarConta(new Conta(2, TipoContas.Corrente));

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