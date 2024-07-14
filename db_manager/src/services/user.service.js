const { prisma } = require('../db');

async function CreateUser(call, callback) {
	const { username, email, passwordHash } = call.request;
	try {
		const user = await prisma.user.create({
			data: {
				username,
				email,
				passwordHash,
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
			select: {
				id: true,
				username: true,
				email: true,
				createdAt: true,
			},
		});
		callback(null, { user });
	} catch (error) {
		callback(error, null);
	}
}

async function ListUsers(_call, callback) {
	try {
		const users = await prisma.user.findMany({
			select: {
				id: true,
				username: true,
				email: true,
				createdAt: true,
			},
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
	ListUsers,
	UpdateUser,
	DeleteUser,
};
