import dotenv from 'dotenv'
import { Application } from 'express';

export default ({ app }: { app: Application }) => {
    dotenv.config();

    app.set('apiPrefix', process.env.API_PREFIX || '/api');
    app.set('port', process.env.PORT || 5000);

    app.set('moedaSimbolo', process.env.MOEDA_SIMBOLO || 'B$');
    app.set('saqueLimite', process.env.SAQUE_LIMITE || 600);
    app.set('saqueTaxa', process.env.SAQUE_TAXA || 0.30);

}