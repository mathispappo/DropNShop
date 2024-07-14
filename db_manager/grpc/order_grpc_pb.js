// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var order_pb = require('./order_pb.js');

function serialize_dropnshop_CreateOrderRequest(arg) {
  if (!(arg instanceof order_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type dropnshop.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_CreateOrderRequest(buffer_arg) {
  return order_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_GetOrderRequest(arg) {
  if (!(arg instanceof order_pb.GetOrderRequest)) {
    throw new Error('Expected argument of type dropnshop.GetOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_GetOrderRequest(buffer_arg) {
  return order_pb.GetOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_ListOrdersRequest(arg) {
  if (!(arg instanceof order_pb.ListOrdersRequest)) {
    throw new Error('Expected argument of type dropnshop.ListOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_ListOrdersRequest(buffer_arg) {
  return order_pb.ListOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_ListOrdersResponse(arg) {
  if (!(arg instanceof order_pb.ListOrdersResponse)) {
    throw new Error('Expected argument of type dropnshop.ListOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_ListOrdersResponse(buffer_arg) {
  return order_pb.ListOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dropnshop_OrderResponse(arg) {
  if (!(arg instanceof order_pb.OrderResponse)) {
    throw new Error('Expected argument of type dropnshop.OrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dropnshop_OrderResponse(buffer_arg) {
  return order_pb.OrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  createOrders: {
    path: '/dropnshop.OrderService/CreateOrders',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CreateOrderRequest,
    responseType: order_pb.OrderResponse,
    requestSerialize: serialize_dropnshop_CreateOrderRequest,
    requestDeserialize: deserialize_dropnshop_CreateOrderRequest,
    responseSerialize: serialize_dropnshop_OrderResponse,
    responseDeserialize: deserialize_dropnshop_OrderResponse,
  },
  getOrder: {
    path: '/dropnshop.OrderService/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.GetOrderRequest,
    responseType: order_pb.OrderResponse,
    requestSerialize: serialize_dropnshop_GetOrderRequest,
    requestDeserialize: deserialize_dropnshop_GetOrderRequest,
    responseSerialize: serialize_dropnshop_OrderResponse,
    responseDeserialize: deserialize_dropnshop_OrderResponse,
  },
  listOrders: {
    path: '/dropnshop.OrderService/ListOrders',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.ListOrdersRequest,
    responseType: order_pb.ListOrdersResponse,
    requestSerialize: serialize_dropnshop_ListOrdersRequest,
    requestDeserialize: deserialize_dropnshop_ListOrdersRequest,
    responseSerialize: serialize_dropnshop_ListOrdersResponse,
    responseDeserialize: deserialize_dropnshop_ListOrdersResponse,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
