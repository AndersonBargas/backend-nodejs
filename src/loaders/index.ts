import { Application } from 'express';
import { Server } from 'http';

import bancoLoader from './banco';
import configsLoader from './configs';
import expressLoader from './express';

export default async ({ app }: { app: Application }) : Promise<Server> => {

    bancoLoader({ app: app });
    configsLoader({ app: app });
    expressLoader({ app: app });

    return new Promise<Server>((res, rej) => {
        const server = app.listen(app.get('port'), () => {
            res(server);
        }).on('error', rej);
    });

};