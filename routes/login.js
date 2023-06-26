// User login
const express = require('express');
const router  = express.Router();
const loginQuery = require("../db/queries/02_get_user_with_email");

// const users = {
//   1: { id: 1, name: 'Desk100', password: 'password' },
//   2: { id: 2, name: 'User', password: 'password' }
// };

router.get('/', (req, res) => {
  console.log("routes - login - get");
  // check if logged in
  if (!req.session || !req.session.id) {
    console.log("NOT logged in");
    res.render("login", { id: null });
  } else {
    console.log("logged in");
    console.log(req.session.name, req.session.name);
    res.redirect("/users");
  }
}); 

router.post('/', (req, res) => {
  console.log("routes - login - post");
  const { email, password} = req.body;
  
  loginQuery.getUserWithEmail(email)
    .then((user) => {
      if(!user) {
        console.log("no user found");
        return res.send({ error: "no user with that id" });
      }
      
      if (password !== user[0].password) {
        return res.send ({error: "Incorrect Password" });
      }
      // set session cookie
      req.session.id = user[0].id;
      req.session.name = user[0].name;
      res.redirect("/");
    });
})

module.exports = router;
