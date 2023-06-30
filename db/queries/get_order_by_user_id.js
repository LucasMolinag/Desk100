const db = require('../connection');

const getOrderByUserID = (userID, orderID) => {
  console.log('getOrderByUserID========='); // test -----------
  const queryString = `
  SELECT order_id, item_id, name, quantity, price*quantity AS total
  FROM order_items
  JOIN items ON item_id = items.id
  WHERE order_id = 2
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
