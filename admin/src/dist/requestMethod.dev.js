"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRequest = exports.publicRequest = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = "http://localhost:5000/api/";
var TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

var publicRequest = _axios["default"].create({
  baseURL: BASE_URL
});

exports.publicRequest = publicRequest;

var userRequest = _axios["default"].create({
  baseURL: BASE_URL,
  headers: {
    token: "Bearer ".concat(TOKEN)
  }
});

exports.userRequest = userRequest;