import { z } from 'zod';

export const orderLineSchema = z.object({
	itemId: z.number().positive().int(),
	quantity: z.number().positive().int(),
});

export const orderSchema = z.object({
	shippingAddress: z.string().max(100),
	orderLines: z.array(orderLineSchema).nonempty(),
});

export const orderIdSchema = z.object({ id: z.string() });

export const createOrderRequestSchema = z.object({
	body: orderSchema,
});
export const getOrderRequestSchema = z.object({ params: orderIdSchema });

export type OrderSchema = z.infer<typeof orderSchema>;
export type OrderIdSchema = z.infer<typeof orderIdSchema>;
export type CreateOrderRequestSchema = z.infer<typeof createOrderRequestSchema>;
export type GetOrderRequestSchema = z.infer<typeof getOrderRequestSchema>;
