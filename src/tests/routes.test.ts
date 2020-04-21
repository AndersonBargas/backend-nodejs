import request from 'supertest';

import express from 'express';
import loaders from '../loaders'
import { Server } from 'http';

const app = express();
let server:Server;

beforeAll(async (done) => {
    server = await loaders({ app: app });
    done();
});


afterAll(async (done) => {
    server.close(() => {
        done();
    });
})

describe('Depósito', () => {
    it('não deve depositar em conta inexistente', async () => {

        const res = await request(app)
        .post('/api/contas/123/deposito')
        .send({
            valor: 1,
        });

        expect(res.status).toEqual(404);

    });
});

describe('Depósito', () => {
    it('deve depositar valor negativo na conta 1', async () => {

        const res = await request(app)
        .post('/api/contas/1/deposito')
        .send({
            valor: -1,
        });

        expect(res.status).toEqual(400);

    });
});

describe('Depósito', () => {
    it('deve depositar valor zerado na conta 1', async () => {

        const res = await request(app)
        .post('/api/contas/1/deposito')
        .send({
            valor: 0,
        });

        expect(res.status).toEqual(400);

    });
});

describe('Depósito', () => {
    it('deve depositar 500 biteris na conta 1', async () => {

        const res = await request(app)
        .post('/api/contas/1/deposito')
        .send({
            valor: 500,
        });

        expect(res.status).toEqual(200);
        expect(res.body).toEqual({
            "saldoAtual": 500,
        });

    });
});

describe('Saque', () => {
    it('não deve sacar de conta inexistente', async () => {

        const res = await request(app)
        .post('/api/contas/123/saque')
        .send({
            valor: 1,
        });

        expect(res.status).toEqual(404);

    });
});

describe('Saque', () => {
    it('não deve sacar valor negativo na conta 1', async () => {

        const res = await request(app)
        .post('/api/contas/1/saque')
        .send({
            valor: -1,
        });

        expect(res.status).toEqual(400);

    });
});

describe('Saque', () => {
    it('não deve sacar valor zerado na conta 1', async () => {

        const res = await request(app)
        .post('/api/contas/1/saque')
        .send({
            valor: 0,
        });

        expect(res.status).toEqual(400);

    });
});

describe('Saque', () => {
    it('não deve sacar 500 biteris na conta 1', async () => {

        const res = await request(app)
        .post('/api/contas/1/saque')
        .send({
            valor: 500,
        });

        expect(res.status).toEqual(412);

    });
});

describe('Saque', () => {
    it('deve sacar 100 biteris na conta 1', async () => {

        const res = await request(app)
        .post('/api/contas/1/saque')
        .send({
            valor: 100,
        });

        expect(res.status).toEqual(200);
        expect(res.body).toEqual({
            "saldoAtual": 500 - 100 -  parseFloat(app.get('saqueTaxa')),
        });

    });
});

describe('Saque', () => {
    it('não deve sacar acima do limite de saque na conta 1', async () => {

        const res = await request(app)
        .post('/api/contas/1/saque')
        .send({
            valor: parseFloat(app.get('saqueLimite')) + 0.01,
        });

        expect(res.status).toEqual(412);

    });
});
