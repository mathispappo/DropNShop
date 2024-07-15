// Original file: protos/user.proto


export interface User {
  'id'?: (number);
  'username'?: (string);
  'email'?: (string);
  'googleId'?: (string);
  'passwordHash'?: (string);
  'createdAt'?: (string);
  '_googleId'?: "googleId";
  '_passwordHash'?: "passwordHash";
}

export interface User__Output {
  'id'?: (number);
  'username'?: (string);
  'email'?: (string);
  'googleId'?: (string);
  'passwordHash'?: (string);
  'createdAt'?: (string);
}
