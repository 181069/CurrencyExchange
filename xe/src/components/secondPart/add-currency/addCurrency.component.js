import React, { useState } from "react";
import classes from "./add-currency.module.css";

const AddCurrency = (props) => {
  const [addClick, setAddClick] = useState(false);
  const [dataItems, setDataItems] = useState();

  const handleClick = () => {
    setAddClick(!addClick);
    setDataItems(
      Object.keys(props.data).filter(
        (item1) => !props.defaultData.some((item2) => item1 === item2.code)
      )
    );
  };

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setDataItems(
      Object.keys(props.data)
        .filter(
          (item1) => !props.defaultData.some((item2) => item1 === item2.code)
        )
        .filter((item) =>
          props.data[item].name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  };

  return (
    <>
      <div className={classes.wrapper}>
        {addClick ? (
          <div className={classes.content}>
            <div className={classes.search}>
              <input
                type="text"
                placeholder="Type to Search"
                onChange={handleChange}
              />
              <button
                className={classes.close}
                onClick={() => setAddClick(!addClick)}
              >
                X
              </button>
            </div>
            <div className={classes.options}>
              {dataItems.map((item, index) => (
                <button
                  key={index}
                  className={classes.optionBtn}
                  onClick={() => {
                    props.setDefaultData([
                      ...props.defaultData,
                      {
                        id: new Date().getTime(),
                        numericCode: `${props.data[item].numericCode}`,
                        code: `${props.data[item].code.toLowerCase()}`,
                      },
                    ]);
                    setAddClick(false);
                  }}
                >
                  {" "}
                  <img
                    src={`https://flagcdn.com/32x24/${props.data[item].code
                      .substring(0, 2)
                      .toLowerCase()}.png`}
                    alt={props.data[item].code}
                  />{" "}
                  <span className={classes.code}>{props.data[item].code}</span>
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
              <button className={classes.addBtn} onClick={handleClick}>
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
