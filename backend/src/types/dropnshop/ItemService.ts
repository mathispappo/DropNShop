// Original file: protos/item.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateItemRequest as _dropnshop_CreateItemRequest, CreateItemRequest__Output as _dropnshop_CreateItemRequest__Output } from '../dropnshop/CreateItemRequest';
import type { DeleteItemRequest as _dropnshop_DeleteItemRequest, DeleteItemRequest__Output as _dropnshop_DeleteItemRequest__Output } from '../dropnshop/DeleteItemRequest';
import type { DeleteItemResponse as _dropnshop_DeleteItemResponse, DeleteItemResponse__Output as _dropnshop_DeleteItemResponse__Output } from '../dropnshop/DeleteItemResponse';
import type { GetItemRequest as _dropnshop_GetItemRequest, GetItemRequest__Output as _dropnshop_GetItemRequest__Output } from '../dropnshop/GetItemRequest';
import type { ItemResponse as _dropnshop_ItemResponse, ItemResponse__Output as _dropnshop_ItemResponse__Output } from '../dropnshop/ItemResponse';
import type { ListItemsRequest as _dropnshop_ListItemsRequest, ListItemsRequest__Output as _dropnshop_ListItemsRequest__Output } from '../dropnshop/ListItemsRequest';
import type { ListItemsResponse as _dropnshop_ListItemsResponse, ListItemsResponse__Output as _dropnshop_ListItemsResponse__Output } from '../dropnshop/ListItemsResponse';
import type { UpdateItemRequest as _dropnshop_UpdateItemRequest, UpdateItemRequest__Output as _dropnshop_UpdateItemRequest__Output } from '../dropnshop/UpdateItemRequest';

export interface ItemServiceClient extends grpc.Client {
  CreateItem(argument: _dropnshop_CreateItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  CreateItem(argument: _dropnshop_CreateItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  CreateItem(argument: _dropnshop_CreateItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  CreateItem(argument: _dropnshop_CreateItemRequest, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  createItem(argument: _dropnshop_CreateItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  createItem(argument: _dropnshop_CreateItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  createItem(argument: _dropnshop_CreateItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  createItem(argument: _dropnshop_CreateItemRequest, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteItem(argument: _dropnshop_DeleteItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteItemResponse__Output>): grpc.ClientUnaryCall;
  DeleteItem(argument: _dropnshop_DeleteItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_DeleteItemResponse__Output>): grpc.ClientUnaryCall;
  DeleteItem(argument: _dropnshop_DeleteItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteItemResponse__Output>): grpc.ClientUnaryCall;
  DeleteItem(argument: _dropnshop_DeleteItemRequest, callback: grpc.requestCallback<_dropnshop_DeleteItemResponse__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _dropnshop_DeleteItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteItemResponse__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _dropnshop_DeleteItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_DeleteItemResponse__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _dropnshop_DeleteItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteItemResponse__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _dropnshop_DeleteItemRequest, callback: grpc.requestCallback<_dropnshop_DeleteItemResponse__Output>): grpc.ClientUnaryCall;
  
  GetItem(argument: _dropnshop_GetItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  GetItem(argument: _dropnshop_GetItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  GetItem(argument: _dropnshop_GetItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  GetItem(argument: _dropnshop_GetItemRequest, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  getItem(argument: _dropnshop_GetItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  getItem(argument: _dropnshop_GetItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  getItem(argument: _dropnshop_GetItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  getItem(argument: _dropnshop_GetItemRequest, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  
  ListItems(argument: _dropnshop_ListItemsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListItemsResponse__Output>): grpc.ClientUnaryCall;
  ListItems(argument: _dropnshop_ListItemsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ListItemsResponse__Output>): grpc.ClientUnaryCall;
  ListItems(argument: _dropnshop_ListItemsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListItemsResponse__Output>): grpc.ClientUnaryCall;
  ListItems(argument: _dropnshop_ListItemsRequest, callback: grpc.requestCallback<_dropnshop_ListItemsResponse__Output>): grpc.ClientUnaryCall;
  listItems(argument: _dropnshop_ListItemsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListItemsResponse__Output>): grpc.ClientUnaryCall;
  listItems(argument: _dropnshop_ListItemsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ListItemsResponse__Output>): grpc.ClientUnaryCall;
  listItems(argument: _dropnshop_ListItemsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListItemsResponse__Output>): grpc.ClientUnaryCall;
  listItems(argument: _dropnshop_ListItemsRequest, callback: grpc.requestCallback<_dropnshop_ListItemsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateItem(argument: _dropnshop_UpdateItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  UpdateItem(argument: _dropnshop_UpdateItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  UpdateItem(argument: _dropnshop_UpdateItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  UpdateItem(argument: _dropnshop_UpdateItemRequest, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _dropnshop_UpdateItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _dropnshop_UpdateItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _dropnshop_UpdateItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _dropnshop_UpdateItemRequest, callback: grpc.requestCallback<_dropnshop_ItemResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ItemServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateItem: grpc.handleUnaryCall<_dropnshop_CreateItemRequest__Output, _dropnshop_ItemResponse>;
  
  DeleteItem: grpc.handleUnaryCall<_dropnshop_DeleteItemRequest__Output, _dropnshop_DeleteItemResponse>;
  
  GetItem: grpc.handleUnaryCall<_dropnshop_GetItemRequest__Output, _dropnshop_ItemResponse>;
  
  ListItems: grpc.handleUnaryCall<_dropnshop_ListItemsRequest__Output, _dropnshop_ListItemsResponse>;
  
  UpdateItem: grpc.handleUnaryCall<_dropnshop_UpdateItemRequest__Output, _dropnshop_ItemResponse>;
  
}

export interface ItemServiceDefinition extends grpc.ServiceDefinition {
  CreateItem: MethodDefinition<_dropnshop_CreateItemRequest, _dropnshop_ItemResponse, _dropnshop_CreateItemRequest__Output, _dropnshop_ItemResponse__Output>
  DeleteItem: MethodDefinition<_dropnshop_DeleteItemRequest, _dropnshop_DeleteItemResponse, _dropnshop_DeleteItemRequest__Output, _dropnshop_DeleteItemResponse__Output>
  GetItem: MethodDefinition<_dropnshop_GetItemRequest, _dropnshop_ItemResponse, _dropnshop_GetItemRequest__Output, _dropnshop_ItemResponse__Output>
  ListItems: MethodDefinition<_dropnshop_ListItemsRequest, _dropnshop_ListItemsResponse, _dropnshop_ListItemsRequest__Output, _dropnshop_ListItemsResponse__Output>
  UpdateItem: MethodDefinition<_dropnshop_UpdateItemRequest, _dropnshop_ItemResponse, _dropnshop_UpdateItemRequest__Output, _dropnshop_ItemResponse__Output>
}
