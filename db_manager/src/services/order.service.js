const { prisma } = require('../db');

async function CreateOrders(call, callback) {
	const { userId, shippingAddress, orderLines } = call.request;
	try {
		const order = await prisma.order.create({
			data: {
				userId,
				shippingAddress,
				orderLines: {
					create: orderLines,
				},
			},
		});
		callback(null, { order });
	} catch (error) {
		callback(error, null);
	}
}

async function GetOrder(call, callback) {
	const { id } = call.request;
	try {
		const order = await prisma.order.findUnique({
			where: { id: Number(id) },
		});
		callback(null, { order });
	} catch (error) {
		callback(error, null);
	}
}

async function ListOrders(_call, callback) {
	try {
		const orders = await prisma.order.findMany();
		callback(null, { orders });
	} catch (error) {
		callback(error, null);
	}
}

module.exports = {
	CreateOrders,
	GetOrder,
	ListOrders,
};
