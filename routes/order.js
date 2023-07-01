const express = require('express');
const router  = express.Router();

// Cart page
router.get('/', (req, res) => {
  

  // Render the cart page and pass the cartItems to the template
  res.render('order', { id:null, name:null });
});

module.exports = router;
