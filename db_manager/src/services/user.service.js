const { prisma } = require('../db');

const select = {
	id: true,
	username: true,
	googleId: true,
	email: true,
	createdAt: true,
};

async function CreateUser(call, callback) {
	const { googleId, username, email, passwordHash } = call.request;
	try {
		const user = await prisma.user.create({
			data: {
				googleId,
				username,
				email,
				passwordHash,
			},
			select,
		});
		callback(null, { user });
	} catch (error) {
		callback(error, null);
	}
}

async function GetUserByGoogleId(call, callback) {
	const { googleId } = call.request;
	try {
		const user = await prisma.user.findUnique({
			where: { googleId },
			select,
		});
		callback(null, { user });
	} catch (error) {
		callback(error, null);
	}
}

async function GetUserByUsername(call, callback) {
	const { username } = call.request;
	try {
		const user = await prisma.user.findUnique({
			where: { username },
			select: {
				...select,
				passwordHash: true,
			},
		});
		callback(null, { user });
	} catch (error) {
		callback(error, null);
	}
}

async function GetUser(call, callback) {
	const { id } = call.request;
	try {
		const user = await prisma.user.findUnique({
			where: { id: Number(id) },
			select,
		});
		callback(null, { user });
	} catch (error) {
		callback(error, null);
	}
}

async function ListUsers(_call, callback) {
	try {
		const users = await prisma.user.findMany({
			select,
		});
		callback(null, { users });
	} catch (error) {
		callback(error, null);
	}
}

async function UpdateUser(call, callback) {
	const { id, email, passwordHash } = call.request;
	try {
		const data = {};
		if (email) {
			data.email = email;
		}
		if (passwordHash) {
			data.passwordHash = passwordHash;
		}

		const user = await prisma.user.update({
			where: { id: Number(id) },
			data,
			select,
		});
		callback(null, { user });
	} catch (error) {
		callback(error, null);
	}
}

async function DeleteUser(call, callback) {
	const { id } = call.request;
	try {
		await prisma.user.delete({
			where: { id: Number(id) },
		});
		callback(null, { success: true });
	} catch (error) {
		callback(error, null);
	}
}

module.exports = {
	CreateUser,
	GetUser,
	GetUserByGoogleId,
	GetUserByUsername,
	ListUsers,
	UpdateUser,
	DeleteUser,
};
