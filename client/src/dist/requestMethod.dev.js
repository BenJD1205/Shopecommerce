"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRequest = exports.publicRequest = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = "http://localhost:5000/api/";
var TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGViNmY4Zjg0MTBhYTY1OTk0MTJhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzA3NzExOCwiZXhwIjoxNjMzMzM2MzE4fQ.PMJPzuJSIxHImTurjC51mPpwFCYDFlXaLkxgujII1nI"; // const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

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