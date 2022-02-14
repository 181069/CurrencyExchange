const connection = require('../connection/index.js');
class Form {
    #id;
    #sender;
    #receiver;
    #amount; 
    #currencyId;
    #paymentId;


    async addForm(form) {
      console.log("momde",form);
        const sqlQuery = `INSERT INTO form (id, sender, receiver, amount, currencyId, paymentId) VALUES 
        (NULL,'${form.sender}', '${form.receiver}', ${form.amount}, (SELECT id FROM currency WHERE name = '${form.currency}' LIMIT 1), (SELECT id FROM payment WHERE name = '${form.paymentMethod}'))`;
    
        return await connection.query(sqlQuery)
          .then(([rows, fields]) => {
            return 'successfully added a new user ';
          })
          .catch((err) => err);
      }

    
      async getAllForms() {
    
        let results = [];
        await connection.query('SELECT * FROM form')
          .then(([rows, fields]) => {
            results = rows;
          })
          .catch((err) => {
            console.error(err);
            throw new Error('An error occurred while fetching forms');
          });
        return results;
      }


};

module.exports = Form;