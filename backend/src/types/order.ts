import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ItemServiceClient as _dropnshop_ItemServiceClient, ItemServiceDefinition as _dropnshop_ItemServiceDefinition } from './dropnshop/ItemService';
import type { OrderServiceClient as _dropnshop_OrderServiceClient, OrderServiceDefinition as _dropnshop_OrderServiceDefinition } from './dropnshop/OrderService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dropnshop: {
    CreateItemRequest: MessageTypeDefinition
    CreateOrderLineRequest: MessageTypeDefinition
    CreateOrderRequest: MessageTypeDefinition
    DeleteItemRequest: MessageTypeDefinition
    DeleteItemResponse: MessageTypeDefinition
    GetItemRequest: MessageTypeDefinition
    GetManyItemsRequest: MessageTypeDefinition
    GetOrderRequest: MessageTypeDefinition
    Item: MessageTypeDefinition
    ItemResponse: MessageTypeDefinition
    ItemService: SubtypeConstructor<typeof grpc.Client, _dropnshop_ItemServiceClient> & { service: _dropnshop_ItemServiceDefinition }
    ListItemsRequest: MessageTypeDefinition
    ListItemsResponse: MessageTypeDefinition
    ListOrdersRequest: MessageTypeDefinition
    ListOrdersResponse: MessageTypeDefinition
    Order: MessageTypeDefinition
    OrderLine: MessageTypeDefinition
    OrderResponse: MessageTypeDefinition
    OrderService: SubtypeConstructor<typeof grpc.Client, _dropnshop_OrderServiceClient> & { service: _dropnshop_OrderServiceDefinition }
    UpdateItemRequest: MessageTypeDefinition
  }
}

