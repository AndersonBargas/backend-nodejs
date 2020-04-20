import { Router } from 'express';
import acoes from './routes/acoes';

export default () => {
    const app = Router();

	acoes(app);

	return app
}