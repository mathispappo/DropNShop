// Original file: protos/item.proto


export interface UpdateItemRequest {
  'id'?: (number);
  'title'?: (string);
  'shortDescription'?: (string);
  'longDescription'?: (string);
  'price'?: (number | string);
  'technicalSpecifications'?: (string);
  'imageUrl'?: (string);
}

export interface UpdateItemRequest__Output {
  'id'?: (number);
  'title'?: (string);
  'shortDescription'?: (string);
  'longDescription'?: (string);
  'price'?: (number);
  'technicalSpecifications'?: (string);
  'imageUrl'?: (string);
}
