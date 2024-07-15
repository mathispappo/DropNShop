// Original file: protos/item.proto


export interface Item {
  'id'?: (number);
  'title'?: (string);
  'shortDescription'?: (string);
  'longDescription'?: (string);
  'price'?: (number | string);
  'technicalSpecifications'?: (string);
  'imageUrl'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface Item__Output {
  'id'?: (number);
  'title'?: (string);
  'shortDescription'?: (string);
  'longDescription'?: (string);
  'price'?: (number);
  'technicalSpecifications'?: (string);
  'imageUrl'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
