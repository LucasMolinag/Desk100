const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/02_get_user_with_email');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
