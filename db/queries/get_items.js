const db = require('../connection');
// get all items from items table
const getItems = () => {
  return db.query('SELECT * FROM items;')
    .then(data => {
      return data.rows;
    })
    .catch((e) => {
      console.log(e.message);
    });
};

module.exports = { getItems };
