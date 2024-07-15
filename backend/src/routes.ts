import { Router } from 'express';
import * as authService from './services/auth.service';
import * as cartItemService from './services/cart-item.service';
import * as itemService from './services/item.service';
// import * as orderService from './services/order.service';
import { validateSchema } from './middlewares/validate-schema';
import { loginSchema, registerSchema } from './schemas/auth.schema';
import passport from 'passport';
import {
	createItemRequestSchema,
	deleteItemRequestSchema,
	getItemRequestSchema,
	updateItemRequestSchema,
} from './schemas/item.schema';
import { upsertCartItemRequestSchema, deleteCartItemRequestSchema } from './schemas/cart-item.schema';

const router = Router();

// Auth
router.post('/auth/login', validateSchema(loginSchema), authService.login);
router.post('/auth/register', validateSchema(registerSchema), authService.register);
router.get('/auth/google', authService.google);
router.get('/auth/google/redirect', authService.googleRedirect);
router.get('/auth/me', passport.authenticate('jwt', { session: false }), authService.me);

// Items
router.post(
	'/items',
	passport.authenticate('jwt', { session: false }),
	validateSchema(createItemRequestSchema),
	itemService.create,
);
router.get('/items', itemService.list);
router.get('/items/:id', validateSchema(getItemRequestSchema), itemService.get);
router.patch(
	'/items/:id',
	passport.authenticate('jwt', { session: false }),
	validateSchema(updateItemRequestSchema),
	itemService.update,
);
router.delete(
	'/items/:id',
	passport.authenticate('jwt', { session: false }),
	validateSchema(deleteItemRequestSchema),
	itemService.remove,
);

// Cart Items
router.put(
	'/cart-items',
	passport.authenticate('jwt', { session: false }),
	validateSchema(upsertCartItemRequestSchema),
	cartItemService.put,
);
router.get('/cart-items', passport.authenticate('jwt', { session: false }), cartItemService.list);
router.delete(
	'/cart-items/:id',
	passport.authenticate('jwt', { session: false }),
	validateSchema(deleteCartItemRequestSchema),
	cartItemService.remove,
);

// Orders
// router.post('/orders', ensureAuthenticated, orderService.create);
// router.get('/orders', ensureAuthenticated, orderService.list);
// router.get('/orders/:id', ensureAuthenticated, orderService.get);

export { router };
