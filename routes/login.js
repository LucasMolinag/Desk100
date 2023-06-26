// User login
const express = require('express');
const router  = express.Router();
const loginQuery = require("../db/queries/02_get_user_with_email");

// const users = {
//   1: { id: 1, name: 'Desk100', password: 'password' },
//   2: { id: 2, name: 'User', password: 'password' }
// };

router.get('/', (req, res) => {
  if (!req.session || !req.session.id) {
    res.render("login", { id: null });
  } else {
    res.redirect("/users");
  }
}); 

router.post('/', (req, res) => {
  const { email, password} = req.body;
  
  loginQuery.getUserWithEmail(email)
    .then((user) => {
      if(!user) {
        return res.send({ error: "no user with that id" });
      }
      
      if (password !== user[0].password) {
        return res.send ({error: "Incorrect Password" });
      }

      res.redirect("/");
    });
})

module.exports = router;
