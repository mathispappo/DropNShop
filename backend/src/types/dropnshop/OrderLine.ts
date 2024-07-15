// Original file: protos/order.proto


export interface OrderLine {
  'id'?: (number);
  'itemId'?: (number);
  'price'?: (number | string);
  'quantity'?: (number);
  'createdAt'?: (string);
}

export interface OrderLine__Output {
  'id'?: (number);
  'itemId'?: (number);
  'price'?: (number);
  'quantity'?: (number);
  'createdAt'?: (string);
}
