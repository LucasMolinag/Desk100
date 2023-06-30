const db = require('../connection');

// insert new order
const addNewOrder = (userID) => {
  const queryString = `
  INSERT INTO orders (user_id, time_start) 
  VALUES ($1, now()::timestamp(0)) RETURNING *;`;
  const values = [userID];

  return db.query(queryString, values)
    .then(data => {
      console.log('query - add_oreder-------'); // test ---------
      // console.log(data.rows); // test ---------
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addNewOrder };