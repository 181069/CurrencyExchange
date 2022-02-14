
const connection = require("../connection/index");
class Alert{
    #id;
    #text;
    async addAlert(alert){
     const sqlQuery = `INSERT INTO alert (ID,TEXT) VALUES (NULL,'${alert.text}')`;
   return await connection.query(sqlQuery).then(([rows, fields]) => {
       return 'successfully added a new alert';
     }).catch((err) => err);
    }
    getAlert(){
     return{
         text:this.#text,
     };
    }
  async getAllAlerts(){
   let result=[];
   await connection.query(`SELECT * FROM alert`).then(([rows,fields])=>{result=rows}).catch((err)=>{
    console.error(err);
      throw new Error('An error occured while fetching alerts ');
   });
   return result;
  }
}
module.exports = Alert;

