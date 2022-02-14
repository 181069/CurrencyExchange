import "./App.css";
import LiveExchangeRates from "./components/LiveExchangeRates.component";
import NavBar from "./components/NavBar.component";
import TabBox from "./components/TabBox.component";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrencyCharts from "./routes/currencycharts";
import RateAlerts from "./routes/ratealerts";
import CurrencyConvert from "./routes/currencyconvert";
import SendMoney from "./routes/send-money";
import RangeChart from "./components/RangeChart.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-heading">
        <h1>The World's Trusted Currency Authority</h1>
        <h4>
          Check exchange rates, send money internationally, and free currency
          tools
        </h4>
      </div>
      <BrowserRouter>
        <TabBox />
        <div className="tabBox-wrapper">
          <Routes>
            <Route path="/" element={<CurrencyConvert />} />
            <Route path="/currencyconverter" element={<CurrencyConvert />} />
            <Route path="/currencycharts" element={<CurrencyCharts />} />
            <Route path="/send-money" element={<SendMoney />} />
            <Route path="/ratealerts" element={<RateAlerts />} />
          </Routes>
        </div>
        <LiveExchangeRates currency={["dummy payload"]} />
      </BrowserRouter>
    </div>
  );
}

export default App;
