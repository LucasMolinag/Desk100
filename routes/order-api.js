const express = require('express');
const router  = express.Router();
const orderQuery = require('../db/queries/get_item_by_id');

router.post('/', (req, res) => {
  const { itemId } = req.body;

  // Retrieve the product information from the database based on productId
  const item = orderQuery(itemId);

  if (!item) {
    // Handle if the product is not found
    res.status(404).send('Item not found');
    return;
  }

  // Get the existing order items from the session or create an empty array
  const orderItems = req.session.orderItems || [];

  // Add the item to the order
  orderItems.push(item);

  // Update the order items in the session
  req.session.orderItems = orderItems;

  // Redirect the user to the order page
  res.redirect('/order');
});

module.exports = router;