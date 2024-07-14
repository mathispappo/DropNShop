// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var cart_item_pb = require('./cart_item_pb.js');

function serialize_dropnshop_CartItemResponse(arg) {
  if (!(arg instanceof cart_item_pb.CartItemResponse)) {
    throw new Error('Expected argument of type dropnshop.CartItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_CartItemResponse(buffer_arg) {
  return cart_item_pb.CartItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_CreateCartItemRequest(arg) {
  if (!(arg instanceof cart_item_pb.CreateCartItemRequest)) {
    throw new Error('Expected argument of type dropnshop.CreateCartItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_CreateCartItemRequest(buffer_arg) {
  return cart_item_pb.CreateCartItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_DeleteCartItemRequest(arg) {
  if (!(arg instanceof cart_item_pb.DeleteCartItemRequest)) {
    throw new Error('Expected argument of type dropnshop.DeleteCartItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_DeleteCartItemRequest(buffer_arg) {
  return cart_item_pb.DeleteCartItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_DeleteCartItemResponse(arg) {
  if (!(arg instanceof cart_item_pb.DeleteCartItemResponse)) {
    throw new Error('Expected argument of type dropnshop.DeleteCartItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_DeleteCartItemResponse(buffer_arg) {
  return cart_item_pb.DeleteCartItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_ListCartItemsRequest(arg) {
  if (!(arg instanceof cart_item_pb.ListCartItemsRequest)) {
    throw new Error('Expected argument of type dropnshop.ListCartItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_ListCartItemsRequest(buffer_arg) {
  return cart_item_pb.ListCartItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_ListCartItemsResponse(arg) {
  if (!(arg instanceof cart_item_pb.ListCartItemsResponse)) {
    throw new Error('Expected argument of type dropnshop.ListCartItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_ListCartItemsResponse(buffer_arg) {
  return cart_item_pb.ListCartItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_UpdateCartItemRequest(arg) {
  if (!(arg instanceof cart_item_pb.UpdateCartItemRequest)) {
    throw new Error('Expected argument of type dropnshop.UpdateCartItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_UpdateCartItemRequest(buffer_arg) {
  return cart_item_pb.UpdateCartItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CartItemServiceService = exports.CartItemServiceService = {
  createCartItem: {
    path: '/dropnshop.CartItemService/CreateCartItem',
    requestStream: false,
    responseStream: false,
    requestType: cart_item_pb.CreateCartItemRequest,
    responseType: cart_item_pb.CartItemResponse,
    requestSerialize: serialize_dropnshop_CreateCartItemRequest,
    requestDeserialize: deserialize_dropnshop_CreateCartItemRequest,
    responseSerialize: serialize_dropnshop_CartItemResponse,
    responseDeserialize: deserialize_dropnshop_CartItemResponse,
  },
  listCartItems: {
    path: '/dropnshop.CartItemService/ListCartItems',
    requestStream: false,
    responseStream: false,
    requestType: cart_item_pb.ListCartItemsRequest,
    responseType: cart_item_pb.ListCartItemsResponse,
    requestSerialize: serialize_dropnshop_ListCartItemsRequest,
    requestDeserialize: deserialize_dropnshop_ListCartItemsRequest,
    responseSerialize: serialize_dropnshop_ListCartItemsResponse,
    responseDeserialize: deserialize_dropnshop_ListCartItemsResponse,
  },
  updateCartItem: {
    path: '/dropnshop.CartItemService/UpdateCartItem',
    requestStream: false,
    responseStream: false,
    requestType: cart_item_pb.UpdateCartItemRequest,
    responseType: cart_item_pb.CartItemResponse,
    requestSerialize: serialize_dropnshop_UpdateCartItemRequest,
    requestDeserialize: deserialize_dropnshop_UpdateCartItemRequest,
    responseSerialize: serialize_dropnshop_CartItemResponse,
    responseDeserialize: deserialize_dropnshop_CartItemResponse,
  },
  deleteCartItem: {
    path: '/dropnshop.CartItemService/DeleteCartItem',
    requestStream: false,
    responseStream: false,
    requestType: cart_item_pb.DeleteCartItemRequest,
    responseType: cart_item_pb.DeleteCartItemResponse,
    requestSerialize: serialize_dropnshop_DeleteCartItemRequest,
    requestDeserialize: deserialize_dropnshop_DeleteCartItemRequest,
    responseSerialize: serialize_dropnshop_DeleteCartItemResponse,
    responseDeserialize: deserialize_dropnshop_DeleteCartItemResponse,
  },
};

exports.CartItemServiceClient = grpc.makeGenericClientConstructor(CartItemServiceService);
