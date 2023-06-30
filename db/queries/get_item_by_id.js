const db = require('../connection');

const getItemById = (itemID) => {
  return db.query('SELECT * FROM items WHERE id = $1;', [itemID])
  .then(data => {
    console.log(data.rows);
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getItemById };