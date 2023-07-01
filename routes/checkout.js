const express = require('express');
const router  = express.Router();
const checkout = require("../db/queries/checkout");
const getOrderByUserIDQuery = require("../db/queries/get_order_by_user_id");

router.get('/', (req, res) => {
  const templateVars = {
    id: req.session.id,
    name: req.session.name
  };
  
  res.render("checkout", templateVars);

});

module.exports = router;
