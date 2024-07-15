// Original file: protos/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserRequest as _dropnshop_CreateUserRequest, CreateUserRequest__Output as _dropnshop_CreateUserRequest__Output } from '../dropnshop/CreateUserRequest';
import type { DeleteUserRequest as _dropnshop_DeleteUserRequest, DeleteUserRequest__Output as _dropnshop_DeleteUserRequest__Output } from '../dropnshop/DeleteUserRequest';
import type { DeleteUserResponse as _dropnshop_DeleteUserResponse, DeleteUserResponse__Output as _dropnshop_DeleteUserResponse__Output } from '../dropnshop/DeleteUserResponse';
import type { GetUserByGoogleIdRequest as _dropnshop_GetUserByGoogleIdRequest, GetUserByGoogleIdRequest__Output as _dropnshop_GetUserByGoogleIdRequest__Output } from '../dropnshop/GetUserByGoogleIdRequest';
import type { GetUserByUsernameRequest as _dropnshop_GetUserByUsernameRequest, GetUserByUsernameRequest__Output as _dropnshop_GetUserByUsernameRequest__Output } from '../dropnshop/GetUserByUsernameRequest';
import type { GetUserRequest as _dropnshop_GetUserRequest, GetUserRequest__Output as _dropnshop_GetUserRequest__Output } from '../dropnshop/GetUserRequest';
import type { ListUsersRequest as _dropnshop_ListUsersRequest, ListUsersRequest__Output as _dropnshop_ListUsersRequest__Output } from '../dropnshop/ListUsersRequest';
import type { ListUsersResponse as _dropnshop_ListUsersResponse, ListUsersResponse__Output as _dropnshop_ListUsersResponse__Output } from '../dropnshop/ListUsersResponse';
import type { SafeUserResponse as _dropnshop_SafeUserResponse, SafeUserResponse__Output as _dropnshop_SafeUserResponse__Output } from '../dropnshop/SafeUserResponse';
import type { UpdateUserRequest as _dropnshop_UpdateUserRequest, UpdateUserRequest__Output as _dropnshop_UpdateUserRequest__Output } from '../dropnshop/UpdateUserRequest';
import type { UserResponse as _dropnshop_UserResponse, UserResponse__Output as _dropnshop_UserResponse__Output } from '../dropnshop/UserResponse';

export interface UserServiceClient extends grpc.Client {
  CreateUser(argument: _dropnshop_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _dropnshop_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _dropnshop_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _dropnshop_CreateUserRequest, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _dropnshop_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _dropnshop_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _dropnshop_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _dropnshop_CreateUserRequest, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteUser(argument: _dropnshop_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _dropnshop_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _dropnshop_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _dropnshop_DeleteUserRequest, callback: grpc.requestCallback<_dropnshop_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _dropnshop_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _dropnshop_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _dropnshop_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _dropnshop_DeleteUserRequest, callback: grpc.requestCallback<_dropnshop_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _dropnshop_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _dropnshop_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _dropnshop_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _dropnshop_GetUserRequest, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _dropnshop_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _dropnshop_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _dropnshop_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _dropnshop_GetUserRequest, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserByGoogleId(argument: _dropnshop_GetUserByGoogleIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  GetUserByGoogleId(argument: _dropnshop_GetUserByGoogleIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  GetUserByGoogleId(argument: _dropnshop_GetUserByGoogleIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  GetUserByGoogleId(argument: _dropnshop_GetUserByGoogleIdRequest, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  getUserByGoogleId(argument: _dropnshop_GetUserByGoogleIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  getUserByGoogleId(argument: _dropnshop_GetUserByGoogleIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  getUserByGoogleId(argument: _dropnshop_GetUserByGoogleIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  getUserByGoogleId(argument: _dropnshop_GetUserByGoogleIdRequest, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserByUsername(argument: _dropnshop_GetUserByUsernameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserByUsername(argument: _dropnshop_GetUserByUsernameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserByUsername(argument: _dropnshop_GetUserByUsernameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserByUsername(argument: _dropnshop_GetUserByUsernameRequest, callback: grpc.requestCallback<_dropnshop_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserByUsername(argument: _dropnshop_GetUserByUsernameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserByUsername(argument: _dropnshop_GetUserByUsernameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserByUsername(argument: _dropnshop_GetUserByUsernameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserByUsername(argument: _dropnshop_GetUserByUsernameRequest, callback: grpc.requestCallback<_dropnshop_UserResponse__Output>): grpc.ClientUnaryCall;
  
  ListUsers(argument: _dropnshop_ListUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _dropnshop_ListUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _dropnshop_ListUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _dropnshop_ListUsersRequest, callback: grpc.requestCallback<_dropnshop_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _dropnshop_ListUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _dropnshop_ListUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _dropnshop_ListUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _dropnshop_ListUsersRequest, callback: grpc.requestCallback<_dropnshop_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateUser(argument: _dropnshop_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _dropnshop_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _dropnshop_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _dropnshop_UpdateUserRequest, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _dropnshop_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _dropnshop_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _dropnshop_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _dropnshop_UpdateUserRequest, callback: grpc.requestCallback<_dropnshop_SafeUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_dropnshop_CreateUserRequest__Output, _dropnshop_SafeUserResponse>;
  
  DeleteUser: grpc.handleUnaryCall<_dropnshop_DeleteUserRequest__Output, _dropnshop_DeleteUserResponse>;
  
  GetUser: grpc.handleUnaryCall<_dropnshop_GetUserRequest__Output, _dropnshop_SafeUserResponse>;
  
  GetUserByGoogleId: grpc.handleUnaryCall<_dropnshop_GetUserByGoogleIdRequest__Output, _dropnshop_SafeUserResponse>;
  
  GetUserByUsername: grpc.handleUnaryCall<_dropnshop_GetUserByUsernameRequest__Output, _dropnshop_UserResponse>;
  
  ListUsers: grpc.handleUnaryCall<_dropnshop_ListUsersRequest__Output, _dropnshop_ListUsersResponse>;
  
  UpdateUser: grpc.handleUnaryCall<_dropnshop_UpdateUserRequest__Output, _dropnshop_SafeUserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_dropnshop_CreateUserRequest, _dropnshop_SafeUserResponse, _dropnshop_CreateUserRequest__Output, _dropnshop_SafeUserResponse__Output>
  DeleteUser: MethodDefinition<_dropnshop_DeleteUserRequest, _dropnshop_DeleteUserResponse, _dropnshop_DeleteUserRequest__Output, _dropnshop_DeleteUserResponse__Output>
  GetUser: MethodDefinition<_dropnshop_GetUserRequest, _dropnshop_SafeUserResponse, _dropnshop_GetUserRequest__Output, _dropnshop_SafeUserResponse__Output>
  GetUserByGoogleId: MethodDefinition<_dropnshop_GetUserByGoogleIdRequest, _dropnshop_SafeUserResponse, _dropnshop_GetUserByGoogleIdRequest__Output, _dropnshop_SafeUserResponse__Output>
  GetUserByUsername: MethodDefinition<_dropnshop_GetUserByUsernameRequest, _dropnshop_UserResponse, _dropnshop_GetUserByUsernameRequest__Output, _dropnshop_UserResponse__Output>
  ListUsers: MethodDefinition<_dropnshop_ListUsersRequest, _dropnshop_ListUsersResponse, _dropnshop_ListUsersRequest__Output, _dropnshop_ListUsersResponse__Output>
  UpdateUser: MethodDefinition<_dropnshop_UpdateUserRequest, _dropnshop_SafeUserResponse, _dropnshop_UpdateUserRequest__Output, _dropnshop_SafeUserResponse__Output>
}
