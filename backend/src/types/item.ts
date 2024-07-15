import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ItemServiceClient as _dropnshop_ItemServiceClient, ItemServiceDefinition as _dropnshop_ItemServiceDefinition } from './dropnshop/ItemService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dropnshop: {
    CreateItemRequest: MessageTypeDefinition
    DeleteItemRequest: MessageTypeDefinition
    DeleteItemResponse: MessageTypeDefinition
    GetItemRequest: MessageTypeDefinition
    GetManyItemsRequest: MessageTypeDefinition
    Item: MessageTypeDefinition
    ItemResponse: MessageTypeDefinition
    ItemService: SubtypeConstructor<typeof grpc.Client, _dropnshop_ItemServiceClient> & { service: _dropnshop_ItemServiceDefinition }
    ListItemsRequest: MessageTypeDefinition
    ListItemsResponse: MessageTypeDefinition
    UpdateItemRequest: MessageTypeDefinition
  }
}

