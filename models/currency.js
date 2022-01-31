const connection = require('../connection/index');
class Currency {
    #id;
    #name;

      async getAllCurrencies() {
    
        let results = [];
        await connection.query('SELECT * FROM currency')
          .then(([rows, fields]) => {
            results = rows;
          })
          .catch((err) => {
            console.error(err);
            throw new Error('An error occurred while fetching currency');
          });
        return results;
      }


};

module.exports = Currency;