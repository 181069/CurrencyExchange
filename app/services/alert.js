const Alert =require("../models/alert");
const myAlert = new Alert();
class AlertServices{
    async getAllAlert(){
        console.log("returned",await myAlert.getAllAlerts());
        return await myAlert.getAllAlerts().then((res)=>res);
    }
    async addNewAlert(alert){
        return await myAlert.addAlert(alert).then((res)=>res);
    }
}
module.exports = AlertServices;


