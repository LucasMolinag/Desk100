const db = require('../connection');

const updateOrder = (orderID, itemID, quantity) => {
  const queryString = `
  UPDATE order_items
  SET quantity = $1
  WHERE order_id = $2 AND item_id = $3
  RETURNING *;`;
  const values = [quantity, orderID, itemID];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { updateOrder };