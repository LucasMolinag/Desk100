const db = require('../connection');

// insert new order
const addOrder = (order_id, item_id, quantity) => {
  const queryString = `
  INSERT INTO order_items (order_id, item_id, quantity) 
  VALUES ($1, $2, $3) RETURNING *;`;
  const values = [order_id, item_id, quantity];

  return db.query(queryString, values)
    .then(data => {
      console.log('query - add_oreder'); // test---------
      console.log(data); // test---------
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addOrder };