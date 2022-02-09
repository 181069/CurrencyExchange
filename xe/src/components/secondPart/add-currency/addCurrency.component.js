import React, { useState } from "react";
import { Collapse } from "antd";
import classes from "./add-currency.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddCurrency = (props) => {
  const { Panel } = Collapse;
  const [addClick, setAddClick] = useState(false);
  return (
    <>
      {/* <Collapse>
        <Panel
          header={
            <div>
              {props.editClick ? (
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
          {Object.keys(props.data)
            .filter((item1) =>
              props.defaultData.some((item2) => item1 !== item2.code)
            )
            .map((item) => (
              <p>{props.data[item].numericCode}</p>
            ))}

          <p>Item1</p>
        </Panel>
      </Collapse> */}

      <div className={classes.wrapper}>
        {addClick ? (
          <div className={classes.content}>
            <div className={classes.search}>
              <input type="text" placeholder="Type to Search" />
              <button
                className={classes.close}
                onClick={() => setAddClick(!addClick)}
              >
                X
              </button>
            </div>
            <div className={classes.options}>
              {Object.keys(props.data)
                .filter(
                  (item1) =>
                    !(
                      props.defaultData.some((item2) => item1 === item2.code) // we have a problem here
                    )
                )
                .map((item, index) => (
                  <button
                    key={index}
                    className={classes.optionBtn}
                    onClick={() => {
                      console.log("hhhhh");
                      props.setDefaultData([
                        ...props.defaultData,
                        {
                          id: new Date().getTime(),
                          numericCode: `${props.data[item].numericCode}`,
                          code: `${props.data[item].code.toLowerCase()}`,
                        },
                      ]);
                    }}
                  >
                    {" "}
                    <img
                      src={`https://flagcdn.com/32x24/${props.data[item].code
                        .substring(0, 2)
                        .toLowerCase()}.png`}
                      alt={props.data[item].code}
                    />{" "}
                    <span className={classes.code}>
                      {props.data[item].code}
                    </span>
                    <span className={classes.hyphen}> - </span>
                    {props.data[item].name}
                  </button>
                ))}
            </div>
          </div>
        ) : (
          <div className={classes.addBtn}>
            {props.editClick ? (
              <button disabled className={classes.addBtn}>
                <span className={classes.addCircle}>
                  <span className={classes.addIcon}>+</span>
                </span>
                Add Currency
              </button>
            ) : (
              <button
                className={classes.addBtn}
                onClick={() => setAddClick(!addClick)}
              >
                <span className={classes.addCircle}>
                  <span className={classes.addIcon}>+</span>
                </span>
                Add Currency
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AddCurrency;
