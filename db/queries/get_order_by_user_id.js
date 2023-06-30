const db = require('../connection');

const getOrderByUserID = (userID, orderID) => {
  console.log('getOrderByUserID========='); // test -----------
  const queryString = `
  SELECT order_id, item_id, items.name, quantity, price*quantity AS total
  FROM order_items
  JOIN items ON item_id = items.id
  JOIN orders ON orders.id = order_items.order_id
  JOIN users on users.id = orders.user_id
  WHERE order_id = 2 AND users.id = 2
  ;`;
  const values = [userID, orderID];
  
  return db.query(queryString, values)
    .then(data => {
      console.log('sending data.row: '); // test -----------
      console.log(data.rows); // test -----------
      return data.rows;
    })
    .catch((e) => {
      console.log(e.message);
    });
};

module.exports = { getOrderByUserID };
