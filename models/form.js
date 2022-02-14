const connection = require('../connection/index');
class Form {
    #id;
    #sender;
    #receiver;
    #date;
    #ammount; 
    #currencyId;
    #paymentId;


    async addForm(form) {
      console.log("momde",form);
        const sqlQuery = `INSERT INTO form (id, sender, receiver, ammount,currencyId, date, paymentId) VALUES (NULL,'${form.sender
          }', '${form.receiver}', '${form.ammount}', '${form.currencyId}', '${form.date}', '${form.paymentId}')`;
    
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