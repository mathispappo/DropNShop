import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _dropnshop_UserServiceClient, UserServiceDefinition as _dropnshop_UserServiceDefinition } from './dropnshop/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dropnshop: {
    CheckPasswordRequest: MessageTypeDefinition
    CheckPasswordResponse: MessageTypeDefinition
    CreateUserRequest: MessageTypeDefinition
    DeleteUserRequest: MessageTypeDefinition
    DeleteUserResponse: MessageTypeDefinition
    GetUserByGoogleIdRequest: MessageTypeDefinition
    GetUserByUsernameRequest: MessageTypeDefinition
    GetUserRequest: MessageTypeDefinition
    ListUsersRequest: MessageTypeDefinition
    ListUsersResponse: MessageTypeDefinition
    SafeUser: MessageTypeDefinition
    SafeUserResponse: MessageTypeDefinition
    UpdateUserRequest: MessageTypeDefinition
    User: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _dropnshop_UserServiceClient> & { service: _dropnshop_UserServiceDefinition }
  }
}

