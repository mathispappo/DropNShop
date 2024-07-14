// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var item_pb = require('./item_pb.js');

function serialize_dropnshop_CreateItemRequest(arg) {
  if (!(arg instanceof item_pb.CreateItemRequest)) {
    throw new Error('Expected argument of type dropnshop.CreateItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_CreateItemRequest(buffer_arg) {
  return item_pb.CreateItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_DeleteItemRequest(arg) {
  if (!(arg instanceof item_pb.DeleteItemRequest)) {
    throw new Error('Expected argument of type dropnshop.DeleteItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_DeleteItemRequest(buffer_arg) {
  return item_pb.DeleteItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_DeleteItemResponse(arg) {
  if (!(arg instanceof item_pb.DeleteItemResponse)) {
    throw new Error('Expected argument of type dropnshop.DeleteItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_DeleteItemResponse(buffer_arg) {
  return item_pb.DeleteItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_GetItemRequest(arg) {
  if (!(arg instanceof item_pb.GetItemRequest)) {
    throw new Error('Expected argument of type dropnshop.GetItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_GetItemRequest(buffer_arg) {
  return item_pb.GetItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_ItemResponse(arg) {
  if (!(arg instanceof item_pb.ItemResponse)) {
    throw new Error('Expected argument of type dropnshop.ItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_ItemResponse(buffer_arg) {
  return item_pb.ItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_ListItemsRequest(arg) {
  if (!(arg instanceof item_pb.ListItemsRequest)) {
    throw new Error('Expected argument of type dropnshop.ListItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_ListItemsRequest(buffer_arg) {
  return item_pb.ListItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_ListItemsResponse(arg) {
  if (!(arg instanceof item_pb.ListItemsResponse)) {
    throw new Error('Expected argument of type dropnshop.ListItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_ListItemsResponse(buffer_arg) {
  return item_pb.ListItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_UpdateItemRequest(arg) {
  if (!(arg instanceof item_pb.UpdateItemRequest)) {
    throw new Error('Expected argument of type dropnshop.UpdateItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_UpdateItemRequest(buffer_arg) {
  return item_pb.UpdateItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ItemServiceService = exports.ItemServiceService = {
  createItem: {
    path: '/dropnshop.ItemService/CreateItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.CreateItemRequest,
    responseType: item_pb.ItemResponse,
    requestSerialize: serialize_dropnshop_CreateItemRequest,
    requestDeserialize: deserialize_dropnshop_CreateItemRequest,
    responseSerialize: serialize_dropnshop_ItemResponse,
    responseDeserialize: deserialize_dropnshop_ItemResponse,
  },
  getItem: {
    path: '/dropnshop.ItemService/GetItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.GetItemRequest,
    responseType: item_pb.ItemResponse,
    requestSerialize: serialize_dropnshop_GetItemRequest,
    requestDeserialize: deserialize_dropnshop_GetItemRequest,
    responseSerialize: serialize_dropnshop_ItemResponse,
    responseDeserialize: deserialize_dropnshop_ItemResponse,
  },
  listItems: {
    path: '/dropnshop.ItemService/ListItems',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.ListItemsRequest,
    responseType: item_pb.ListItemsResponse,
    requestSerialize: serialize_dropnshop_ListItemsRequest,
    requestDeserialize: deserialize_dropnshop_ListItemsRequest,
    responseSerialize: serialize_dropnshop_ListItemsResponse,
    responseDeserialize: deserialize_dropnshop_ListItemsResponse,
  },
  updateItem: {
    path: '/dropnshop.ItemService/UpdateItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.UpdateItemRequest,
    responseType: item_pb.ItemResponse,
    requestSerialize: serialize_dropnshop_UpdateItemRequest,
    requestDeserialize: deserialize_dropnshop_UpdateItemRequest,
    responseSerialize: serialize_dropnshop_ItemResponse,
    responseDeserialize: deserialize_dropnshop_ItemResponse,
  },
  deleteItem: {
    path: '/dropnshop.ItemService/DeleteItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.DeleteItemRequest,
    responseType: item_pb.DeleteItemResponse,
    requestSerialize: serialize_dropnshop_DeleteItemRequest,
    requestDeserialize: deserialize_dropnshop_DeleteItemRequest,
    responseSerialize: serialize_dropnshop_DeleteItemResponse,
    responseDeserialize: deserialize_dropnshop_DeleteItemResponse,
  },
};

exports.ItemServiceClient = grpc.makeGenericClientConstructor(ItemServiceService);
