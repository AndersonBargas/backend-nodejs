import { Conta } from "../models/Conta";
import ContaNaoEncontradaError from "../errors/ContaNaoEncontradaError";

export class Banco {

    public contas : Array<Conta> = [];

    public adicionarConta(conta: Conta) {
        this.contas.push(conta);
    }

    public getContaPorNumero(numero: number) : Conta {
        if (isNaN(numero)) {
            throw new ContaNaoEncontradaError(`Conta deve ser composta apenas por números`);
        }

        const contasEncontradas = this.contas.filter(conta => { return conta.numero === numero });
        if (contasEncontradas.length === 0) {
            throw new ContaNaoEncontradaError(`Conta "${numero}" não encontrada`);
        }
        return contasEncontradas[0];
    }

}