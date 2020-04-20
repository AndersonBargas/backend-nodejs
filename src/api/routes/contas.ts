import { Router } from 'express';
import contasController from '../../controllers/contas';
import { Conta } from '../../models/conta';
import contas from '../../controllers/contas';

const route = Router();

export default (app: Router) => {

    app.use('/contas', route);

    route.post('/:numeroDaConta/deposito', (req, res, next) => {
        const valorDeposito = req.body['valor'];
        const numeroDaConta = parseInt(req.params['numeroDaConta']);
        
        contasController.depositar(valorDeposito, numeroDaConta)
        .then((conta) => {
            res.status(200).send(conta);
        })
        .catch(err => {
            next(err);
        });
    });
    
    route.post('/:numeroDaConta/saque/', (req, res, next) => {
        const valorDeposito = req.body['valor'];
        const numeroDaConta = parseInt(req.params['numeroDaConta']);

        contasController.sacar(valorDeposito, numeroDaConta)
        .then((conta) => {
            res.status(200).send(conta);
        })
        .catch(err => {
            next(err);
        });
    });


};