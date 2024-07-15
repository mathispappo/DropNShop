import { z } from 'zod';

export const registerSchema = z.object({
	body: z.object({
		username: z.string(),
		email: z.string().email(),
		password: z.string(),
	}),
});

export const loginSchema = z.object({
	body: z.object({
		username: z.string(),
		password: z.string(),
	}),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
