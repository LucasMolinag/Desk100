const db = require('../connection');
const maxOrderID = () => {
  return db.query('SELECT max(id) AS id FROM orders;')
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { maxOrderID };
