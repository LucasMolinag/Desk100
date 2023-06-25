const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log("routes - login");
  res.render('login');
}); 

module.exports = router;
