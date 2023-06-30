const db = require('../connection');

const getOrders = (user_ID, order_ID) => {
  const queryString = `
  SELECT * 
  FROM orders
  WHERE user_id = $1 
  AND time_completed IS NOT NULL;
  `;
  const values = [user_ID, order_ID];

  return db.query(queryString, values)
    .then(data => {
      console.log('order history for ' + user_ID);
      console.log(data.rows);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getOrders };
