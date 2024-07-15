import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
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
// passport.use(
// 	'local',
// 	new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, async (username, password, done) => {
// 		const output = await clientUsers.getUserByUsername({ username });
// 		console.log('DEBUG ~ output:', output);
// 		console.log('DEBUG ~ username:', username);
// 		console.log('DEBUG ~ password:', password);

// 		if (!output?.user?.passwordHash) {
// 			return done(null, undefined, { message: 'Unknown user.' });
// 		}

// 		if (await bcrypt.compare(password, output.user.passwordHash)) {
// 			return done(null, output.user);
// 		}
// 		return done(null, false, { message: 'Unknown user.' });
// 	}),
// );

// passport.use(
//   new GoogleStrategy({
//     clientID:     GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://yourdomain:3000/auth/google/callback",
//     passReqToCallback   : true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

// biome-ignore lint/suspicious/noExplicitAny:
passport.serializeUser((user: any, done) => done(null, user.id));

passport.deserializeUser((id: number, done) => {
	clientUsers
		.getUser({ id })
		.then((user) => done(null, user))
		.catch((err) => done(err));
});
