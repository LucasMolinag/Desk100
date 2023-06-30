const express = require('express');
const router  = express.Router();
const orderQuery = require('../db/queries/get_item_by_id');

router.post('/', (req, res) => {
  const { itemId } = req.body;

  // Retrieve the product information from the database based on productId
  orderQuery.getItemById(itemId).then((items)=> {

  if (!items.length) {
    // Handle if the product is not found
    res.status(404).send('Item not found');
    return;
  }

  // Get the existing order items from the session or create an empty array
  const orderItems = req.session.orderItems || [];

  // Add the item to the order
  orderItems.push(items[0]);

  // Update the order items in the session
  req.session.orderItems = orderItems;
console.log("test", req.session.orderItems);

  res.redirect("/menu");

  });
});

module.exports = router;
