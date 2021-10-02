"use strict";

var router = require('express').Router();

var stripe = require('stripe')("sk_test_51JdVXsC8hAea6OrXw3iBiqhXBBggwJNAYecpuoyDSJ0zBYOggp7H8ymIY00rod44THizPAv3f8xNTm0MUg8B0b5P00Qt8bFXBi");

router.post("/payment", function (req, res) {
  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: "usd"
  }, function (stripeErr, stripeRes) {
    if (stripeErr) {
      res.status(500).json(stripeErr);
    } else {
      res.status(200).json(stripeRes);
    }
  });
});
module.exports = router;