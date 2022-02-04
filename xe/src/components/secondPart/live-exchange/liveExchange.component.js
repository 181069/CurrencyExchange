import React, { useEffect, useState } from "react";
import { Switch, Button, Collapse } from "antd";
import "antd/dist/antd.css";
import classes from "./live-exchange.module.css";
import Counter from "../counter/counter.component";
import Chart from "../chart/chart.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const LiveExchange = () => {
  const [data, setData] = useState([]);
  const [inverse, setInverse] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [updateDate, setUpdateDate] = useState(new Date().toUTCString());
  const [defaultData, setDefaultData] = useState(["USD", "CAD", "GBP", "EUR"]);
  const { Panel } = Collapse;

  const getCurrencyData = (c) => {
    fetch(`http://www.floatrates.com/daily/${c[0]}.json`)
      .then(async (result) => {
        const fResult = await result.json();
        console.log(fResult);
        setData(fResult);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (key) => {
    setDefaultData(defaultData.filter((item) => item.key !== key));
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
            Inverse{" "}
            {editClicked ? (
              <Switch disabled />
            ) : (
              <Switch
                className={
                  editClicked ? classes.disableBtn : classes.inverseBtn
                }
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
            .map((val, key) => (
              // I will move it to exchange-item component
              <div key={key} className={classes.currencyRow}>
                <div>
                  <button
                    className={classes.currencyBtn}
                    onClick={() => {
                      setDefaultData([data[val].code, ...defaultData]);
                    }}
                  >
                    <img
                      src={`https://flagcdn.com/32x24/${data[val].code
                        .substring(0, 2)
                        .toLowerCase()}.png`}
                      alt={data[val].code}
                    />
                    <span className={classes.currencyBtnTxt}>
                      {" "}
                      {data[val].code}{" "}
                    </span>
                  </button>
                </div>
                {inverse ? (
                  <div>{data[val].inverseRate.toFixed(4)}</div>
                ) : (
                  <div>{data[val].rate.toFixed(4)}</div>
                )}
                <div>
                  {(
                    (data[val].rate - data[val].inverseRate) /
                    data[val].rate
                  ).toFixed(3)}
                  %
                </div>
                <div>
                  <Chart />
                </div>
                <div>
                  <div className={classes.btnDiv}>
                    {editClicked ? (
                      <button disabled className={classes.sendBtn}>
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className={classes.sendIcon}
                        />
                        Send
                      </button>
                    ) : (
                      <button className={classes.sendBtn}>
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className={classes.sendIcon}
                        />
                        Send
                      </button>
                    )}
                    {editClicked && (
                      <button
                        className={classes.deleteBtn}
                        onClick={(e) => console.log(e)}
                      >
                        -
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Currency Div which contain add currency btn and the counter */}
        <div className={classes.currencyDiv}>
          <Collapse defaultActiveKey={["1"]}>
            <Panel
              header={
                <div>
                  {editClicked ? (
                    <button disabled className={classes.addBtn}>
                      <span className={classes.addCircle}>
                        <span className={classes.addIcon}>+</span>
                      </span>
                      Add Currency
                    </button>
                  ) : (
                    <button className={classes.addBtn}>
                      <span className={classes.addCircle}>
                        <span className={classes.addIcon}>+</span>
                      </span>
                      Add Currency
                    </button>
                  )}
                </div>
              }
              showArrow={false}
            >
              <p>sdgfdsfg</p>
            </Panel>
          </Collapse>

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
