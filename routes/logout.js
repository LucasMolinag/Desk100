// User login
const express = require('express');
const router  = express.Router();
//Changed it to .get as the logout "button" isn't a post request.
router.get('/', (req, res) => {
  req.session = null;
  res.redirect("/menu");
});

module.exports = router;
