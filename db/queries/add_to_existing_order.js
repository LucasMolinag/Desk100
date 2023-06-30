const db = require('../connection');

// insert new order
const addOrder = (order_id, item_id) => {
  const queryString = `
  INSERT INTO order_items (order_id, item_id, quantity) 
  VALUES ($1, $2, $3) RETURNING *;`;
  const values = [order_id, item_id, 1];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addOrder };