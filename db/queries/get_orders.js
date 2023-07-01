const db = require('../connection');

// get all item from order_item
const getAll = () => {
  return db.query('SELECT * FROM order_items;')
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// get item with match ID
const getByOrderID = (orderID) => {
  const queryString = `
  SELECT * 
  FROM order_items
  WHERE order_id = $1
  ;`;
  const values = [orderID];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch((e) => {
      console.log(e.message);
    });
};

module.exports = { getAll, getByOrderID };