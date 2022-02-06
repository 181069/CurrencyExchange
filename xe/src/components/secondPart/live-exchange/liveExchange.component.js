import React, { useEffect, useState } from "react";
import { Switch, Button } from "antd";
import "antd/dist/antd.css";
import classes from "./live-exchange.module.css";
import Counter from "../counter/counter.component";
import ExchangeItem from "../exchange-item/exchangeItem.component";
import AddCurrency from "../add-currency/addCurrency.component";

const LiveExchange = () => {
  const [data, setData] = useState([]);
  const [inverse, setInverse] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [updateDate, setUpdateDate] = useState(new Date().toUTCString());
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

  const handleDelete = (index) => {
    setDefaultData(defaultData.filter((item) => item.index !== index));
  };

  useEffect(() => {
    getCurrencyData(defaultData);
  }, [defaultData]);

  setInterval(() => {
    setUpdateDate(new Date().toUTCString());
  }, 60000);

  return (
    <div className={classes.LiveExchange}>
      <h2 className={classes.title}>Live Exchange Rates</h2>
      <div className={classes.liveTable}>
        <div className={classes.tableHeader}>
          <div className={classes.tableHeaderElem}>
            <span>Inverse</span>
            {editClicked ? (
              <Switch disabled />
            ) : (
              <Switch
                className={classes.inverseBtn}
                onChange={() => setInverse(!inverse)}
              />
            )}
          </div>
          <div className={classes.tableHeaderElem}>Amount</div>
          <div className={classes.tableHeaderElem}>Change(24h)</div>
          <div className={classes.tableHeaderElem}>Chart(24h)</div>
          <div className={classes.tableHeaderElem}>
            <Button
              className={classes.editBtn}
              onClick={() => setEditClicked(!editClicked)}
            >
              {editClicked ? "Done" : "Edit"}{" "}
            </Button>
          </div>
        </div>

        <div>
          <div className={classes.mainRow}>
            <div>
              {" "}
              <img
                src={`https://flagcdn.com/32x24/${defaultData[0]
                  .substring(0, 2)
                  .toLowerCase()}.png`}
                alt={defaultData[0]}
              />{" "}
              {defaultData[0]}
            </div>
            <div className={classes.mainRowAmount}>
              {inverse ? <div>Inverse</div> : <div>1</div>}
            </div>
          </div>
          {Object.keys(data)
            .filter((item1) =>
              defaultData.some((item2) => item1 === item2.toLowerCase())
            )
            .map((item, index) => (
              <ExchangeItem
                key={index}
                item={item}
                data={data}
                defaultData={defaultData}
                inverse={inverse}
                editClicked={editClicked}
                setDefaultData={setDefaultData}
              />
            ))}
        </div>
        {/* Currency Div which contain add currency btn and the counter */}
        <div className={classes.currencyDiv}>
          <AddCurrency editClicked={editClicked} />
          <div className={classes.counterDiv}>
            <Counter />
            <p className={classes.counterP}>Last updated {updateDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveExchange;
