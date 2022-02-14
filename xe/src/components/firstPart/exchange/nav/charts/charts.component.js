import { useEffect, useState } from "react";
import classes from "./charts.module.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Charts = () => {
  const [currencyExchange, setCurrencyExchange] = useState();
  const [data, setData] = useState();

  const [addClick, setAddClick] = useState(false);
  const [dataItems, setDataItems] = useState();

  const getCurrencyExchange = (startDate, endDate, from, to) => {
    fetch(
      `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=${from}&symbols=${to}`
    ).then(async (result) => {
      const finalResult = await result.json();
      setCurrencyExchange(finalResult);
      console.log(finalResult);
    });
  };

  const getCurrencyData = (c) => {
    fetch(`http://www.floatrates.com/daily/USD.json`).then(async (result) => {
      const fResult = await result.json();
      setData(fResult);
    });
  };

  useEffect(() => {
    getCurrencyExchange("2020-01-01", "2020-01-04", "USD", "EUR");
  }, []);

  let chartData = [
    { date: "2020-01-01", uv: 0.7588, pv: 2000, amt: 2000 },
    { date: "2020-01-02", uv: 0.8986, pv: 2000, amt: 2000 },
    { date: "2020-01-03", uv: 0.8824, pv: 2000, amt: 2000 },
    { date: "2020-01-04", uv: 0.8986, pv: 2000, amt: 2000 },
  ];

  return (
    <div className={classes.charts}>
      <div>
        <label>From</label>

        <label>To</label>
      </div>

      <div className={classes.chart}>
        <LineChart width={600} height={300} data={chartData}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
};
export default Charts;
