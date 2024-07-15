import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { Request, Response } from 'express';
import { clientUsers } from '../protos';
import { env } from '../env';

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
	const output = await clientUsers.createUser({
		...req.body,
		passwordHash,
	});

	const accessToken = jwt.sign({ id: output.user!.id }, env.JWT_SECRET, { expiresIn: '7d' });

	res.json({ accessToken, user: output.user });
}

function me(req: Request, res: Response) {
	res.json({ user: req.user });
}

export { login, register, me };
