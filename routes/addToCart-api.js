const express = require('express');
const router  = express.Router();
const getOrderQueries = require('../db/queries/get_orders');
const updateItemQueries = require('../db/queries/upate_order');
const addOrderQueries = require('../db/queries/add_order');

router.post('/', (req, res) => {
  const { id } = req.body;
  // console.log(req.body, req.session);
  const userOrderID = req.session.orderID;
  // const userOrderID = 2; // set userOrderID test---------

  getOrderQueries.getOrders()
    .then((data) => {
      // console.log('get orders--------'); // test---------
      data.forEach(order => {
        // check if order id in table
        if(userOrderID === order.order_id) {
          // check if item already in cart
          if(id == order.item_id) {
            updateItemQueries.updateOrder(order.order_id, order.item_id, ++order.quantity)
              .then((res) => {
                if(!res) {
                  return res.send({error: "cannot update order_item table"});
                }
                // console.log('update order_item table',res); // test---------
              })
              .catch((e) => res.send(e));
          } else { 
            // console.log('insert item order_item table', order.order_id, id); // test---------
            // insert item to table
            addOrderQueries.addOrder(order.order_id, id)
              .then((res) => {
                if(!res) {
                  return res.send({error: "cannot update order_item table"});
                }
                // console.log('insert item to order_item table',res); // test---------
              })
              .catch((e) => res.send(e));
          }
        } else {
          // insert new order id and item
          addOrderQueries.addOrder(userOrderID, id)
              .then((res) => {
                if(!res) {
                  return res.send({error: "cannot update order_item table"});
                }
                // console.log('insert item to order_item table',res); // test---------
              })
              .catch((e) => res.send(e));
        }
      })
    })
    .catch((e) => res.send(e));
});

module.exports = router;
