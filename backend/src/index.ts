import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import { env } from './env';
import { router } from './routes';
import { AppError } from './utils/app-types';
import './passport';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use(passport.initialize());

app.get('/', (_req: Request, res: Response) => {
	res.json({ message: 'Hello World!' });
});

app.use('/', router);

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
	if (err instanceof AppError) {
		return res.status(err.status).json({ message: err.message });
	}

	console.error(err);
	return res.status(500).json({ message: 'Internal server error' });
});

app.listen(env.BACKEND_PORT, () => {
	console.info(`Listening on http://${env.BACKEND_HOST}:${env.BACKEND_PORT}`);
});
