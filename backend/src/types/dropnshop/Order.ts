// Original file: protos/order.proto

import type { OrderLine as _dropnshop_OrderLine, OrderLine__Output as _dropnshop_OrderLine__Output } from '../dropnshop/OrderLine';

export interface Order {
  'id'?: (number);
  'userId'?: (number);
  'shippingAddress'?: (string);
  'createdAt'?: (string);
  'orderLines'?: (_dropnshop_OrderLine)[];
}

export interface Order__Output {
  'id'?: (number);
  'userId'?: (number);
  'shippingAddress'?: (string);
  'createdAt'?: (string);
  'orderLines'?: (_dropnshop_OrderLine__Output)[];
}
