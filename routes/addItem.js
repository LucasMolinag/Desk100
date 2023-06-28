const express = require('express');
const router  = express.Router();
// const addItemQuery = require("../db/queries/add_user");

router.get('/', (req, res) => {
  // console.log("routes - addItem -------") // Remove before commit --------
  res.render("addItem", { id: null });
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
