import { Router } from 'express';
import contas from './routes/contas';

export default () => {
    const app = Router();

	contas(app);

	return app
}