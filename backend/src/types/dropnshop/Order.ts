// Original file: protos/order.proto

import type { Order as _dropnshop_Order, Order__Output as _dropnshop_Order__Output } from '../dropnshop/Order';

export interface Order {
  'id'?: (number);
  'userId'?: (number);
  'shippingAddress'?: (string);
  'createdAt'?: (string);
  'orderLines'?: (_dropnshop_Order)[];
}

export interface Order__Output {
  'id'?: (number);
  'userId'?: (number);
  'shippingAddress'?: (string);
  'createdAt'?: (string);
  'orderLines'?: (_dropnshop_Order__Output)[];
}
