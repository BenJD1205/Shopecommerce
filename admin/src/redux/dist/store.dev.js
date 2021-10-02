"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _userRedux = _interopRequireDefault(require("./userRedux"));

var _productRedux = _interopRequireDefault(require("./productRedux"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: "root",
  version: 1,
  storage: _storage["default"]
};
var rootReducer = (0, _toolkit.combineReducers)({
  user: _userRedux["default"],
  product: _productRedux["default"]
});
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);
var store = (0, _toolkit.configureStore)({
  reducer: persistedReducer,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [_reduxPersist.FLUSH, _reduxPersist.REHYDRATE, _reduxPersist.PAUSE, _reduxPersist.PERSIST, _reduxPersist.PURGE, _reduxPersist.REGISTER]
      }
    });
  }
});
exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;