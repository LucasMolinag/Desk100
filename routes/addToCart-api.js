const express = require('express');
const router  = express.Router();
const addOrderQueries = require('../db/queries/add_order');

router.get('/', (req, res) => {
  console.log('buttong testing--------');
  // addOrderQueries.addOrder()
  //   .then(users => {
  //     res.json({ users });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
});

module.exports = router;
