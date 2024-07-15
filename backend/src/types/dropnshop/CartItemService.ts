// Original file: protos/cart_item.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CartItemResponse as _dropnshop_CartItemResponse, CartItemResponse__Output as _dropnshop_CartItemResponse__Output } from '../dropnshop/CartItemResponse';
import type { CreateCartItemRequest as _dropnshop_CreateCartItemRequest, CreateCartItemRequest__Output as _dropnshop_CreateCartItemRequest__Output } from '../dropnshop/CreateCartItemRequest';
import type { DeleteCartItemRequest as _dropnshop_DeleteCartItemRequest, DeleteCartItemRequest__Output as _dropnshop_DeleteCartItemRequest__Output } from '../dropnshop/DeleteCartItemRequest';
import type { DeleteCartItemResponse as _dropnshop_DeleteCartItemResponse, DeleteCartItemResponse__Output as _dropnshop_DeleteCartItemResponse__Output } from '../dropnshop/DeleteCartItemResponse';
import type { ListCartItemsRequest as _dropnshop_ListCartItemsRequest, ListCartItemsRequest__Output as _dropnshop_ListCartItemsRequest__Output } from '../dropnshop/ListCartItemsRequest';
import type { ListCartItemsResponse as _dropnshop_ListCartItemsResponse, ListCartItemsResponse__Output as _dropnshop_ListCartItemsResponse__Output } from '../dropnshop/ListCartItemsResponse';
import type { UpdateCartItemRequest as _dropnshop_UpdateCartItemRequest, UpdateCartItemRequest__Output as _dropnshop_UpdateCartItemRequest__Output } from '../dropnshop/UpdateCartItemRequest';

export interface CartItemServiceClient extends grpc.Client {
  CreateCartItem(argument: _dropnshop_CreateCartItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  CreateCartItem(argument: _dropnshop_CreateCartItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  CreateCartItem(argument: _dropnshop_CreateCartItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  CreateCartItem(argument: _dropnshop_CreateCartItemRequest, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  createCartItem(argument: _dropnshop_CreateCartItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  createCartItem(argument: _dropnshop_CreateCartItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  createCartItem(argument: _dropnshop_CreateCartItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  createCartItem(argument: _dropnshop_CreateCartItemRequest, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteCartItem(argument: _dropnshop_DeleteCartItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteCartItemResponse__Output>): grpc.ClientUnaryCall;
  DeleteCartItem(argument: _dropnshop_DeleteCartItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_DeleteCartItemResponse__Output>): grpc.ClientUnaryCall;
  DeleteCartItem(argument: _dropnshop_DeleteCartItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteCartItemResponse__Output>): grpc.ClientUnaryCall;
  DeleteCartItem(argument: _dropnshop_DeleteCartItemRequest, callback: grpc.requestCallback<_dropnshop_DeleteCartItemResponse__Output>): grpc.ClientUnaryCall;
  deleteCartItem(argument: _dropnshop_DeleteCartItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteCartItemResponse__Output>): grpc.ClientUnaryCall;
  deleteCartItem(argument: _dropnshop_DeleteCartItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_DeleteCartItemResponse__Output>): grpc.ClientUnaryCall;
  deleteCartItem(argument: _dropnshop_DeleteCartItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteCartItemResponse__Output>): grpc.ClientUnaryCall;
  deleteCartItem(argument: _dropnshop_DeleteCartItemRequest, callback: grpc.requestCallback<_dropnshop_DeleteCartItemResponse__Output>): grpc.ClientUnaryCall;
  
  ListCartItems(argument: _dropnshop_ListCartItemsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListCartItemsResponse__Output>): grpc.ClientUnaryCall;
  ListCartItems(argument: _dropnshop_ListCartItemsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ListCartItemsResponse__Output>): grpc.ClientUnaryCall;
  ListCartItems(argument: _dropnshop_ListCartItemsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListCartItemsResponse__Output>): grpc.ClientUnaryCall;
  ListCartItems(argument: _dropnshop_ListCartItemsRequest, callback: grpc.requestCallback<_dropnshop_ListCartItemsResponse__Output>): grpc.ClientUnaryCall;
  listCartItems(argument: _dropnshop_ListCartItemsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListCartItemsResponse__Output>): grpc.ClientUnaryCall;
  listCartItems(argument: _dropnshop_ListCartItemsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ListCartItemsResponse__Output>): grpc.ClientUnaryCall;
  listCartItems(argument: _dropnshop_ListCartItemsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListCartItemsResponse__Output>): grpc.ClientUnaryCall;
  listCartItems(argument: _dropnshop_ListCartItemsRequest, callback: grpc.requestCallback<_dropnshop_ListCartItemsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateCartItem(argument: _dropnshop_UpdateCartItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  UpdateCartItem(argument: _dropnshop_UpdateCartItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  UpdateCartItem(argument: _dropnshop_UpdateCartItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  UpdateCartItem(argument: _dropnshop_UpdateCartItemRequest, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  updateCartItem(argument: _dropnshop_UpdateCartItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  updateCartItem(argument: _dropnshop_UpdateCartItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  updateCartItem(argument: _dropnshop_UpdateCartItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  updateCartItem(argument: _dropnshop_UpdateCartItemRequest, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CartItemServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateCartItem: grpc.handleUnaryCall<_dropnshop_CreateCartItemRequest__Output, _dropnshop_CartItemResponse>;
  
  DeleteCartItem: grpc.handleUnaryCall<_dropnshop_DeleteCartItemRequest__Output, _dropnshop_DeleteCartItemResponse>;
  
  ListCartItems: grpc.handleUnaryCall<_dropnshop_ListCartItemsRequest__Output, _dropnshop_ListCartItemsResponse>;
  
  UpdateCartItem: grpc.handleUnaryCall<_dropnshop_UpdateCartItemRequest__Output, _dropnshop_CartItemResponse>;
  
}

export interface CartItemServiceDefinition extends grpc.ServiceDefinition {
  CreateCartItem: MethodDefinition<_dropnshop_CreateCartItemRequest, _dropnshop_CartItemResponse, _dropnshop_CreateCartItemRequest__Output, _dropnshop_CartItemResponse__Output>
  DeleteCartItem: MethodDefinition<_dropnshop_DeleteCartItemRequest, _dropnshop_DeleteCartItemResponse, _dropnshop_DeleteCartItemRequest__Output, _dropnshop_DeleteCartItemResponse__Output>
  ListCartItems: MethodDefinition<_dropnshop_ListCartItemsRequest, _dropnshop_ListCartItemsResponse, _dropnshop_ListCartItemsRequest__Output, _dropnshop_ListCartItemsResponse__Output>
  UpdateCartItem: MethodDefinition<_dropnshop_UpdateCartItemRequest, _dropnshop_CartItemResponse, _dropnshop_UpdateCartItemRequest__Output, _dropnshop_CartItemResponse__Output>
}
