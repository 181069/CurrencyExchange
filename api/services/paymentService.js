const Payment = require("../models/payment");
const paymentService = new Payment();
class PaymentService {
  async getAllPayments() {
    console.log("returned", await paymentService.getAllPayments());
    return await paymentService.getAllPayments().then((res) => res);
  }
  
}

module.exports =PaymentService;
