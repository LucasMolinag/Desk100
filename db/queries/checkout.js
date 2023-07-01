const db = require('../connection');

const checkout = function(order_id) {
  const queryString = `
  SELECT order_id, item_id, quantity
  FROM order_items
  JOIN items ON order_items.item_id = items.id
  ;`;
  // const values = [order_id];

  return db.query(queryString)
    .then(result => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { checkout };