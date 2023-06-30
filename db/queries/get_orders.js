const db = require('../connection');

// get current order
const getOrders = () => {
  return db.query('SELECT * FROM order_items;')
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getOrders };