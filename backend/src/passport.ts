import type { Request } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy, type VerifyCallback } from 'passport-google-oauth2';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { clientUsers } from './protos';
import { env } from './env';

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: env.JWT_SECRET,
};

passport.use(
	new JwtStrategy(opts, async (payload, done) => {
		try {
			const output = await clientUsers.getUser({ id: payload.id });
			if (!output?.user) {
				return done(null, undefined, { message: 'Unknown user.' });
			}

			return done(null, output.user);
		} catch (error) {
			return done(error);
		}
	}),
);

passport.use(
	'google',
	new GoogleStrategy(
		{
			clientID: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
			callbackURL: `http://${env.BACKEND_HOST}:${env.BACKEND_PORT}/auth/google/redirect`,
			passReqToCallback: true,
		},
		async (
			_request: Request,
			_accessToken: string,
			_refreshToken: string,
			profile: { id: string; email: string },
			done: VerifyCallback,
		) => {
			const output = await clientUsers.getUserByGoogleId({ googleId: profile.id });
			if (output?.user) {
				return done(null, output?.user);
			}

			const outputNewUser = await clientUsers.createUser({
				googleId: profile.id,
				email: profile.email,
				username: profile.email.split('@')[0],
			});

			if (!outputNewUser?.user) {
				return done(null, undefined, { message: 'Unknown user.' });
			}

			return done(null, outputNewUser.user);
		},
	),
);

// biome-ignore lint/suspicious/noExplicitAny:
passport.serializeUser((user: any, done) => done(null, user.id));

passport.deserializeUser((id: number, done) => {
	clientUsers
		.getUser({ id })
		.then((user) => done(null, user))
		.catch((err) => done(err));
});
