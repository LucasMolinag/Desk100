// User login
const express = require('express');
const router  = express.Router();
const loginQuery = require("../db/queries/02_get_user_with_email");

router.get('/', (req, res) => {
  console.log("routes - login - get");
  res.render('login');


  const userID = req.session.userID;
  const user = users[userID];

  if (!user) {
    res.render("login", { user: null });
  } else {
    res.redirect("/index");
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
