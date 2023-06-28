const db = require('../connection');

const getOrders = (user_ID) => {
  return db.query(`
  SELECT * 
  FROM orders
  WHERE user_id = $1 
  AND time_completed IS NOT NULL;
  `, [user_ID])
    .then(data => {
      console.log('order history for ' + user_ID);
      console.log(data.rows);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// getOrders('2');

module.exports = { getOrders };
