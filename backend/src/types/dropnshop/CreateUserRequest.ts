// Original file: protos/user.proto


export interface CreateUserRequest {
  'username'?: (string);
  'email'?: (string);
  'googleId'?: (string);
  'passwordHash'?: (string);
  '_googleId'?: "googleId";
  '_passwordHash'?: "passwordHash";
}

export interface CreateUserRequest__Output {
  'username'?: (string);
  'email'?: (string);
  'googleId'?: (string);
  'passwordHash'?: (string);
}
