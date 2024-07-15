const { prisma } = require('../db');

async function CreateOrder(call, callback) {
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
			include: {
				orderLines: {
					include: {
						item: true,
					},
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
			include: {
				orderLines: {
					include: {
						item: true,
					},
				},
			},
		});
		callback(null, { order });
	} catch (error) {
		callback(error, null);
	}
}

async function ListOrders(_call, callback) {
	try {
		const orders = await prisma.order.findMany({
			include: {
				orderLines: {
					include: {
						item: true,
					},
				},
			},
		});
		callback(null, { orders });
	} catch (error) {
		callback(error, null);
	}
}

module.exports = {
	CreateOrder,
	GetOrder,
	ListOrders,
};
