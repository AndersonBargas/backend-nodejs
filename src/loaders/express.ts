import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import apiRoutes from '../api';

export default ({ app }: { app: express.Application }) => {

    // middlewares
    app.use(bodyParser.text())
    app.use(express.json())

    app.use(express.urlencoded({ extended: false }))
    app.use(cors())

    // api routes
    app.use(process.env.API_PREFIX || '/api', apiRoutes());

    // invalid route handler
    app.use((req, res) => {
        return res.status(404).send().end();
    });

    // error handler
    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (!err) {
            return next(err);
        }

        // an unknown error
        return res.status(500).send().end();
        
    });

};