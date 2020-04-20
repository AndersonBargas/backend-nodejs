import { Application } from 'express';
import { Conta } from '../models/conta';
import { tipoContas } from '../enums/tipoContas';
import { Banco } from '../mock/banco';

export default ({ app }: { app: Application }) => {

    const banco = new Banco();

    const conta1 = new Conta(1, tipoContas.Corrente);
    const conta2 = new Conta(1, tipoContas.Poupanca);

    banco.adicionarConta(conta1);
    banco.adicionarConta(conta2);

    app.set('banco', banco);

}