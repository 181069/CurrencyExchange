const Currency = require("../models/currency");
const currencyService = new Currency();
class CurrencyService {
  async getAllCurrencies() {
    console.log("returned", await currencyService.getAllCurrencies());
    return await currencyService.getAllCurrencies().then((res) => res);
  }
  
}

module.exports =CurrencyService;
