// Original file: protos/cart_item.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CartItemResponse as _dropnshop_CartItemResponse, CartItemResponse__Output as _dropnshop_CartItemResponse__Output } from '../dropnshop/CartItemResponse';
import type { DeleteCartItemRequest as _dropnshop_DeleteCartItemRequest, DeleteCartItemRequest__Output as _dropnshop_DeleteCartItemRequest__Output } from '../dropnshop/DeleteCartItemRequest';
import type { DeleteCartItemResponse as _dropnshop_DeleteCartItemResponse, DeleteCartItemResponse__Output as _dropnshop_DeleteCartItemResponse__Output } from '../dropnshop/DeleteCartItemResponse';
import type { ListCartItemsRequest as _dropnshop_ListCartItemsRequest, ListCartItemsRequest__Output as _dropnshop_ListCartItemsRequest__Output } from '../dropnshop/ListCartItemsRequest';
import type { ListCartItemsResponse as _dropnshop_ListCartItemsResponse, ListCartItemsResponse__Output as _dropnshop_ListCartItemsResponse__Output } from '../dropnshop/ListCartItemsResponse';
import type { UpsertCartItemRequest as _dropnshop_UpsertCartItemRequest, UpsertCartItemRequest__Output as _dropnshop_UpsertCartItemRequest__Output } from '../dropnshop/UpsertCartItemRequest';

export interface CartItemServiceClient extends grpc.Client {
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
  
  UpsertCartItem(argument: _dropnshop_UpsertCartItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  UpsertCartItem(argument: _dropnshop_UpsertCartItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  UpsertCartItem(argument: _dropnshop_UpsertCartItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  UpsertCartItem(argument: _dropnshop_UpsertCartItemRequest, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  upsertCartItem(argument: _dropnshop_UpsertCartItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  upsertCartItem(argument: _dropnshop_UpsertCartItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  upsertCartItem(argument: _dropnshop_UpsertCartItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  upsertCartItem(argument: _dropnshop_UpsertCartItemRequest, callback: grpc.requestCallback<_dropnshop_CartItemResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CartItemServiceHandlers extends grpc.UntypedServiceImplementation {
  DeleteCartItem: grpc.handleUnaryCall<_dropnshop_DeleteCartItemRequest__Output, _dropnshop_DeleteCartItemResponse>;
  
  ListCartItems: grpc.handleUnaryCall<_dropnshop_ListCartItemsRequest__Output, _dropnshop_ListCartItemsResponse>;
  
  UpsertCartItem: grpc.handleUnaryCall<_dropnshop_UpsertCartItemRequest__Output, _dropnshop_CartItemResponse>;
  
}

export interface CartItemServiceDefinition extends grpc.ServiceDefinition {
  DeleteCartItem: MethodDefinition<_dropnshop_DeleteCartItemRequest, _dropnshop_DeleteCartItemResponse, _dropnshop_DeleteCartItemRequest__Output, _dropnshop_DeleteCartItemResponse__Output>
  ListCartItems: MethodDefinition<_dropnshop_ListCartItemsRequest, _dropnshop_ListCartItemsResponse, _dropnshop_ListCartItemsRequest__Output, _dropnshop_ListCartItemsResponse__Output>
  UpsertCartItem: MethodDefinition<_dropnshop_UpsertCartItemRequest, _dropnshop_CartItemResponse, _dropnshop_UpsertCartItemRequest__Output, _dropnshop_CartItemResponse__Output>
}
