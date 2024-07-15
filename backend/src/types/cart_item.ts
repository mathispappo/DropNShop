import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CartItemServiceClient as _dropnshop_CartItemServiceClient, CartItemServiceDefinition as _dropnshop_CartItemServiceDefinition } from './dropnshop/CartItemService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dropnshop: {
    CartItem: MessageTypeDefinition
    CartItemResponse: MessageTypeDefinition
    CartItemService: SubtypeConstructor<typeof grpc.Client, _dropnshop_CartItemServiceClient> & { service: _dropnshop_CartItemServiceDefinition }
    CreateCartItemRequest: MessageTypeDefinition
    DeleteCartItemRequest: MessageTypeDefinition
    DeleteCartItemResponse: MessageTypeDefinition
    ListCartItemsRequest: MessageTypeDefinition
    ListCartItemsResponse: MessageTypeDefinition
    UpdateCartItemRequest: MessageTypeDefinition
  }
}

