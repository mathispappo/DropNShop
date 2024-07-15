import type { Request, Response } from 'express';
import { clientItems } from '../protos';
import type { Item__Output } from '../types/dropnshop/Item';

export const transformItem = (item: Item__Output | undefined) =>
	item
		? {
				...item,
				technicalSpecifications: item.technicalSpecifications ? JSON.parse(item.technicalSpecifications) : {},
			}
		: null;

async function create(req: Request, res: Response) {
	const output = await clientItems.createItem({
		...req.body,
		technicalSpecifications: JSON.stringify(req.body.technicalSpecifications),
	});
	res.json(transformItem(output?.item));
}

async function get(req: Request, res: Response) {
	const output = await clientItems.getItem({ id: Number(req.params.id) });
	if (!output?.item) {
		res.status(404).json({ message: 'Item not found' });
		return;
	}

	res.json(transformItem(output.item));
}

async function list(_req: Request, res: Response) {
	const output = await clientItems.listItems({});
	res.json(output?.items?.map(transformItem) ?? []);
}

async function update(req: Request, res: Response) {
	const output = await clientItems.updateItem({ id: Number(req.params.id), ...req.body });
	if (!output?.item) {
		res.status(404).json({ message: 'Item not found' });
		return;
	}

	res.json(transformItem(output.item));
}

async function remove(req: Request, res: Response) {
	const output = await clientItems.deleteItem({ id: Number(req.params.id) });
	if (!output?.success) {
		res.status(404).json({ message: 'Item not found' });
		return;
	}

	res.status(204).send();
}

export { create, get, list, update, remove };
