// Original file: protos/item.proto


export interface CreateItemRequest {
  'title'?: (string);
  'shortDescription'?: (string);
  'longDescription'?: (string);
  'price'?: (number | string);
  'technicalSpecifications'?: (string);
  'imageUrl'?: (string);
}

export interface CreateItemRequest__Output {
  'title'?: (string);
  'shortDescription'?: (string);
  'longDescription'?: (string);
  'price'?: (number);
  'technicalSpecifications'?: (string);
  'imageUrl'?: (string);
}
