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
  const [editClick, setEditClick] = useState(false);
  const [updateDate, setUpdateDate] = useState(new Date().toUTCString());
  const [defaultData, setDefaultData] = useState([
    { id: 1, numericCode: "840", code: "usd" },
    { id: 2, numericCode: "124", code: "cad" },
    { id: 3, numericCode: "826", code: "gbp" },
    { id: 4, numericCode: "978", code: "eur" },
  ]);

  const getCurrencyData = (c) => {
    fetch(`http://www.floatrates.com/daily/${c[0].code}.json`).then(
      async (result) => {
        const fResult = await result.json();
        setData(fResult);
      }
    );
  };

  const handleDelete = (numericCode) => {
    setDefaultData(
      defaultData.filter((item) => item.numericCode !== numericCode)
    );
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
            {editClick ? (
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
              onClick={() => setEditClick(!editClick)}
            >
              {editClick ? "Done" : "Edit"}{" "}
            </Button>
          </div>
        </div>

        <div>
          <div className={classes.mainRow}>
            <div>
              {" "}
              <img
                src={`https://flagcdn.com/32x24/${defaultData[0].code
                  .substring(0, 2)
                  .toLowerCase()}.png`}
                alt={defaultData[0].code}
              />{" "}
              {defaultData[0].code.toUpperCase()}
            </div>
            <div className={classes.mainRowAmount}>
              {inverse ? <div>Inverse</div> : <div>1</div>}
            </div>
          </div>
          {Object.keys(data)
            .filter((item1) =>
              defaultData.some((item2) => item1 === item2.code)
            )
            .map((item, index) => (
              <ExchangeItem
                key={index}
                numericCode={data[item].numericCode}
                item={item}
                data={data}
                defaultData={defaultData}
                inverse={inverse}
                editClick={editClick}
                setDefaultData={setDefaultData}
                handleDelete={handleDelete}
              />
            ))}
        </div>
        {/* Currency Div which contain add currency btn and the counter */}
        <div className={classes.currencyDiv}>
          <AddCurrency
            editClick={editClick}
            data={data}
            defaultData={defaultData}
            setDefaultData={setDefaultData}
          />
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
