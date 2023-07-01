const express = require('express');
const router  = express.Router();
const checkout = require("../db/queries/checkout");
const getOrderByUserIDQuery = require("../db/queries/get_order_by_user_id");

router.post('/', (req, res) => {
  // console.log('route - order-api --------'); // test -----------
  const userID = req.session.id;
  const orderID = req.session.orderID;
  // console.log('req.session ', req.session); // test---------

  // getOrderByUserIDQuery.getOrderByUserID(userID, 2) // test -----------
  getOrderByUserIDQuery.getOrderByUserIDCheckout(userID, orderID)
    .then(items => {
      // console.log('return from jquery'); // test -----------
      // console.log(items); // test -----------
      // res.send(items);
      console.log('items',items);
    })
    .catch((e) => res.send(e));
});

module.exports = router;
