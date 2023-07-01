const express = require('express');
const router  = express.Router();

// Cart page
router.get('/', (req, res) => {
  const templateVars = {
    id: req.session.id,
    name: req.session.name
  };

  // Render the cart page and pass the cartItems to the template
  res.render('order', templateVars);
});

module.exports = router;
