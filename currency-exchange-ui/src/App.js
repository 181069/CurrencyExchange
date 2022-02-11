import "./App.css";
import LiveExchangeRates from "./components/LiveExchangeRates.component";
import NavBar from "./components/NavBar.component";
import TabBox from "./components/TabBox.component";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrencyCharts from "./routes/currencycharts";
import RateAlerts from "./routes/ratealerts";
import CurrencyConvert from "./routes/currencyconvert";
import SendMoney from "./routes/send-money";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <TabBox />

        <Routes>
          <Route path="/" element={<CurrencyConvert />} />
          <Route path="/currencycharts" element={<CurrencyCharts />} />
          <Route path="/ratealerts" element={<RateAlerts />} />
          <Route path="/currencyconverter" element={<CurrencyConvert />} />
          <Route path="/send-money" element={<SendMoney />} />
        </Routes>
        <LiveExchangeRates currency={["dummy payload"]} />
      </BrowserRouter>
    </div>
  );
}

export default App;
