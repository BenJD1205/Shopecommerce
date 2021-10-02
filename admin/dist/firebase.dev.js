"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = require("firebase/app");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDStWQe3DWzH3z72Xm3EUuv2MXHkNuMD98",
  authDomain: "shopecommerce-ba8cd.firebaseapp.com",
  projectId: "shopecommerce-ba8cd",
  storageBucket: "shopecommerce-ba8cd.appspot.com",
  messagingSenderId: "864781879115",
  appId: "1:864781879115:web:f54b8e3c86ec0e3e8ccace"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var _default = app;
exports["default"] = _default;