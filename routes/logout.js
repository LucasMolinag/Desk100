// User login
const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {
  req.session = null;
  res.redirect("/menu");
})

module.exports = router;