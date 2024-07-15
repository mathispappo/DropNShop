import type { Request, Response } from 'express';
import { clientCartItems, clientItems } from '../protos';
import type { CartItem__Output } from '../types/dropnshop/CartItem';
import { transformItem } from './item.service';
import type { User__Output } from '../types/dropnshop/User';

const transformCartItem = (cartItem: CartItem__Output | undefined) =>
	cartItem
		? {
				...cartItem,
				item: cartItem.item ? transformItem(cartItem.item) : null,
			}
		: null;

async function put(req: Request, res: Response) {
	const givenItem = await clientItems.getItem({ id: req.body.itemId });
	if (!givenItem?.item) {
		res.status(400).json({ message: 'Invalid input' });
		return;
	}

	const output = await clientCartItems.upsertCartItem({
		...req.body,
		userId: (req.user as Required<User__Output>)!.id,
	});
	res.json(transformCartItem(output?.cartItem));
}

async function list(_req: Request, res: Response) {
	const output = await clientCartItems.listCartItems({
		userId: (_req.user as Required<User__Output>)!.id,
	});
	res.json(output?.cartItems?.map(transformCartItem) ?? []);
}

async function remove(req: Request, res: Response) {
	const output = await clientCartItems.deleteCartItem({
		id: Number(req.params.id),
		userId: (req.user as Required<User__Output>)!.id,
	});
	if (!output?.success) {
		res.status(404).json({ message: 'CartItem not found' });
		return;
	}

	res.status(204).send();
}

export { put, list, remove };
