const express = require('express');
const router  = express.Router();
const addItemQuery = require("../db/queries/add_item");

router.get('/', (req, res) => {
  const templateVars = {
    id: req.session.id,
    name: req.session.name
  };
  res.render("addItem", templateVars);
});

router.post('/', (req, res) => {
  const { url, name, price, description, cookTime } = req.body;
  addItemQuery
    .addItem(url, name, price, description, cookTime)
    .then((item) => {
      if (!item) {
        return res.send({error: "add_item error"});
      }
      res.redirect("/menu");
    })
    .catch((e) => res.send(e));
});

module.exports = router;
