const db = require('../connection');

const getUserWithEmail = function(email) {
  console.log('queries - 02 - get users with email');
  return db.query(`SELECT * FROM users WHERE email = $1`, [`${email}`])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

module.exports = { getUserWithEmail };