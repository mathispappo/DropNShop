const { prisma } = require('../db');

async function UpsertCartItem(call, callback) {
	const { userId, itemId, quantity } = call.request;
	try {
		const cartItem = await prisma.cartItem.upsert({
			// biome-ignore lint/style/useNamingConvention: prisma compound key
			where: { userId_itemId: { userId, itemId } },
			update: { quantity },
			create: {
				userId,
				itemId,
				quantity,
			},
			include: {
				item: true,
			},
		});
		callback(null, { cartItem });
	} catch (error) {
		callback(error, null);
	}
}

async function ListCartItems(call, callback) {
	const { userId } = call.request;
	try {
		const cartItems = await prisma.cartItem.findMany({
			where: { userId: Number(userId) },
			include: {
				item: true,
			},
		});
		callback(null, { cartItems });
	} catch (error) {
		callback(error, null);
	}
}

async function DeleteCartItem(call, callback) {
	const { id } = call.request;
	try {
		await prisma.cartItem.delete({
			where: { id: Number(id) },
		});
		callback(null, { success: true });
	} catch {
		callback(null, { success: false });
	}
}

module.exports = {
	UpsertCartItem,
	ListCartItems,
	DeleteCartItem,
};
