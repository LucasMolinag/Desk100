/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const database = require("../db/queries/get_all_orders");

router.get('/', (req, res) => {
  const templateVars = {
    id: req.session.id,
    name: req.session.name
  };
  res.render('order-history', templateVars);
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  database.getOrderHistoryById(id).then((orders) => {    // TODO use user_ID instead of '2'
    console.log(orders, "orders");
    const templateVars = {
      id: req.session.id,
      name: req.session.name,
      orders
    };
    res.render('order-history', templateVars);
  })
    .catch((e) => res.send(e));
});

module.exports = router;
