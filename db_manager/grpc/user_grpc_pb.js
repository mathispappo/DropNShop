// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_dropnshop_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type dropnshop.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_DeleteUserRequest(arg) {
  if (!(arg instanceof user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type dropnshop.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_DeleteUserRequest(buffer_arg) {
  return user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_DeleteUserResponse(arg) {
  if (!(arg instanceof user_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type dropnshop.DeleteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_DeleteUserResponse(buffer_arg) {
  return user_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type dropnshop.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_ListUsersRequest(arg) {
  if (!(arg instanceof user_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type dropnshop.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_ListUsersRequest(buffer_arg) {
  return user_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_ListUsersResponse(arg) {
  if (!(arg instanceof user_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type dropnshop.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_ListUsersResponse(buffer_arg) {
  return user_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_UpdateUserRequest(arg) {
  if (!(arg instanceof user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type dropnshop.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_UpdateUserRequest(buffer_arg) {
  return user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type dropnshop.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/dropnshop.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_dropnshop_CreateUserRequest,
    requestDeserialize: deserialize_dropnshop_CreateUserRequest,
    responseSerialize: serialize_dropnshop_UserResponse,
    responseDeserialize: deserialize_dropnshop_UserResponse,
  },
  getUser: {
    path: '/dropnshop.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_dropnshop_GetUserRequest,
    requestDeserialize: deserialize_dropnshop_GetUserRequest,
    responseSerialize: serialize_dropnshop_UserResponse,
    responseDeserialize: deserialize_dropnshop_UserResponse,
  },
  listUsers: {
    path: '/dropnshop.UserService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ListUsersRequest,
    responseType: user_pb.ListUsersResponse,
    requestSerialize: serialize_dropnshop_ListUsersRequest,
    requestDeserialize: deserialize_dropnshop_ListUsersRequest,
    responseSerialize: serialize_dropnshop_ListUsersResponse,
    responseDeserialize: deserialize_dropnshop_ListUsersResponse,
  },
  updateUser: {
    path: '/dropnshop.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateUserRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_dropnshop_UpdateUserRequest,
    requestDeserialize: deserialize_dropnshop_UpdateUserRequest,
    responseSerialize: serialize_dropnshop_UserResponse,
    responseDeserialize: deserialize_dropnshop_UserResponse,
  },
  deleteUser: {
    path: '/dropnshop.UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeleteUserRequest,
    responseType: user_pb.DeleteUserResponse,
    requestSerialize: serialize_dropnshop_DeleteUserRequest,
    requestDeserialize: deserialize_dropnshop_DeleteUserRequest,
    responseSerialize: serialize_dropnshop_DeleteUserResponse,
    responseDeserialize: deserialize_dropnshop_DeleteUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
