const connection = require('../connection/index');
class Payment {
    #id;
    #name;

      async getAllPayments() {
    
        let results = [];
        await connection.query('SELECT * FROM payment')
          .then(([rows, fields]) => {
            results = rows;
          })
          .catch((err) => {
            console.error(err);
            throw new Error('An error occurred while fetching payment methods');
          });
        return results;
      }


};

module.exports = Payment;