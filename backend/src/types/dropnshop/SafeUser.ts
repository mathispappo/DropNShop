// Original file: protos/user.proto


export interface SafeUser {
  'id'?: (number);
  'username'?: (string);
  'email'?: (string);
  'googleId'?: (string);
  'createdAt'?: (string);
  '_googleId'?: "googleId";
}

export interface SafeUser__Output {
  'id'?: (number);
  'username'?: (string);
  'email'?: (string);
  'googleId'?: (string);
  'createdAt'?: (string);
}
