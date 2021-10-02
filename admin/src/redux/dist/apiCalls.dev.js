"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProduct = exports.updateProduct = exports.deleteProduct = exports.getProducts = exports.login = void 0;

var _userRedux = require("./userRedux");

var _productRedux = require("./productRedux");

var _requestMethod = require("../requestMethod");

//login
var login = function login(dispatch, user) {
  var res;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch((0, _userRedux.loginStart)());
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_requestMethod.publicRequest.post("/auth/login", user));

        case 4:
          res = _context.sent;
          dispatch((0, _userRedux.loginSuccess)(res.data));
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          dispatch((0, _userRedux.loginFailure)());

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //getProducts


exports.login = login;

var getProducts = function getProducts(dispatch) {
  var res;
  return regeneratorRuntime.async(function getProducts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          dispatch((0, _productRedux.getProductStart)());
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_requestMethod.publicRequest.get("/products"));

        case 4:
          res = _context2.sent;
          dispatch((0, _productRedux.getProductSuccess)(res.data));
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          dispatch((0, _productRedux.getProductFailure)());

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //deleteProduct


exports.getProducts = getProducts;

var deleteProduct = function deleteProduct(id, dispatch) {
  return regeneratorRuntime.async(function deleteProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          dispatch((0, _productRedux.deleteProductStart)());

          try {
            // await userRequest.delete("/products/"+id)
            dispatch((0, _productRedux.deleteProductSuccess)(id));
          } catch (err) {
            dispatch((0, _productRedux.deleteProductFailure)());
          }

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //updateProduct


exports.deleteProduct = deleteProduct;

var updateProduct = function updateProduct(id, product, dispatch) {
  return regeneratorRuntime.async(function updateProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          dispatch((0, _productRedux.deleteProductStart)());

          try {
            // await userRequest.delete("/products/"+id)
            dispatch((0, _productRedux.deleteProductSuccess)(product, id));
          } catch (err) {
            dispatch((0, _productRedux.deleteProductFailure)());
          }

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //addProduct


exports.updateProduct = updateProduct;

var addProduct = function addProduct(product, dispatch) {
  var res;
  return regeneratorRuntime.async(function addProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          dispatch((0, _productRedux.addProductStart)());
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_requestMethod.userRequest.post("/products", product));

        case 4:
          res = _context5.sent;
          dispatch((0, _productRedux.addProductSuccess)(res.data));
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          dispatch((0, _productRedux.addProductFailure)());

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.addProduct = addProduct;