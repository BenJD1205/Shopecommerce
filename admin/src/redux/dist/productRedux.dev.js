"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addProductFailure = exports.addProductSuccess = exports.addProductStart = exports.updateProductFailure = exports.updateProductSuccess = exports.updateProductStart = exports.deleteProductSuccess = exports.deleteProductStart = exports.deleteProductFailure = exports.getProductFailure = exports.getProductSuccess = exports.getProductStart = void 0;

var _toolkit = require("@reduxjs/toolkit");

var productSlice = (0, _toolkit.createSlice)({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false
  },
  reducers: {
    //GET ALL
    getProductStart: function getProductStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: function getProductSuccess(state, action) {
      state.isFetching = true;
      state.products = action.payload;
    },
    getProductFailure: function getProductFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
    //Delete 
    deleteProductStart: function deleteProductStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: function deleteProductSuccess(state, action) {
      state.isFetching = true;
      state.products.splice(state.products.findIndex(function (item) {
        return item._id === action.payload.id;
      }), 1);
    },
    deleteProductFailure: function deleteProductFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
    //update
    updateProductStart: function updateProductStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: function updateProductSuccess(state, action) {
      state.isFetching = true;
      state.products[state.products.findIndex(function (item) {
        return item._id === action.payload.id;
      })] = action.payload.product;
    },
    updateProductFailure: function updateProductFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
    //Add
    addProductStart: function addProductStart(state) {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: function addProductSuccess(state, action) {
      state.isFetching = true;
      state.products.push(action.payload);
    },
    addProductFailure: function addProductFailure(state) {
      state.isFetching = false;
      state.error = true;
    }
  }
});
var _productSlice$actions = productSlice.actions,
    getProductStart = _productSlice$actions.getProductStart,
    getProductSuccess = _productSlice$actions.getProductSuccess,
    getProductFailure = _productSlice$actions.getProductFailure,
    deleteProductFailure = _productSlice$actions.deleteProductFailure,
    deleteProductStart = _productSlice$actions.deleteProductStart,
    deleteProductSuccess = _productSlice$actions.deleteProductSuccess,
    updateProductStart = _productSlice$actions.updateProductStart,
    updateProductSuccess = _productSlice$actions.updateProductSuccess,
    updateProductFailure = _productSlice$actions.updateProductFailure,
    addProductStart = _productSlice$actions.addProductStart,
    addProductSuccess = _productSlice$actions.addProductSuccess,
    addProductFailure = _productSlice$actions.addProductFailure;
exports.addProductFailure = addProductFailure;
exports.addProductSuccess = addProductSuccess;
exports.addProductStart = addProductStart;
exports.updateProductFailure = updateProductFailure;
exports.updateProductSuccess = updateProductSuccess;
exports.updateProductStart = updateProductStart;
exports.deleteProductSuccess = deleteProductSuccess;
exports.deleteProductStart = deleteProductStart;
exports.deleteProductFailure = deleteProductFailure;
exports.getProductFailure = getProductFailure;
exports.getProductSuccess = getProductSuccess;
exports.getProductStart = getProductStart;
var _default = productSlice.reducer;
exports["default"] = _default;