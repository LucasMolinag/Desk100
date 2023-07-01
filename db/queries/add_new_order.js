const db = require('../connection');

// insert new order
const addNewOrder = (userID) => {
  const queryString = `
  INSERT INTO orders (user_id, time_start) 
  VALUES ($1, now()::timestamp(0)) RETURNING *;`;
  const values = [userID];

  return db.query(queryString, values)
    .then(data => {
      // console.log('query - add_order -------'); // test ---------
      return data.rows;
    })
    .catch((e) => {
      console.log(e.message);
    });
};

const addNewOrderItem = (orderID, itemID) => {
  const queryString = `
  INSERT INTO order_items (order_id, item_id, quantity)
  VALUES ($1, $2, 1)
  RETURNING *;`;
  const values = [orderID, itemID];

  return db.query(queryString, values)
    .then(data => {
      // console.log('query - add_oreder_item -------'); // test ---------
      // console.log(data.rows); // test ---------
      return data.rows;
    })
    .catch((e) => {
      console.log(e.message);
    });
}

module.exports = { addNewOrder, addNewOrderItem };