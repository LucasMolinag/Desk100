const express = require('express');
const router  = express.Router();

// Cart page
router.get('/', (req, res) => {
  // Retrieve the cart items from the session
  const orderItems = req.session.orderItems || [];

  // Render the cart page and pass the cartItems to the template
  console.log(orderItems);
  res.render('order', { orderItems });
});

module.exports = router;