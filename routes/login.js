// User login
const express = require('express');
const router  = express.Router();
const loginQuery = require("../db/queries/get_user_with_email");
const maxOrderIDQuery = require("../db/queries/get_max_orderID");

router.get('/', (req, res) => {
  // check if logged in
  if (!req.session || !req.session.id) {
    res.render("login", { id: null });
  } else {
    res.redirect("/menu");
  }
});

router.post('/', (req, res) => {
  const { email, password} = req.body;
  
  loginQuery.getUserWithEmail(email)
    .then((user) => {
      if (!user) {
        return res.send({ error: "no user with that id" });
      }
      
      if (password !== user[0].password) {
        return res.send({error: "Incorrect Password" });
      }
      
      // get max order ID from Order table and give a new order ID to current user
      maxOrderIDQuery.maxOrderID()
        .then((maxOrderID) => {
          if (!maxOrderID) {
            return res.send({error: "cannot get max order ID"});
          }

          // set session cookie
          req.session.id = user[0].id;
          req.session.name = user[0].name;
          req.session.orderID = maxOrderID[0].id + 1;
          console.log(req.session);
          res.redirect("/menu");
        })
        .catch((e) => res.send(e));
    })
    .catch((e) => res.send(e));
});

module.exports = router;
