
const connection = require("../connection/index");
class Record {
  #id;
  #name;
  #email;
  async addRecord(record) {
    const isExistingRecord = await connection.query(`SELECT * FROM records where email='${record.email}'`).then(([rows, fields]) => {
      if (rows.lenght > 0) {
        return true;
      }
      else return false;
    });
    if (isExistingRecord) {
      return "this email is already found please try with other email";
    }
    const sqlQuery = `INSERT INTO records (ID,NAME,EMAIL) VALUES (NULL,'${record.name}','${record.email}')`;
    return await connection.query(sqlQuery).then(([rows, fields]) => {
      return 'successfully added a new record';
    }).catch((err) => err);
  }

  getUser() {
    return {
      name: this.#name,
      email: this.#email,
    };
  }
  async getAllRecord() {
    let result = [];
    await connection.query(`SELECT email FROM records`).then(([rows, fields]) => { result = rows; }).catch((err) => {
      console.error(err);
      throw new Error('An error occured while fetching records ');
    });
    return result;
  }
}
module.exports = Record;
