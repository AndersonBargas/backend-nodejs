import { Router } from 'express';

const route = Router();

export default (app: Router) => {

    app.use('/contas', route);

    route.post('/:numeroDaConta/deposito', (req, res) => {
        
    });
    
    route.get('/:numeroDaConta/saque/', (req, res) => {
        
    });


};