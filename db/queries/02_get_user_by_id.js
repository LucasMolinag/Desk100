const db = require('../connection');

const getUserByID = function (ID) 
{
  return db
  .query(
    'SELECT * FROM users WHERE id = $1;', [ID])
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getUserByID };
