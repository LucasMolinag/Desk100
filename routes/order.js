const express = require('express');
const router  = express.Router();

// Cart page
router.get('/', (req, res) => {
  // Retrieve the order items from the session
  const orderItems = req.session.orderItems || [];

  // Render the order page and pass the orderItems to the template
  res.render('order', { orderItems });
});

module.exports = router;
