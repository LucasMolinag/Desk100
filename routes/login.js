// User login
const express = require('express');
const router  = express.Router();
const loginQuery = require("../db/queries/get_user_with_email");

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
      // set session cookie
      req.session.id = user[0].id;
      req.session.name = user[0].name;
      res.redirect("/menu");
    })
    .catch((err) => res.send(err));
});

module.exports = router; 
