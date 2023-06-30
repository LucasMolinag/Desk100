const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const templateVars = {
    id: req.session.id,
    name: req.session.name
  };

  res.render('order', templateVars);
});

module.exports = router;
