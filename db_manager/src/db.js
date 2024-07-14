const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient().$extends({
	result: {
		item: {
			technicalSpecifications: {
				needs: { technicalSpecifications: true },
				compute(item) {
					return JSON.stringify(item.technicalSpecifications);
				},
			},
		},
	},
});

exports.prisma = prisma;
