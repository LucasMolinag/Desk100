const express = require('express');
const router  = express.Router();
const checkout = require("../db/queries/checkout");
const getOrderByUserIDQuery = require("../db/queries/get_order_by_user_id");
const { sendtextOrderConfirm } = require('../lib/send_sms');

router.post('/', (req, res) => {
  // console.log('route - order-api --------'); // test -----------
  const userID = req.session.id;
  const orderID = req.session.orderID;
  // console.log('req.session ', req.session); // test---------

  

  // getOrderByUserIDQuery.getOrderByUserID(userID, 2) // test -----------
  getOrderByUserIDQuery.getOrderByUserIDSubmit(userID, orderID)
    .then(items => {
      // console.log('return from jquery'); // test -----------
      // console.log(items); // test -----------
      // res.send(items);
      const orderId = items[0].order_id;
      let time = 0;
      items.forEach(ele => {
        time += ele.cook_time_in_minutes
      })
      sendtextOrderConfirm("+16044454107", `
        Thank you for your order! Your order ID is ${orderId}. It will be ready to be picked up in ${time} minutes.
      `);
      res.redirect(`/orderhistory/${orderId}`)
    })
    .catch((e) => res.send(e));
});

module.exports = router;