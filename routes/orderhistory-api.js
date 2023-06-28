const express = require('express');
const router  = express.Router();
const database = require("../db/queries/get_all_orders");

// http://localhost:8080/orderhistory
router.get('/', (req, res) => {
  // user_ID = req.session.user_ID; TODO use session user_ID
  // if(user_ID) {  TODO use this one
  if (true) {
    database.getOrders('2').then((orders) => {    // TODO use user_ID instead of '2'
      console.log('in orderhistory');
      console.log(orders)
      res.send(orders);
    })
    .catch((e) => res.send(e));
  }
}); 

module.exports = router;
