import 'dotenv/config';
import { url, cleanEnv, host, port, str } from 'envalid';

export const env = cleanEnv(process.env, {
	// biome-ignore lint/style/useNamingConvention: environment variables are uppercase
	BACKEND_PORT: port(),
	// biome-ignore lint/style/useNamingConvention: environment variables are uppercase
	BACKEND_HOST: host(),
	// biome-ignore lint/style/useNamingConvention: environment variables are uppercase
	FRONTEND_URL: url(),
	// biome-ignore lint/style/useNamingConvention: environment variables are uppercase
	JWT_SECRET: str(),
	// biome-ignore lint/style/useNamingConvention: environment variables are uppercase
	GRPC_URL: url(),
});
