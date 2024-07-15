import { credentials, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import type { ProtoGrpcType as CartItemProtoGrpcType } from './types/cart_item';
import type { ProtoGrpcType as ItemProtoGrpcType } from './types/item';
import type { ProtoGrpcType as OrderProtoGrpcType } from './types/order';
import type { ProtoGrpcType as UserProtoGrpcType } from './types/user';
import { env } from './env';
import type { CreateUserRequest } from './types/dropnshop/CreateUserRequest';
import type { SafeUserResponse__Output } from './types/dropnshop/SafeUserResponse';
import type { GetUserRequest } from './types/dropnshop/GetUserRequest';
import type { UserResponse__Output } from './types/dropnshop/UserResponse';
import type { ListUsersRequest } from './types/dropnshop/ListUsersRequest';
import type { ListUsersResponse__Output } from './types/dropnshop/ListUsersResponse';
import type { UpdateUserRequest } from './types/dropnshop/UpdateUserRequest';
import type { DeleteUserRequest } from './types/dropnshop/DeleteUserRequest';
import type { DeleteUserResponse__Output } from './types/dropnshop/DeleteUserResponse';
import type { GetUserByUsernameRequest } from './types/dropnshop/GetUserByUsernameRequest';
import type { GetUserByGoogleIdRequest } from './types/dropnshop/GetUserByGoogleIdRequest';
import type { CreateItemRequest } from './types/dropnshop/CreateItemRequest';
import type { ItemResponse__Output } from './types/dropnshop/ItemResponse';
import type { GetItemRequest } from './types/dropnshop/GetItemRequest';
import type { ListItemsRequest } from './types/dropnshop/ListItemsRequest';
import type { ListItemsResponse__Output } from './types/dropnshop/ListItemsResponse';
import type { UpdateItemRequest } from './types/dropnshop/UpdateItemRequest';
import type { DeleteItemRequest } from './types/dropnshop/DeleteItemRequest';
import type { DeleteItemResponse__Output } from './types/dropnshop/DeleteItemResponse';
import type { UpsertCartItemRequest } from './types/dropnshop/UpsertCartItemRequest';
import type { CartItemResponse__Output } from './types/dropnshop/CartItemResponse';
import type { ListCartItemsResponse__Output } from './types/dropnshop/ListCartItemsResponse';
import type { ListCartItemsRequest } from './types/dropnshop/ListCartItemsRequest';
import type { DeleteCartItemResponse__Output } from './types/dropnshop/DeleteCartItemResponse';
import type { DeleteCartItemRequest } from './types/dropnshop/DeleteCartItemRequest';
import type { CreateOrderRequest } from './types/dropnshop/CreateOrderRequest';
import type { OrderResponse__Output } from './types/dropnshop/OrderResponse';
import type { ListOrdersResponse__Output } from './types/dropnshop/ListOrdersResponse';
import type { ListOrdersRequest } from './types/dropnshop/ListOrdersRequest';
import type { GetOrderRequest } from './types/dropnshop/GetOrderRequest';
import type { GetManyItemRequest } from './types/dropnshop/GetManyItemRequest';

type CartItemProto = CartItemProtoGrpcType['dropnshop'];
type ItemProto = ItemProtoGrpcType['dropnshop'];
type OrderProto = OrderProtoGrpcType['dropnshop'];
type UserProto = UserProtoGrpcType['dropnshop'];

type Proto = CartItemProto & ItemProto & OrderProto & UserProto;

const packageDefinition = loadSync(
	['protos/cart_item.proto', 'protos/item.proto', 'protos/order.proto', 'protos/user.proto'],
	{
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	},
);
const protoDefinitions = loadPackageDefinition(packageDefinition).dropnshop as unknown as Proto;

const rawClientItems = new protoDefinitions.ItemService(env.GRPC_URL, credentials.createInsecure());
const rawClientOrders = new protoDefinitions.OrderService(env.GRPC_URL, credentials.createInsecure());
const rawClientUsers = new protoDefinitions.UserService(env.GRPC_URL, credentials.createInsecure());
const rawClientCartItems = new protoDefinitions.CartItemService(env.GRPC_URL, credentials.createInsecure());

export const clientItems = {
	createItem: (payload: CreateItemRequest): Promise<ItemResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientItems.CreateItem(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	getItem: (payload: GetItemRequest): Promise<ItemResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientItems.GetItem(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	getManyItems: (payload: GetManyItemRequest): Promise<ListItemsResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientItems.GetManyItems(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	listItems: (payload: ListItemsRequest): Promise<ListItemsResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientItems.ListItems(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	updateItem: (payload: UpdateItemRequest): Promise<ItemResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientItems.UpdateItem(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	deleteItem: (payload: DeleteItemRequest): Promise<DeleteItemResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientItems.DeleteItem(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
};

export const clientOrders = {
	createOrder: (payload: CreateOrderRequest): Promise<OrderResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientOrders.CreateOrder(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	getOrder: (payload: GetOrderRequest): Promise<OrderResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientOrders.GetOrder(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	listOrders: (payload: ListOrdersRequest): Promise<ListOrdersResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientOrders.ListOrders(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
};

export const clientUsers = {
	createUser: (payload: CreateUserRequest): Promise<SafeUserResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientUsers.CreateUser(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	getUser: (payload: GetUserRequest): Promise<SafeUserResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientUsers.GetUser(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	getUserByGoogleId: (payload: GetUserByGoogleIdRequest): Promise<SafeUserResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientUsers.GetUserByGoogleId(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	getUserByUsername: (payload: GetUserByUsernameRequest): Promise<UserResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientUsers.GetUserByUsername(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	listUsers: (payload: ListUsersRequest): Promise<ListUsersResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientUsers.ListUsers(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	updateUser: (payload: UpdateUserRequest): Promise<SafeUserResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientUsers.UpdateUser(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	deleteUser: (payload: DeleteUserRequest): Promise<DeleteUserResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientUsers.DeleteUser(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
};

export const clientCartItems = {
	upsertCartItem: (payload: UpsertCartItemRequest): Promise<CartItemResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientCartItems.UpsertCartItem(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	listCartItems: (payload: ListCartItemsRequest): Promise<ListCartItemsResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientCartItems.ListCartItems(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
	deleteCartItem: (payload: DeleteCartItemRequest): Promise<DeleteCartItemResponse__Output> =>
		new Promise((resolve, reject) => {
			rawClientCartItems.DeleteCartItem(payload, (err, res) => {
				if (err) reject(err);
				resolve(res!);
			});
		}),
};
