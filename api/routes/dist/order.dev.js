"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('./verifyToken'),
    verifyToken = _require.verifyToken,
    verifyTokenAndAdmin = _require.verifyTokenAndAdmin,
    verifyTokenAndAuthorization = _require.verifyTokenAndAuthorization;

var router = require('express').Router();

var Order = require('../models/Order'); //Create new order


router.post("/", verifyToken, function _callee(req, res) {
  var newOrder, savedOrder;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newOrder = new Order(req.body);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(newOrder.save());

        case 4:
          savedOrder = _context.sent;
          res.status(200).json(savedOrder);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(500).json(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); //update cart

router.put("/:id", verifyTokenAndAdmin, function _callee2(req, res) {
  var updatedOrder;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 3:
          updatedOrder = _context2.sent;
          res.status(200).json(updatedOrder);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Delete order

router["delete"]("/:id", verifyTokenAndAdmin, function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Order.findOneAndDelete(req.params.id));

        case 3:
          res.status(200).json('Order has been deleted');
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); //Get user order

router.get("/find/:userId", verifyTokenAndAuthorization, function _callee4(req, res) {
  var order;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Order.find({
            userId: req.params.userId
          }));

        case 3:
          order = _context4.sent;
          res.status(200).json(order);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Get all product

router.get("/", verifyTokenAndAdmin, function _callee5(req, res) {
  var orders;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Order.find());

        case 3:
          orders = _context5.sent;
          res.status(200).json(orders);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json(_context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Get monthly income

router.get("/income", verifyTokenAndAdmin, function _callee6(req, res) {
  var productId, date, lastMonth, previousMonth, income;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          productId = req.query.pid;
          date = new Date();
          lastMonth = new Date(date.setMonth(date.getMonth() - 1));
          previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
          _context6.prev = 4;
          _context6.next = 7;
          return regeneratorRuntime.awrap(Order.aggregate([{
            $match: _objectSpread({
              createdAt: {
                $gte: previousMonth
              }
            }, productId && {
              products: {
                $elemMatch: {
                  productId: productId
                }
              }
            })
          }, {
            $project: {
              month: {
                $month: "$createdAt"
              },
              sales: "$amount"
            }
          }, {
            $group: {
              _id: "$month",
              total: {
                $sum: "$sales"
              }
            }
          }]));

        case 7:
          income = _context6.sent;
          res.status(200).json(income);
          _context6.next = 14;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](4);
          res.status(500).json(_context6.t0);

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[4, 11]]);
});
module.exports = router;