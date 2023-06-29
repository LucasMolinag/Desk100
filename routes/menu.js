// User login
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const templateVars = {
    id: req.session.id,
    name: req.session.name
  };
  console.log(templateVars, "console log from /menu.js");
  res.render('menu', templateVars);
});

module.exports = router;
