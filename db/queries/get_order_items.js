const db = require('../connection');

const getOrderItems = function () 
{
  return db
  .query(
    'SELECT items.name, items.price, order_items.quantity FROM items JOIN order_items ON order_items.item_id = items.id JOIN orders ON orders.id = order_items.order.id WHERE item_id = $1 WHERE order_id = $2 GROUP BY items.id, order_items.quantity ORDER BY items.id;', [ID])
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getOrderItemsById = function () 
{
  return db
  .query(
    'SELECT items.name, items.price, order_items.quantity FROM items JOIN order_items ON order_items.item_id = items.id JOIN orders ON orders.id = order_items.order.id  WHERE order_id = $1 GROUP BY order_items.order_id ORDER BY items.id;')
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getOrderItems,  getOrderItemsById};