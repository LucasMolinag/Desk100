const express = require('express');
const router  = express.Router();
const getItemQuery = require("../db/queries/get_items");

router.get('/', (req, res) => {
  // get all items from database
  getItemQuery.getItems()
    .then(items => {
      res.send(items);
    })
    .catch((e) => res.send(e));
});

module.exports = router;
