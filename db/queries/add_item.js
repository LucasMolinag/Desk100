const db = require('../connection');

const addItem = function(url, name, price, description, cookTime) {
  const queryString = `INSERT INTO items (name, price, picture_url, description, cook_time_in_minutes) 
  VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
  const values = [name, price, url, description, cookTime];

  return db.query(queryString, values)
    .then(result => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addItem };