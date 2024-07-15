import type { Request, Response } from 'express';
import { clientItems, clientOrders } from '../protos';
import type { Order__Output } from '../types/dropnshop/Order';
import { transformItem } from './item.service';
import type { User__Output } from '../types/dropnshop/User';
import type { CreateOrderRequestSchema } from '../schemas/order.schema';

export const transformOrder = (item: Order__Output | undefined) =>
	item
		? {
				...item,
				orderLines:
					item.orderLines?.map((orderLine) => ({
						...orderLine,
						item: transformItem(orderLine.item),
					})) ?? [],
			}
		: null;

async function create(req: Request<unknown, unknown, CreateOrderRequestSchema['body']>, res: Response) {
	const items = await clientItems.getManyItems({
		ids: req.body.orderLines.map((orderLine) => orderLine.itemId),
	});

	if (items?.items?.length !== req.body.orderLines.length) {
		res.status(400).json({ message: 'Invalid input' });
		return;
	}

	const output = await clientOrders.createOrder({
		...req.body,
		userId: (req.user as Required<User__Output>)!.id,
		orderLines: req.body.orderLines.map((orderLine) => ({
			...orderLine,
			price: items.items!.find((item) => item.id === orderLine.itemId)!.price,
		})),
	});
	res.json(transformOrder(output?.order));
}

async function get(req: Request, res: Response) {
	const output = await clientOrders.getOrder({ id: Number(req.params.id) });
	if (!output?.order) {
		res.status(404).json({ message: 'Order not found' });
		return;
	}

	res.json(transformOrder(output.order));
}

async function list(_req: Request, res: Response) {
	const output = await clientOrders.listOrders({});
	res.json(output?.orders?.map(transformOrder) ?? []);
}

export { create, get, list };
