const db = require('../connection');

const insertNewItem = function () 
{
  return db
  .query(
    `INSERT INTO items (price, picture_url, description, cook_time_in_minutes) VALUES ('$1', '$2', '$3', '$4');`)
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { insertNewItem };

