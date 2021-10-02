"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.loginSuccess = exports.loginFailure = exports.loginStart = void 0;

var _toolkit = require("@reduxjs/toolkit");

var userSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false
  },
  reducers: {
    loginStart: function loginStart(state) {
      state.isFetching = true;
    },
    loginSuccess: function loginSuccess(state, action) {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: function loginFailure(state) {
      state.isFetching = false;
      state.error = true;
    }
  }
});
var _userSlice$actions = userSlice.actions,
    loginStart = _userSlice$actions.loginStart,
    loginFailure = _userSlice$actions.loginFailure,
    loginSuccess = _userSlice$actions.loginSuccess;
exports.loginSuccess = loginSuccess;
exports.loginFailure = loginFailure;
exports.loginStart = loginStart;
var _default = userSlice.reducer;
exports["default"] = _default;