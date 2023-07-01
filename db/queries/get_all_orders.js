const db = require('../connection');

const getOrderHistoryByUser = (user_ID) => {
  const queryString = `
  SELECT * 
  FROM orders
  JOIN order_items ON order_id = orders.id
  JOIN items ON item_id = items.id
  WHERE user_id = $1 
  AND time_completed IS NOT NULL
  GROUP BY orders.id, order_items.order_id, order_items.item_id, items.id
  ORDER BY orders.id;
  `;
  const values = [user_ID];

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

module.exports = { getOrderHistoryByUser };
