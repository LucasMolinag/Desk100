const db = require('../connection');

const getItemById = (itemId) => {
  return db.query('SELECT * FROM items WHERE id = $1;')
  .then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getItemById };