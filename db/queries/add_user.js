const db = require('../connection');

const addUser = function(name, phone_number, email, password) {
  const queryString = `INSERT INTO users (name, phone_number, email, password) 
  VALUES ($1, $2, $3, $4) RETURNING *;`;
  const values = [name, phone_number, email, password];

  return db.query(queryString, values)
    .then(result => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addUser };