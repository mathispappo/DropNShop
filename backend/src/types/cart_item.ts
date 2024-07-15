import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CartItemServiceClient as _dropnshop_CartItemServiceClient, CartItemServiceDefinition as _dropnshop_CartItemServiceDefinition } from './dropnshop/CartItemService';
import type { ItemServiceClient as _dropnshop_ItemServiceClient, ItemServiceDefinition as _dropnshop_ItemServiceDefinition } from './dropnshop/ItemService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dropnshop: {
    CartItem: MessageTypeDefinition
    CartItemResponse: MessageTypeDefinition
    CartItemService: SubtypeConstructor<typeof grpc.Client, _dropnshop_CartItemServiceClient> & { service: _dropnshop_CartItemServiceDefinition }
    CreateItemRequest: MessageTypeDefinition
    DeleteCartItemRequest: MessageTypeDefinition
    DeleteCartItemResponse: MessageTypeDefinition
    DeleteItemRequest: MessageTypeDefinition
    DeleteItemResponse: MessageTypeDefinition
    GetItemRequest: MessageTypeDefinition
    GetManyItemsRequest: MessageTypeDefinition
    Item: MessageTypeDefinition
    ItemResponse: MessageTypeDefinition
    ItemService: SubtypeConstructor<typeof grpc.Client, _dropnshop_ItemServiceClient> & { service: _dropnshop_ItemServiceDefinition }
    ListCartItemsRequest: MessageTypeDefinition
    ListCartItemsResponse: MessageTypeDefinition
    ListItemsRequest: MessageTypeDefinition
    ListItemsResponse: MessageTypeDefinition
    UpdateItemRequest: MessageTypeDefinition
    UpsertCartItemRequest: MessageTypeDefinition
  }
}

