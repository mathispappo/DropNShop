require('dotenv').config();
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const cartItemService = require('./services/cart-item.service');
const itemService = require('./services/item.service');
const orderService = require('./services/order.service');
const userService = require('./services/user.service');

const packageDefinition = protoLoader.loadSync(
	['protos/cart_item.proto', 'protos/item.proto', 'protos/order.proto', 'protos/user.proto'],
	{
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	},
);
const protoDefinitions = grpc.loadPackageDefinition(packageDefinition).dropnshop;

const server = new grpc.Server();

server.addService(protoDefinitions.CartItemService.service, cartItemService);
server.addService(protoDefinitions.ItemService.service, itemService);
server.addService(protoDefinitions.OrderService.service, orderService);
server.addService(protoDefinitions.UserService.service, userService);

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
	console.info('Server running at http://0.0.0.0:50051');
});
