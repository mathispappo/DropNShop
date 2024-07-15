// Original file: protos/order.proto

import type { Item as _dropnshop_Item, Item__Output as _dropnshop_Item__Output } from '../dropnshop/Item';

export interface OrderLine {
  'id'?: (number);
  'item'?: (_dropnshop_Item | null);
  'price'?: (number | string);
  'quantity'?: (number);
  'createdAt'?: (string);
}

export interface OrderLine__Output {
  'id'?: (number);
  'item'?: (_dropnshop_Item__Output);
  'price'?: (number);
  'quantity'?: (number);
  'createdAt'?: (string);
}
