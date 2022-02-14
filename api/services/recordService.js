
const Record =require("../models/record");
const recordServices= new Record();

class RecordServices{
  async getAllRecords()
  {
    console.log("returned",await recordServices.getAllRecord());
    return await recordServices.getAllRecord().then((res) => res);
  }
  addNewRecord = async (record)=>{
    return await recordServices.addRecord(record).then((res)=>res);
  }

}
module.exports = RecordServices ;

