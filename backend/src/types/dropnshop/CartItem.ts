// Original file: protos/cart_item.proto

import type { Item as _dropnshop_Item, Item__Output as _dropnshop_Item__Output } from '../dropnshop/Item';

export interface CartItem {
  'id'?: (number);
  'userId'?: (number);
  'item'?: (_dropnshop_Item | null);
  'quantity'?: (number);
  'createdAt'?: (string);
}

export interface CartItem__Output {
  'id'?: (number);
  'userId'?: (number);
  'item'?: (_dropnshop_Item__Output);
  'quantity'?: (number);
  'createdAt'?: (string);
}
