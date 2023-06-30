const express = require('express');
const router  = express.Router();
const getOrderQueries = require('../db/queries/get_orders');
const updateItemQueries = require('../db/queries/upate_order');
const addToExistOrderQueries = require('../db/queries/add_to_existing_order');
const addNewOrderQueries = require('../db/queries/add_new_order');


router.post('/', (req, res) => {
  const { id } = req.body;
  const userOrderID = req.session.orderID;

  getOrderQueries.getOrders()
    .then((data) => {
      data.forEach(order => {
        // check if order id in table
        if (userOrderID === order.order_id) {
          // check if item already in cart
          if (id == order.item_id) {
            updateItemQueries.updateOrder(order.order_id, order.item_id, ++order.quantity)
              .then((res) => {
                if (!res) {
                  return res.send({error: "cannot update order_item table"});
                }
              })
              .catch((e) => res.send(e));
          } else {
            // insert item to table
            addToExistOrderQueries.addOrder(order.order_id, id)
              .then((res) => {
                if (!res) {
                  return res.send({error: "cannot update order_item table"});
                }
              })
              .catch((e) => res.send(e));
          }
        }
      });

      // insert new item to order and order_item table
      console.log('route - addToCart-api - addOrderQueries.addOrderb ---------', userOrderID, id); // test ---------
      const userID = req.session.id;
      addNewOrderQueries.addNewOrder(userID)
        .then((data) => {
          if (!data) {
            return data.send({error: "cannot update order_item table"});
          }
          console.log('data --------'); // test ---------
          console.log(data); // test ---------

          addNewOrderQueries.addNewOrderItem(orderID, userID)
            .then((res) => {
              if (!res) {
                return res.send({error: "cannot insert into order_item table"});
              }

              console.log('res --------'); // test ---------
              console.log(res); // test ---------
            })
            .catch((e) => res.send(e));
        })
        .catch((e) => res.send(e));
    })
    .catch((e) => res.send(e));
});

module.exports = router;
