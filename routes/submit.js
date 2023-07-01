const express = require('express');
const router  = express.Router();
const checkout = require("../db/queries/checkout");
const getOrderByUserIDQuery = require("../db/queries/get_order_by_user_id");
const { sendtextOrderConfirm } = require('../lib/send_sms');

router.post('/', (req, res) => {
  const userID = req.session.id;
  const orderID = req.session.orderID;


  getOrderByUserIDQuery.getOrderByUserIDSubmit(userID, orderID)
    .then(items => {
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
