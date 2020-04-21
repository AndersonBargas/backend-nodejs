import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';

import apiRoutes from '../api';
import * as swaggerDocument from '../api/docs/swagger.json';
import ErroCustomizado from '../errors/ErroCustomizado';

export default ({ app }: { app: express.Application }) => {

    // middlewares
    app.use(bodyParser.text())
    app.use(express.json())

    app.use(express.urlencoded({ extended: false }))
    app.use(cors())

    // api routes
    app.use(app.get('apiPrefix'), apiRoutes());

    // load swagger doc onto root path
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  
    // invalid route handler
    app.use((req, res) => {
        return res.status(404).send().end();
    });

    // error handler
    app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (!err) {
            return next(err);
        }

        if (err instanceof ErroCustomizado) {
            const erro = err as ErroCustomizado;
            return res.status(erro.codigoDeRetorno).send({
                "mensagem": erro.message,
            }).end();
        }

        // an unknown error
        return res.status(500).send().end();
        
    });

};