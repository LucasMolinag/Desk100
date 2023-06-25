// User login
const express = require('express');
const router  = express.Router();
const loginQuery = require("../db/queries/02_get_user_with_email");

router.get('/', (req, res) => {
  console.log("routes - login - get");
  res.render('login');
}); 

router.post('/', (req, res) => {
  console.log("routes - login - post");
  const { email, password} = req.body;
  
  loginQuery.getUserWithEmail(email)
    .then((user) => {
      console.log('user=======', user);
      if(!user) {
        console.log("no user found");
        return res.send({ error: "no user with that id" });
      }
      console.log(user[0].name, user[0].phone_number);
      if (password !== user[0].password) {
        return res.send ({error: "Incorrect Password" });
      }
      
      res.cookie('session', user[0].id, { 
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true, // Cookie is only accessible via HTTP(S)
        secure: true // Cookie is only sent over HTTPS
      });
      res.send('Login successful');
    });
})

module.exports = router;
