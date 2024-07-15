import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrderServiceClient as _dropnshop_OrderServiceClient, OrderServiceDefinition as _dropnshop_OrderServiceDefinition } from './dropnshop/OrderService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dropnshop: {
    CreateOrderLineRequest: MessageTypeDefinition
    CreateOrderRequest: MessageTypeDefinition
    GetOrderRequest: MessageTypeDefinition
    ListOrdersRequest: MessageTypeDefinition
    ListOrdersResponse: MessageTypeDefinition
    Order: MessageTypeDefinition
    OrderLine: MessageTypeDefinition
    OrderResponse: MessageTypeDefinition
    OrderService: SubtypeConstructor<typeof grpc.Client, _dropnshop_OrderServiceClient> & { service: _dropnshop_OrderServiceDefinition }
  }
}

