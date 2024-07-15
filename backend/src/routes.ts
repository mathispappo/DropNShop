import { Router } from 'express';
import * as authService from './services/auth.service';
// import * as cartService from './services/cart.service';
// import * as itemService from './services/item.service';
// import * as orderService from './services/order.service';
import { validateSchema } from './middlewares/validate-schema';
import { loginSchema, registerSchema } from './schemas/auth.schema';
import passport from 'passport';

const router = Router();

// Auth
router.post('/auth/login', validateSchema(loginSchema), authService.login);
router.post('/auth/register', validateSchema(registerSchema), authService.register);
router.get('/auth/me', passport.authenticate('jwt', { session: false }), authService.me);

// Items
// router.post('/items', ensureAuthenticated, itemService.create);
// router.get('/items', ensureAuthenticated, itemService.list);
// router.get('/items/:id', ensureAuthenticated, itemService.get);
// router.patch('/items/:id', ensureAuthenticated, itemService.update);
// router.delete('/items/:id', ensureAuthenticated, itemService.remove);

// Cart
// router.post('/cart', ensureAuthenticated, cartService.create);
// router.get('/cart', ensureAuthenticated, cartService.list);
// router.patch('/cart/:id', ensureAuthenticated, cartService.update);
// router.delete('/cart/:id', ensureAuthenticated, cartService.remove);

// Orders
// router.post('/orders', ensureAuthenticated, orderService.create);
// router.get('/orders', ensureAuthenticated, orderService.list);
// router.get('/orders/:id', ensureAuthenticated, orderService.get);

export { router };
