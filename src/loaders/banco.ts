import { Application } from 'express';
import { Conta } from '../models/conta';
import { tipoContas } from '../enums/tipoContas';

export default ({ app }: { app: Application }) => {

    const banco: Array<Conta> = [];

    const conta1: Conta = {
        numero: 1,
        saldo: 0,
        tipo: tipoContas.Corrente,
    }

    const conta2: Conta = {
        numero: 2,
        saldo: 8500,
        tipo: tipoContas.Poupanca,
    }

    banco.push(conta1);
    banco.push(conta2);

    app.set('banco', banco);

}