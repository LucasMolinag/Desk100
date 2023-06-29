const express = require('express');
const router  = express.Router();
const addOrderQueries = require('../db/queries/add_order');

router.post('/', (req, res) => {
  const { id } = req.body
  console.log(req.body)
  console.log('buttong testing--------');
  res.json({
    respon: 'success',
    id: id
  })
  // addOrderQueries.addOrder()
  //   .then(users => {
  //     res.json({ users });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
});

module.exports = router;
