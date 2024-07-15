import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { NextFunction, Request, Response } from 'express';
import { clientUsers } from '../protos';
import { env } from '../env';
import passport from 'passport';

async function login(req: Request, res: Response) {
	const output = await clientUsers.getUserByUsername({ username: req.body.username });
	if (!output?.user?.passwordHash) {
		return res.status(401).json({ message: 'Unknown user.' });
	}

	const isPasswordCorrect = await compare(req.body.password, output.user.passwordHash);
	if (!isPasswordCorrect) {
		return res.status(401).json({ message: 'Unknown user.' });
	}

	const accessToken = jwt.sign({ id: output.user.id }, env.JWT_SECRET, { expiresIn: '7d' });

	res.json({ accessToken, user: output.user });
}

async function register(req: Request, res: Response) {
	const passwordHash = await hash(req.body.password, 10);
	try {
		const output = await clientUsers.createUser({
			...req.body,
			passwordHash,
		});

		const accessToken = jwt.sign({ id: output.user!.id }, env.JWT_SECRET, { expiresIn: '7d' });

		res.json({ accessToken, user: output.user });
	} catch (error) {
		const err = error as { code: number };
		if ('code' in err && err.code === 2) return res.status(409).json({ message: 'User already exists.' });

		throw error;
	}
}

function google(req: Request, res: Response, next: NextFunction) {
	passport.authenticate('google', { scope: ['email', 'profile'] })(req, res, next);
}

function googleRedirect(req: Request, res: Response) {
	passport.authenticate('google', { session: false }, (err: unknown, user: { id: string }) => {
		if (err) {
			return res.status(401).json({ message: 'Unknown user.' });
		}

		const accessToken = jwt.sign({ id: user.id }, env.JWT_SECRET, { expiresIn: '7d' });

		res.json({ accessToken, user });
		return;
	})(req, res);
}

function me(req: Request, res: Response) {
	res.json({ user: req.user });
}

export { login, register, google, googleRedirect, me };
