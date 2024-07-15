const { prisma } = require('../db');

async function CreateItem(call, callback) {
	const { title, shortDescription, longDescription, price, technicalSpecifications, imageUrl } = call.request;
	try {
		const item = await prisma.item.create({
			data: {
				title,
				shortDescription,
				longDescription,
				price,
				technicalSpecifications: JSON.parse(technicalSpecifications),
				imageUrl,
			},
		});
		callback(null, { item });
	} catch (error) {
		callback(error, null);
	}
}

async function GetItem(call, callback) {
	const { id } = call.request;
	try {
		const item = await prisma.item.findUnique({
			where: { id: Number(id) },
		});
		callback(null, { item });
	} catch (error) {
		callback(error, null);
	}
}

async function ListItems(_call, callback) {
	try {
		const items = await prisma.item.findMany();
		callback(null, { items });
	} catch (error) {
		callback(error, null);
	}
}

async function UpdateItem(call, callback) {
	const { id, title, shortDescription, longDescription, price, technicalSpecifications, imageUrl } = call.request;
	try {
		const data = {};
		if (title) {
			data.title = title;
		}
		if (shortDescription) {
			data.shortDescription = shortDescription;
		}
		if (longDescription) {
			data.longDescription = longDescription;
		}
		if (price) {
			data.price = price;
		}
		if (technicalSpecifications) {
			data.technicalSpecifications = technicalSpecifications;
		}
		if (imageUrl) {
			data.imageUrl = imageUrl;
		}

		const item = await prisma.item.update({
			where: { id: Number(id) },
			data,
		});
		callback(null, { item });
	} catch (error) {
		callback(error, null);
	}
}

async function DeleteItem(call, callback) {
	const { id } = call.request;
	try {
		await prisma.item.delete({
			where: { id: Number(id) },
		});
		callback(null, { success: true });
	} catch (error) {
		callback(error, null);
	}
}

module.exports = {
	CreateItem,
	GetItem,
	ListItems,
	UpdateItem,
	DeleteItem,
};