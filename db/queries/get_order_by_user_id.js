const db = require('../connection');

const getOrderByUserID = (userID, orderID) => {
  const queryString = `
  SELECT order_id, item_id, items.name, quantity, price*quantity AS total, picture_url
  FROM order_items
  JOIN items ON item_id = items.id
  JOIN orders ON orders.id = order_items.order_id
  JOIN users on users.id = orders.user_id
  WHERE users.id = $1 AND order_id = $2
  ;`;
  const values = [userID, orderID];
  
  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch((e) => {
      console.log(e.message);
    });
};

const getOrderByUserIDCheckout = (userID, orderID) => {
  const queryString = `
  SELECT *
  FROM order_items
  JOIN items ON item_id = items.id
  JOIN orders ON orders.id = order_items.order_id
  JOIN users on users.id = orders.user_id
  WHERE users.id = $1 AND order_id = $2
  ;`;
  const values = [userID, orderID];
  
  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch((e) => {
      console.log(e.message);
    });
};

const getOrderByUserIDSubmit = (userID, orderID) => {
  const queryString = `
  SELECT *
  FROM order_items
  JOIN items ON item_id = items.id
  JOIN orders ON orders.id = order_items.order_id
  JOIN users on users.id = orders.user_id
  WHERE users.id = $1 AND order_id = $2
  ;`;
  const values = [userID, orderID];
  
  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch((e) => {
      console.log(e.message);
    });
};

module.exports = { getOrderByUserID, getOrderByUserIDCheckout, getOrderByUserIDSubmit };
