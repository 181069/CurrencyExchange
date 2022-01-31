import React, { useEffect, useState } from "react";
import { Switch, Button } from "antd";
import "antd/dist/antd.css";
import classes from "./live-exchange.module.css";
import Counter from "../counter/counter.component";
import Chart from "../chart/chart.component";

const LiveExchange = () => {
  const [data, setData] = useState([]);
  const [inverse, setInverse] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [updateDate, setUpdateDate] = useState(new Date().toUTCString());
  const [temp, setTemp] = useState([]);
  const [finalTemp, setFinalTemp] = useState([]);
  const [defaultData, setDefaultData] = useState(["USD", "CAD", "GBP", "EUR"]);

  const getCurrencyData = (c) => {
    fetch(`http://www.floatrates.com/daily/${c[0]}.json`)
      .then(async (result) => {
        const fResult = await result.json();
        console.log(fResult);
        setData(fResult);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCurrencyData(defaultData);
  }, [defaultData]);

  setInterval(() => {
    setUpdateDate(new Date().toUTCString());
  }, 60000);

  return (
    <div className={classes.LiveExchange}>
      <p>
        {temp.map((val, key) => (
          <div key={key}>{console.log(val.currencies)}</div>
        ))}
      </p>
      <h2 className={classes.title}>Live Exchange Rates</h2>
      <table className={classes.liveTable}>
        <thead>
          <tr>
            <th className={classes.tableHeader}>
              Inverse <Switch onChange={() => setInverse(!inverse)} />
            </th>
            <th className={classes.tableHeader}>Amount</th>
            <th className={classes.tableHeader}>Change(24h)</th>
            <th className={classes.tableHeader}>Chart(24h)</th>
            <th className={classes.tableHeader}>
              <Button onClick={() => setEditClicked(!editClicked)}>
                {editClicked ? "Done" : "Edit"}{" "}
              </Button>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {" "}
              <img
                src={`https://flagcdn.com/16x12/${defaultData[0]
                  .substring(0, 2)
                  .toLowerCase()}.png`}
                alt={defaultData[0]}
              />{" "}
              {defaultData[0]}
            </td>
            {inverse ? <td>Inverse</td> : <td>1</td>}
          </tr>
          {Object.keys(data).map((val, key) => (
            <tr key={key} className="currency-row">
              <td>
                <button
                  onClick={() => {
                    setDefaultData([data[val].code, ...defaultData]);
                  }}
                >
                  <img
                    src={`https://flagcdn.com/16x12/${data[val].code
                      .substring(0, 2)
                      .toLowerCase()}.png`}
                    alt={data[val].code}
                  />
                  {data[val].code}{" "}
                </button>
              </td>
              {inverse ? (
                <td>{data[val].inverseRate.toFixed(4)}</td>
              ) : (
                <td>{data[val].rate.toFixed(4)}</td>
              )}
              <td>
                {(
                  (data[val].rate - data[val].inverseRate) /
                  data[val].rate
                ).toFixed(3)}
                %
              </td>
              <td>
                <Chart />
              </td>
              <td>
                <div className={classes.Btn}>
                  <button>Send</button>
                  {editClicked && (
                    <button className={classes.deleteBtn}>-</button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.currencyDiv}>
        <div>
          <button>Add Currency</button>
        </div>
        <div className={classes.counterDiv}>
          <Counter />
          <p className={classes.counterP}>Last updated {updateDate}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveExchange;
