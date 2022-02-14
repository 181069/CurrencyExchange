
const express = require("express");
const RecordService = require("../services/recordService");
const recordRoute = express.Router();
const recordService = new RecordService();

recordRoute.get("/getAllRecords",async (req,res)=>{
    res.send(await recordService.getAllRecords().then((res)=>res));
})
recordRoute.post("/addNewRecord", async (req,res) => {
    const body = req.body;
    return res.send({result: await recordService.addNewRecord(body).then((res)=>res)});
})
module.exports = recordRoute;

