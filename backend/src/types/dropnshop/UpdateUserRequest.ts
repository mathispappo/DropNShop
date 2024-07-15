// Original file: protos/user.proto


export interface UpdateUserRequest {
  'id'?: (number);
  'username'?: (string);
  'email'?: (string);
  'passwordHash'?: (string);
  '_username'?: "username";
  '_email'?: "email";
  '_passwordHash'?: "passwordHash";
}

export interface UpdateUserRequest__Output {
  'id'?: (number);
  'username'?: (string);
  'email'?: (string);
  'passwordHash'?: (string);
}
