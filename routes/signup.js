// User login
const express = require('express');
const router  = express.Router();
const signupQuery = require("../db/queries/add_user");

router.get('/', (req, res) => {
  // check if logged in
  if (!req.session || !req.session.id) {
    res.render("signup", { id: null });
  } else {
    res.redirect("/user");
  }
}); 

router.post('/', (req, res) => {
  const { email, password, name, phone} = req.body;
  signupQuery
    .addUser(name, phone, email, password)
    .then((user) => {
      if(!user) {
        return res.send({error: "addUser error"});
      }

      req.session.id = user.id;
      req.session.name = user.name;
      res.redirect("/menu");
    })
    .catch((err) => res.send(err));

});

module.exports = router;
