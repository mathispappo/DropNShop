// Original file: protos/order.proto

import type { CreateOrderLineRequest as _dropnshop_CreateOrderLineRequest, CreateOrderLineRequest__Output as _dropnshop_CreateOrderLineRequest__Output } from '../dropnshop/CreateOrderLineRequest';

export interface CreateOrderRequest {
  'userId'?: (number);
  'shippingAddress'?: (string);
  'orderLines'?: (_dropnshop_CreateOrderLineRequest)[];
}

export interface CreateOrderRequest__Output {
  'userId'?: (number);
  'shippingAddress'?: (string);
  'orderLines'?: (_dropnshop_CreateOrderLineRequest__Output)[];
}
