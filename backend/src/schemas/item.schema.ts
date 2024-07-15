import { z } from 'zod';

export const itemSchema = z.object({
	title: z.string().max(100),
	shortDescription: z.string().max(100),
	longDescription: z.string().max(2000),
	price: z.number().positive(),
	technicalSpecifications: z.record(z.any()),
	imageUrl: z.string().url(),
});

export const itemIdSchema = z.object({ id: z.string() });

export const createItemRequestSchema = z.object({
	body: itemSchema,
});
export const getItemRequestSchema = z.object({ params: itemIdSchema });
export const updateItemRequestSchema = z.object({
	params: itemIdSchema,
	body: itemSchema.partial(),
});
export const deleteItemRequestSchema = z.object({
	params: itemIdSchema,
});

export type ItemSchema = z.infer<typeof itemSchema>;
export type ItemIdSchema = z.infer<typeof itemIdSchema>;
export type CreateItemRequestSchema = z.infer<typeof createItemRequestSchema>;
export type GetItemRequestSchema = z.infer<typeof getItemRequestSchema>;
export type UpdateItemRequestSchema = z.infer<typeof updateItemRequestSchema>;
export type DeleteItemRequestSchema = z.infer<typeof deleteItemRequestSchema>;
