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
  if (!req.session || !req.session.userID) {
    console.log("NOT logged in");
    res.render("login", { user: null });
  } else {
    console.log("logged in", req.session.userID);
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

      req.session.userID = user[0].id;
      console.log("req.session");
      console.log(req.session, req.session.userID);
      res.redirect("/");
    });
})

module.exports = router;
