const db = require('../connection');

// insert new order
const addNewOrder = (userID, orderID, itemID) => {
  const queryString = `
  INSERT INTO order_items (order_id, item_id, quantity) 
  VALUES ($1, $2, $3) RETURNING *;`;
  const values = [order_id, item_id, 1];

  return db.query(queryString, values)
    .then(data => {
      console.log('query - add_oreder-------'); // test---------
      console.log(data.rows); // test---------
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addOrder };