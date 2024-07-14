const { prisma } = require('../db');

async function CreateCartItem(call, callback) {
	const { userId, itemId, quantity } = call.request;
	try {
		const cartItem = await prisma.cartItem.create({
			data: {
				userId,
				itemId,
				quantity,
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

async function UpdateCartItem(call, callback) {
	const { id, quantity } = call.request;
	try {
		const data = {};
		if (quantity) {
			data.quantity = quantity;
		}

		const cartItem = await prisma.cartItem.update({
			where: { id: Number(id) },
			data,
		});
		callback(null, { cartItem });
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
	} catch (error) {
		callback(error, null);
	}
}

module.exports = {
	CreateCartItem,
	ListCartItems,
	UpdateCartItem,
	DeleteCartItem,
};
