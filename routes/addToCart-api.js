const express = require('express');
const router  = express.Router();
const getOrderItemQueries = require('../db/queries/get_orders');
const updateItemQueries = require('../db/queries/upate_order');
const addToExistOrderQueries = require('../db/queries/add_to_existing_order');
const addNewOrderQueries = require('../db/queries/add_new_order');


router.post('/', (req, res) => {
  const { id } = req.body; // item id
  const userID = req.session.id;
  const orderID = req.session.orderID;
  // const orderID = 2; // test -----------
  // console.log(`userID: ${userID} orderID: ${orderID} itemID: ${id}`); // test -----------

  getOrderItemQueries.getByOrderID(orderID).then((result) => {  
    // console.log('getByOrderID', result); // test -----------
    if (result.length === 0) {
      // console.log("order DNE"); // test -----------
      addNewOrderQueries.addNewOrder(userID);
      addNewOrderQueries.addNewOrderItem(orderID, id);
    } else{
      let itemInTable = 0;
      // update item quantity
      result.forEach(item =>{
        // console.log('forEach - item.item_id ', item.item_id); // test -----------
        if (item.item_id == id) {
          itemInTable = 1;
          // console.log('item exits ', item.quantity); // test -----------
          updateItemQueries.updateOrder(orderID, id, ++item.quantity);
        }
      });
      // insert new row for the item
      if (itemInTable === 0) {
        // console.log('insert new row for the item'); // test -----------
        addToExistOrderQueries.addOrder(orderID, id);
      }
    }
  })
  .catch((e) => res.send(e));  
});

module.exports = router;
