// Original file: protos/order.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateOrderRequest as _dropnshop_CreateOrderRequest, CreateOrderRequest__Output as _dropnshop_CreateOrderRequest__Output } from '../dropnshop/CreateOrderRequest';
import type { GetOrderRequest as _dropnshop_GetOrderRequest, GetOrderRequest__Output as _dropnshop_GetOrderRequest__Output } from '../dropnshop/GetOrderRequest';
import type { ListOrdersRequest as _dropnshop_ListOrdersRequest, ListOrdersRequest__Output as _dropnshop_ListOrdersRequest__Output } from '../dropnshop/ListOrdersRequest';
import type { ListOrdersResponse as _dropnshop_ListOrdersResponse, ListOrdersResponse__Output as _dropnshop_ListOrdersResponse__Output } from '../dropnshop/ListOrdersResponse';
import type { OrderResponse as _dropnshop_OrderResponse, OrderResponse__Output as _dropnshop_OrderResponse__Output } from '../dropnshop/OrderResponse';

export interface OrderServiceClient extends grpc.Client {
  CreateOrder(argument: _dropnshop_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _dropnshop_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _dropnshop_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _dropnshop_CreateOrderRequest, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _dropnshop_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _dropnshop_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _dropnshop_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _dropnshop_CreateOrderRequest, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  
  GetOrder(argument: _dropnshop_GetOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  GetOrder(argument: _dropnshop_GetOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  GetOrder(argument: _dropnshop_GetOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  GetOrder(argument: _dropnshop_GetOrderRequest, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _dropnshop_GetOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _dropnshop_GetOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _dropnshop_GetOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  getOrder(argument: _dropnshop_GetOrderRequest, callback: grpc.requestCallback<_dropnshop_OrderResponse__Output>): grpc.ClientUnaryCall;
  
  ListOrders(argument: _dropnshop_ListOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListOrdersResponse__Output>): grpc.ClientUnaryCall;
  ListOrders(argument: _dropnshop_ListOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ListOrdersResponse__Output>): grpc.ClientUnaryCall;
  ListOrders(argument: _dropnshop_ListOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListOrdersResponse__Output>): grpc.ClientUnaryCall;
  ListOrders(argument: _dropnshop_ListOrdersRequest, callback: grpc.requestCallback<_dropnshop_ListOrdersResponse__Output>): grpc.ClientUnaryCall;
  listOrders(argument: _dropnshop_ListOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListOrdersResponse__Output>): grpc.ClientUnaryCall;
  listOrders(argument: _dropnshop_ListOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ListOrdersResponse__Output>): grpc.ClientUnaryCall;
  listOrders(argument: _dropnshop_ListOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListOrdersResponse__Output>): grpc.ClientUnaryCall;
  listOrders(argument: _dropnshop_ListOrdersRequest, callback: grpc.requestCallback<_dropnshop_ListOrdersResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OrderServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOrder: grpc.handleUnaryCall<_dropnshop_CreateOrderRequest__Output, _dropnshop_OrderResponse>;
  
  GetOrder: grpc.handleUnaryCall<_dropnshop_GetOrderRequest__Output, _dropnshop_OrderResponse>;
  
  ListOrders: grpc.handleUnaryCall<_dropnshop_ListOrdersRequest__Output, _dropnshop_ListOrdersResponse>;
  
}

export interface OrderServiceDefinition extends grpc.ServiceDefinition {
  CreateOrder: MethodDefinition<_dropnshop_CreateOrderRequest, _dropnshop_OrderResponse, _dropnshop_CreateOrderRequest__Output, _dropnshop_OrderResponse__Output>
  GetOrder: MethodDefinition<_dropnshop_GetOrderRequest, _dropnshop_OrderResponse, _dropnshop_GetOrderRequest__Output, _dropnshop_OrderResponse__Output>
  ListOrders: MethodDefinition<_dropnshop_ListOrdersRequest, _dropnshop_ListOrdersResponse, _dropnshop_ListOrdersRequest__Output, _dropnshop_ListOrdersResponse__Output>
}
