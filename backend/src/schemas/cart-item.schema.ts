import { z } from 'zod';

export const cartItemSchema = z.object({
	itemId: z.number().positive().int(),
	quantity: z.number().positive().int(),
});

export const cartItemIdSchema = z.object({ id: z.string() });

export const upsertCartItemRequestSchema = z.object({
	body: cartItemSchema,
});
export const deleteCartItemRequestSchema = z.object({
	params: cartItemIdSchema,
});

export type CartItemSchema = z.infer<typeof cartItemSchema>;
export type CartItemIdSchema = z.infer<typeof cartItemIdSchema>;
export type UpsertCartItemRequestSchema = z.infer<typeof upsertCartItemRequestSchema>;
export type DeleteCartItemRequestSchema = z.infer<typeof deleteCartItemRequestSchema>;
