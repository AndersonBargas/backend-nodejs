import express from 'express'
import loaders from './loaders'

const app = express();

async function appInit() {

    try {
        await loaders({ app: app });
        return console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'))
    } catch (err) {
        return console.error(err);
    }

}

appInit();
