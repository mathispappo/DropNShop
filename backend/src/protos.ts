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

// const rawClientItems = new protoDefinitions.ItemService(
// 	env.GRPC_URL,
// 	credentials.createInsecure(),
// );
// const rawClientOrders = new protoDefinitions.OrderService(
// 	env.GRPC_URL,
// 	credentials.createInsecure(),
// );
const rawClientUsers = new protoDefinitions.UserService(env.GRPC_URL, credentials.createInsecure());
// const rawClientCartItems = new protoDefinitions.CartItemService(
// 	env.GRPC_URL,
// 	credentials.createInsecure(),
// );

// export const clientItems = {
// 	createItem: (
// 		payload: ItemProto['CreateItemRequest']['type'],
// 	): Promise<ItemProto['ItemResponse']['type']> =>
// 		new Promise((resolve, reject) => {
// 			rawClientItems.CreateItem(payload, (err, res) => {
// 				if (err) reject(err);
// 				resolve(res!);
// 			});
// 		}),
// 	getItem: util.promisify(rawClientItems.GetItem),
// 	listItems: util.promisify(rawClientItems.ListItems),
// 	updateItem: util.promisify(rawClientItems.UpdateItem),
// 	deleteItem: util.promisify(rawClientItems.DeleteItem),
// };

// export const clientOrders = {
// 	createOrders: util.promisify(rawClientOrders.CreateOrders),
// 	getOrder: util.promisify(rawClientOrders.GetOrder),
// 	listOrders: util.promisify(rawClientOrders.ListOrders),
// };

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

// export const clientCartItems = {
// 	createCartItem: util.promisify(rawClientCartItems.CreateCartItem),
// 	listCartItems: util.promisify(rawClientCartItems.ListCartItems),
// 	updateCartItem: util.promisify(rawClientCartItems.UpdateCartItem),
// 	deleteCartItem: util.promisify(rawClientCartItems.DeleteCartItem),
// };
