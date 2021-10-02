"use strict";

var express = require('express');

var app = express();

var mongoose = require("mongoose");

var dotenv = require('dotenv');

var userRoute = require('./routes/users');

var authRoute = require('./routes/auth');

var productRoute = require('./routes/products');

var cartRoute = require('./routes/cart');

var orderRoute = require('./routes/order');

var stripeRoute = require('./routes/stripe');

var cors = require('cors');

dotenv.config(); //middle ware

app.use(cors());
app.use(express.json()); //connect mongoose

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("Database connected!");
})["catch"](function (err) {
  return console.log(err);
}); //routes

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute); //port

app.listen(5000, function () {
  console.log("Server is running at port 5000");
});